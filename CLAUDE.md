# Claude.md - Next.js TypeScript Project

## Project Overview

This is a Next.js application built with TypeScript, React, and modern web development best practices.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm

## Project Structure

```
project-root/
├── app/                    # App Router directory (Next.js 13+)
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── [route]/           # Dynamic routes
├── components/            # Reusable React components
│   ├── ui/               # UI components
│   └── [feature]/        # Feature-specific components
├── lib/                  # Utility functions and helpers
├── public/              # Static assets
├── types/               # TypeScript type definitions
└── config/              # Configuration files
```

## Key Conventions

### File Naming

- **Components**: PascalCase (e.g., `Button.tsx`, `UserProfile.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`, `apiClient.ts`)
- **Types**: PascalCase (e.g., `User.ts`, `ApiResponse.ts`)
- **Pages**: lowercase with hyphens (e.g., `about-us/page.tsx`)

### TypeScript Guidelines

- Use explicit types for function parameters and return values
- Prefer `interface` for object shapes, `type` for unions/intersections
- Avoid `any` - use `unknown` when type is truly unknown
- Use strict mode enabled in `tsconfig.json`

### Component Patterns

```typescript
// Preferred functional component pattern
interface ComponentProps {
  title: string;
  isActive?: boolean;
}

export default function Component({ title, isActive = false }: ComponentProps) {
  return <div>{title}</div>;
}
```

### Next.js Specific

#### App Router

- **Server Components** by default (no 'use client' directive)
- **Client Components** marked with `'use client'` directive at top
- Use Server Components for data fetching, Client Components for interactivity

#### Data Fetching

```typescript
// Server Component (async)
async function Page() {
  const data = await fetch("https://api.example.com/data");
  return <div>{/* render data */}</div>;
}
```

#### Route Handlers

- Located in `app/api/[route]/route.ts`
- Export named functions: GET, POST, PUT, DELETE, PATCH

### Styling

- Tailwind CSS utility classes preferred
- Component-specific styles in CSS Modules when needed
- Global styles in `app/globals.css`

## Common Commands

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start

# Linting
npm run lint

# Type checking
npm run type-check
```

## Environment Variables

- Store in `.env.local` for local development
- Access via `process.env.VARIABLE_NAME`
- Prefix with `NEXT_PUBLIC_` for client-side access

## Best Practices

### Performance

- Use `next/image` for images
- Use `next/link` for navigation
- Implement proper loading states
- Use React Suspense for async components

### SEO

- Add metadata exports in page components
- Use semantic HTML
- Implement proper heading hierarchy

### Code Quality

- Keep components small and focused
- Extract reusable logic into custom hooks
- Use meaningful variable and function names
- Add comments for complex logic only

## When Working on This Project

1. **Before making changes**: Review existing patterns in the codebase
2. **Component creation**: Check if similar component exists first
3. **Dependencies**: Verify compatibility with Next.js version before adding
4. **Testing**: Test both development and production builds
5. **Types**: Ensure all TypeScript errors are resolved before committing

## Helpful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

---

**Note**: Update this file as the project evolves to reflect new patterns, conventions, and architectural decisions.
