import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Alif",
  description:
    "Terms of Service for Alif App - Learn Arabic with personalized lessons and interactive exercises.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Alif Terms of Service
      </h1>
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <p className="text-sm text-muted-foreground mb-8 text-center">
          Effective Date: 2023-11-14
        </p>

        <section className="space-y-8">
          <TermsSection title="1. Acceptance of Terms">
            By using the Alif app, you agree to these Terms of Service. If you
            do not agree, please do not use our app.
          </TermsSection>

          <TermsSection title="2. Use of Service">
            Alif is provided for educational purposes. You agree to use it only
            for its intended purpose and in compliance with all applicable laws.
          </TermsSection>

          <TermsSection title="3. User Accounts">
            Our app does not require user accounts or registration.
          </TermsSection>

          <TermsSection title="4. Intellectual Property">
            All content in the Alif app, including text, graphics, logos, and
            software, is the property of Alif or its content suppliers and is
            protected by copyright laws.
          </TermsSection>

          <TermsSection title="5. Disclaimer of Warranties">
            Alif is provided &quot;as is&quot; without any warranties, expressed
            or implied.
          </TermsSection>

          <TermsSection title="6. Limitation of Liability">
            Alif and its developers will not be liable for any indirect,
            incidental, special, consequential or punitive damages resulting
            from your use of the app.
          </TermsSection>

          <TermsSection title="7. Changes to Terms">
            We reserve the right to modify these Terms at any time. We will
            notify users of any changes by updating the date at the top of this
            page.
          </TermsSection>

          <TermsSection title="8. Contact Information">
            For any questions about these Terms, please contact us at{" "}
            <Link
              href="mailto:mubareksd@gmail.com"
              className="text-teal-400 hover:underline"
            >
              mubareksd@gmail.com
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
