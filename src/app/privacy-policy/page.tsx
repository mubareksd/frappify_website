import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Alif",
  description:
    "Privacy Policy for Alif App - Learn Arabic with confidence, knowing your data is protected.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Alif Privacy Policy
      </h1>
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <p className="text-sm text-muted-foreground mb-8 text-center">
          Effective Date: 2023-11-14
        </p>

        <section className="space-y-8">
          <PolicySection title="1. No Data Collection">
            We do not collect any personal information, usage data, or any other
            data from our users.
          </PolicySection>

          <PolicySection title="2. User Anonymity">
            Our app is designed to respect user privacy, and we do not track or
            store any identifiable information about our users.
          </PolicySection>

          <PolicySection title="3. No Third-Party Services">
            We do not use any third-party services that might collect user data
            on our behalf.
          </PolicySection>

          <PolicySection title="4. User Controls">
            Since we do not collect any user data, there are no user controls
            related to data privacy.
          </PolicySection>

          <PolicySection title="5. Security Measures">
            While we don&apos;t collect user data, we still prioritize the
            security of the app and employ measures to protect user privacy.
          </PolicySection>

          <PolicySection title="6. Policy Changes">
            Any future changes to this privacy policy will be made clear,
            although they will continue to reflect our commitment to not
            collecting user data.
          </PolicySection>

          <PolicySection title="7. Contact Information">
            For privacy concerns or questions, please contact us at{" "}
            <Link
              href="mailto:mubareksd@gmail.com"
              className="text-teal-400 hover:underline"
            >
              mubareksd@gmail.com
            </Link>
            .
          </PolicySection>
        </section>
      </div>
    </div>
  );
}

function PolicySection({
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
