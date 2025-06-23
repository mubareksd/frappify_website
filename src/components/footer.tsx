import Link from "next/link";
import { env } from "@/env.mjs";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container flex flex-col gap-4 py-10 px-4 md:px-6 md:flex-row md:justify-between">
        <div className="flex flex-col gap-4 md:gap-6">
          <Link className="flex items-center" href="/">
            <span className="ml-2 text-lg font-semibold text-foreground">
              {env.NEXT_PUBLIC_APP_NAME}
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">
            © 2024 Frappify App. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-6">
          <Link
            className="text-sm text-muted-foreground hover:underline underline-offset-4"
            href="/terms"
          >
            Terms of Service
          </Link>
          <Link
            className="text-sm text-muted-foreground hover:underline underline-offset-4"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-sm text-muted-foreground hover:underline underline-offset-4"
            href="mailto:info@kinet.et"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
