import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Frappify",
  description:
    "Terms of Service for Frappify - A powerful mobile and desktop client for the Frappe framework.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Frappify Terms of Service
      </h1>
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <p className="text-sm text-muted-foreground mb-8 text-center">
          Effective Date: 2025-06-23
        </p>

        <section className="space-y-8">
          <TermsSection title="1. Acceptance of Terms">
            By using the Frappify app, you agree to these Terms of Service. If you
            do not agree, please do not use our app.
          </TermsSection>

          <TermsSection title="2. Use of Service">
            Frappify is a client application for the Frappe framework. You agree to use it only
            for its intended purpose and in compliance with all applicable laws and your Frappe instance&apos;s terms of service.
          </TermsSection>

          <TermsSection title="3. User Accounts">
            Frappify connects to your existing Frappe instance accounts. You are responsible for maintaining the security of your Frappe credentials.
          </TermsSection>

          <TermsSection title="4. Intellectual Property">
            All content in the Frappify app, including text, graphics, logos, and
            software, is the property of Frappify or its content suppliers and is
            protected by copyright laws. The Frappe framework and its content remain the property of their respective owners.
          </TermsSection>

          <TermsSection title="5. Disclaimer of Warranties">
            Frappify is provided &quot;as is&quot; without any warranties, expressed
            or implied. We do not guarantee compatibility with all Frappe instances or configurations.
          </TermsSection>

          <TermsSection title="6. Limitation of Liability">
            Frappify and its developers will not be liable for any indirect,
            incidental, special, consequential or punitive damages resulting
            from your use of the app or any data loss or corruption.
          </TermsSection>

          <TermsSection title="7. Changes to Terms">
            We reserve the right to modify these Terms at any time. We will
            notify users of any changes by updating the date at the top of this
            page.
          </TermsSection>

          <TermsSection title="8. Contact Information">
            For any questions about these Terms, please contact us at{" "}
            <Link
              href="mailto:info@kinet.et"
              className="text-blue-400 hover:underline"
            >
              info@kinet.et
            </Link>
            .
          </TermsSection>
        </section>
      </div>
    </div>
  );
}

function TermsSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-muted-foreground">{children}</p>
    </div>
  );
}
