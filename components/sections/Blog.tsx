export default function Blog() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">Blog & Articles</h2>

      <div className="bg-amber-50 border-2 border-dashed border-amber-200 rounded-2xl p-12 text-center">
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          I share my thoughts on engineering management, product-led growth, and SaaS. Stay tuned
          for articles and insights.
        </p>
        <div className="inline-block px-6 py-2 bg-amber-100 text-amber-800 rounded-full font-medium">
          Coming Soon...
        </div>
      </div>
    </section>
  );
}
