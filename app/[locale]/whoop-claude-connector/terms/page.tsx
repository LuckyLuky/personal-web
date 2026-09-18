import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LegalSection from "@/components/legal/LegalSection";

const EFFECTIVE_DATE = "18 September 2026";
const CONTACT_EMAIL = "info@lukas-havlicek.cz";

// Unlisted page: reachable only by direct URL, kept out of search results.
export const metadata: Metadata = {
  title: "Terms and Conditions – WHOOP Connector for Claude",
  robots: { index: false, follow: false },
};

export default async function WhoopConnectorTerms({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // The terms exist in English only; serve them from a single canonical URL.
  if (locale !== "en") notFound();

  return (
    <main className="container mx-auto px-6 py-16 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms and Conditions</h1>
      <p className="text-lg text-gray-600">WHOOP Connector for Claude</p>
      <p className="text-sm text-gray-500 mt-2">Effective {EFFECTIVE_DATE}</p>

      <LegalSection title="1. About these terms">
        <p>
          These terms govern your use of WHOOP Connector for Claude (the
          &quot;Connector&quot;), a remote MCP server operated by Lukáš Havlíček,
          Prague, Czech Republic (&quot;I&quot;, &quot;me&quot;). By connecting
          the Connector to Claude or authorizing it with your WHOOP account, you
          agree to these terms. If you do not agree, do not use the Connector.
        </p>
      </LegalSection>

      <LegalSection title="2. What the Connector does">
        <p>
          The Connector gives Claude read-only access to data from your WHOOP
          account: recovery, sleep, day strain, workouts, profile and body
          measurements. It fetches that data from the WHOOP API when Claude calls
          one of its tools and returns it to Claude. It never writes, changes or
          deletes anything in your WHOOP account.
        </p>
        <p>
          How your personal data is handled is described in the{" "}
          <Link
            href="/whoop-claude-connector/privacy"
            className="text-primary underline hover:text-primary-hover"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <p>
          The Connector is a personal, independent project. It is not
          affiliated with, endorsed by or sponsored by WHOOP, Inc. or Anthropic
          PBC. &quot;WHOOP&quot; and &quot;Claude&quot; are trademarks of their
          respective owners.
        </p>
      </LegalSection>

      <LegalSection title="3. Eligibility and access">
        <p>
          To use the Connector you need an active WHOOP membership and a Claude
          account that supports custom connectors. Your use of WHOOP and Claude
          remains subject to their own terms and policies.
        </p>
        <p>
          Access may be limited to specific, pre-approved WHOOP accounts. I may
          refuse, suspend or revoke access at any time, for any reason.
        </p>
      </LegalSection>

      <LegalSection title="4. Your data">
        <p>
          When you authorize the Connector, WHOOP issues it access and refresh
          tokens. These are stored encrypted (AES-256-GCM) in a database hosted
          in the European Union and are used only to fetch your WHOOP data on
          your behalf. The tokens the Connector issues to Claude are stored only
          as one-way hashes.
        </p>
        <p>
          The Connector does not store your WHOOP health or activity data. The
          data passes through it at the moment Claude requests it. Once
          delivered to Claude, the data is handled under Anthropic&apos;s terms
          and privacy policy, not these terms.
        </p>
        <p>
          I do not sell your data, use it for advertising, or share it with
          anyone other than the infrastructure providers needed to run the
          Connector (hosting and database).
        </p>
      </LegalSection>

      <LegalSection title="5. Disconnecting">
        <p>
          You can stop using the Connector at any time by removing it from
          Claude&apos;s connector settings and revoking its access in your WHOOP
          account. If WHOOP reports the authorization as revoked, the Connector
          deletes the stored WHOOP tokens and every token it issued to Claude
          for that account. You can also email me to have your tokens deleted.
        </p>
      </LegalSection>

      <LegalSection title="6. Not medical advice">
        <p>
          WHOOP data, and anything Claude says about it, is for general
          informational purposes only. It is not medical advice, diagnosis or
          treatment. Talk to a qualified healthcare professional before making
          decisions about your health, training or sleep.
        </p>
      </LegalSection>

      <LegalSection title="7. Acceptable use">
        <p>
          Use the Connector only with your own WHOOP account. Do not attempt to
          access another person&apos;s data, circumvent access restrictions,
          probe or overload the service, or use it in a way that breaches
          WHOOP&apos;s or Anthropic&apos;s terms.
        </p>
      </LegalSection>

      <LegalSection title="8. Availability and changes">
        <p>
          The Connector is provided free of charge, with no guarantee of
          availability. It depends on the WHOOP API and Claude, either of which
          may change or stop working with it. I may modify, suspend or
          discontinue the Connector at any time without notice.
        </p>
      </LegalSection>

      <LegalSection title="9. Disclaimer and limitation of liability">
        <p>
          The Connector is provided &quot;as is&quot; and &quot;as
          available&quot;, without warranties of any kind, express or implied,
          including accuracy, fitness for a particular purpose and
          non-infringement. I do not guarantee that data returned through the
          Connector is complete, current or correct.
        </p>
        <p>
          To the fullest extent permitted by law, I am not liable for any
          indirect, incidental, consequential or special damages, or for any
          loss of data, arising from your use of or inability to use the
          Connector. Nothing in these terms limits liability that cannot be
          limited under applicable law.
        </p>
      </LegalSection>

      <LegalSection title="10. Changes to these terms">
        <p>
          I may update these terms from time to time. The effective date above
          shows when they last changed. Continuing to use the Connector after a
          change means you accept the updated terms.
        </p>
      </LegalSection>

      <LegalSection title="11. Governing law">
        <p>
          These terms are governed by the laws of the Czech Republic. If you are
          a consumer, this does not deprive you of the protection of mandatory
          laws of your country of residence.
        </p>
      </LegalSection>

      <LegalSection title="12. Contact">
        <p>
          Questions about these terms or requests to delete your data:{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-primary underline hover:text-primary-hover"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>
    </main>
  );
}
