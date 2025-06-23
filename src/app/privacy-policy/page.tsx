import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Frappify",
  description:
    "Privacy Policy for Frappify - A secure client for the Frappe framework that respects your data privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Frappify Privacy Policy
      </h1>
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <p className="text-sm text-muted-foreground mb-8 text-center">
          Effective Date: 2025-06-23
        </p>

        <section className="space-y-8">
          <PolicySection title="1. Data Handling">
            Frappify acts as a client for your Frappe framework instance. All data processing occurs on your Frappe server, and we do not store or collect any user data on our servers.
          </PolicySection>

          <PolicySection title="2. Connection Security">
            Frappify connects securely to your Frappe instance using standard authentication methods. Your credentials and data remain within your control and are not transmitted to our servers.
          </PolicySection>

          <PolicySection title="3. Local Storage">
            Frappify may store minimal local data (such as connection settings and preferences) on your device for optimal performance. This data is stored locally and is not shared with us.
          </PolicySection>

          <PolicySection title="4. Third-Party Services">
            We do not use any third-party services that might collect user data on our behalf. All connections are direct to your Frappe instance.
          </PolicySection>

          <PolicySection title="5. User Controls">
            You have full control over your data through your Frappe instance settings. Frappify respects all privacy settings configured in your Frappe installation.
          </PolicySection>

          <PolicySection title="6. Security Measures">
            We prioritize security and employ industry-standard measures to protect the connection between Frappify and your Frappe instance.
          </PolicySection>

          <PolicySection title="7. Policy Changes">
            Any future changes to this privacy policy will be made clear and will continue to reflect our commitment to data privacy and security.
          </PolicySection>

          <PolicySection title="8. Contact Information">
            For privacy concerns or questions, please contact us at{" "}
            <Link
              href="mailto:info@kinet.et"
              className="text-blue-400 hover:underline"
            >
              info@kinet.et
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
