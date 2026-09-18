import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LegalSection from "@/components/legal/LegalSection";

const EFFECTIVE_DATE = "18 September 2026";
const CONTACT_EMAIL = "info@lukas-havlicek.cz";

// Unlisted page: reachable only by direct URL, kept out of search results.
export const metadata: Metadata = {
  title: "Privacy Policy – WHOOP Connector for Claude",
  robots: { index: false, follow: false },
};

const linkClassName = "text-primary underline hover:text-primary-hover";

export default async function WhoopConnectorPrivacy({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // The policy exists in English only; serve it from a single canonical URL.
  if (locale !== "en") notFound();

  return (
    <main className="container mx-auto px-6 py-16 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-lg text-gray-600">WHOOP Connector for Claude</p>
      <p className="text-sm text-gray-500 mt-2">Effective {EFFECTIVE_DATE}</p>

      <LegalSection title="1. Who is responsible">
        <p>
          This policy explains how WHOOP Connector for Claude (the
          &quot;Connector&quot;) handles personal data. The controller of that
          data is Lukáš Havlíček, Prague, Czech Republic (&quot;I&quot;,
          &quot;me&quot;), reachable at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className={linkClassName}>
            {CONTACT_EMAIL}
          </a>
          . Use of the Connector is also governed by its{" "}
          <Link href="/whoop-claude-connector/terms" className={linkClassName}>
            Terms and Conditions
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="2. What the Connector stores">
        <p>
          The Connector keeps only what it needs to stay connected to your WHOOP
          account on Claude&apos;s behalf:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Your WHOOP user ID</strong>, to link the stored
            authorization to your account and to restrict access to approved
            accounts.
          </li>
          <li>
            <strong>WHOOP access and refresh tokens</strong>, the granted scopes
            and their expiry times. The tokens are encrypted with AES-256-GCM
            before they are written to the database.
          </li>
          <li>
            <strong>Tokens issued to Claude</strong>, stored only as SHA-256
            hashes, so they cannot be recovered from the database.
          </li>
          <li>
            <strong>OAuth client registrations</strong> made by Claude: a client
            name and its redirect URLs. These describe the Claude application,
            not you.
          </li>
          <li>
            <strong>Short-lived sign-in records</strong> created while you
            complete the WHOOP authorization. They expire after 10 minutes.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. What the Connector does not store">
        <p>
          When Claude calls one of the Connector&apos;s tools, it fetches your
          WHOOP data from the WHOOP API and returns it straight to Claude. That
          data can include recovery, heart rate variability, resting heart rate,
          blood oxygen, skin temperature, sleep, strain, workouts, and profile
          and body measurements (name, email address, height, weight, maximum
          heart rate). None of it is written to the Connector&apos;s database or
          logs.
        </p>
        <p>
          The Connector sets no cookies and uses no analytics or tracking.
        </p>
      </LegalSection>

      <LegalSection title="4. Why and on what legal basis">
        <p>
          Your WHOOP data includes health data, a special category of personal
          data under the GDPR. It is processed only on the basis of your
          explicit consent (Art. 9(2)(a) GDPR), which you give by authorizing
          the Connector on WHOOP&apos;s consent screen, and only to deliver the
          data you ask Claude for.
        </p>
        <p>
          The tokens and account identifiers described above are processed
          because they are necessary to provide the service you requested
          (Art. 6(1)(b) GDPR). Limited technical logs are kept on the basis of
          my legitimate interest in keeping the service secure and working
          (Art. 6(1)(f) GDPR).
        </p>
        <p>
          Your data is never sold, used for advertising or profiling, or used to
          train any model by me.
        </p>
      </LegalSection>

      <LegalSection title="5. Who receives your data">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Anthropic</strong> receives the WHOOP data returned to Claude
            when you use the Connector. Anthropic handles it as an independent
            controller under its own privacy policy.
          </li>
          <li>
            <strong>WHOOP</strong> receives the Connector&apos;s API requests
            made with your authorization, as the source of the data.
          </li>
          <li>
            <strong>Vercel</strong> (hosting, Frankfurt region) and{" "}
            <strong>Supabase</strong> (database) process data on my behalf as
            processors. Both are US-headquartered companies. Where data may be
            transferred outside the European Economic Area, it is protected by
            their standard contractual clauses or the EU–US Data Privacy
            Framework.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="6. How long data is kept">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            WHOOP tokens and your WHOOP user ID: until you disconnect, WHOOP
            reports the authorization as revoked, or you ask me to delete them.
          </li>
          <li>
            Tokens issued to Claude: access tokens expire after 1 hour, refresh
            tokens after 90 days of not being used. Expired tokens stop working
            immediately and are removed during periodic clean-up.
          </li>
          <li>Sign-in records and authorization codes: 10 minutes.</li>
          <li>
            Hosting logs: kept by Vercel for its standard short retention
            period. They contain request metadata and error messages (which can
            include error responses from the WHOOP API), not your WHOOP health
            or profile data.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Security">
        <p>
          WHOOP tokens are encrypted at rest, tokens issued to Claude are
          stored only as hashes, and the database accepts no requests except
          from the Connector&apos;s server. The WHOOP client secret and your
          WHOOP tokens never leave the server. Authorization codes are only ever
          sent back to Claude.
        </p>
      </LegalSection>

      <LegalSection title="8. Your rights">
        <p>
          You have the right to access, correct and delete your personal data,
          to restrict or object to its processing, and to data portability. You
          can withdraw your consent at any time by removing the Connector in
          Claude and revoking its access in your WHOOP account. Withdrawing
          consent does not affect processing that already took place.
        </p>
        <p>
          To exercise any of these rights, email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className={linkClassName}>
            {CONTACT_EMAIL}
          </a>
          . You can also lodge a complaint with the Czech data protection
          authority, the Office for Personal Data Protection (Úřad pro ochranu
          osobních údajů,{" "}
          <a
            href="https://uoou.gov.cz"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            uoou.gov.cz
          </a>
          ), or with the authority in your country of residence.
        </p>
      </LegalSection>

      <LegalSection title="9. Children">
        <p>
          The Connector is not intended for anyone under 16, and I do not
          knowingly process their data.
        </p>
      </LegalSection>

      <LegalSection title="10. Changes to this policy">
        <p>
          I may update this policy when the Connector changes. The effective
          date above shows when it last changed. Material changes that affect
          how your data is used will be communicated before they take effect
          where possible.
        </p>
      </LegalSection>
    </main>
  );
}
