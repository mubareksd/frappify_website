import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-xl mb-8">
        Sorry, we couldn&amp;t find the page you&amp;re looking for.
      </p>
      <Link href="/" className="text-primary hover:underline">
        Go back to homepage
      </Link>
    </div>
  );
}
