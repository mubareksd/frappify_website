import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Smartphone, Monitor, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Frappify - Frappe Framework Client
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                A powerful mobile and desktop client for the Frappe framework.
                Access your Frappe applications seamlessly across all devices with
                native performance and intuitive interface.
              </p>
            </div>
            <div className="space-x-4">
              <Button
                asChild
                size="lg"
                className="bg-blue-400 hover:bg-blue-500"
              >
                <Link href="#download">Download Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900"
      >
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Features
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            <FeatureCard
              icon={Smartphone}
              title="Mobile Optimized"
              description="Native mobile experience with touch-friendly interface and offline capabilities."
            />
            <FeatureCard
              icon={Monitor}
              title="Desktop Ready"
              description="Full-featured desktop client with keyboard shortcuts and multi-window support."
            />
            <FeatureCard
              icon={Zap}
              title="Lightning Fast"
              description="Optimized performance with instant loading and smooth navigation between modules."
            />
          </div>
        </div>
      </section>
      <section
        id="download"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      >
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Download Now
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Get Frappify today and experience the best way to access your
                Frappe applications on mobile and desktop devices.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Button
                className="w-full bg-blue-400 hover:bg-blue-500"
                asChild
                size="lg"
              >
                <Link
                  href="https://play.google.com/store/apps/details?id=et.kinet.frappify"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download on Google Play
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center space-y-2 border border-gray-200 dark:border-gray-800 p-6 rounded-lg shadow-sm">
      <div className="p-2 bg-blue-400 bg-opacity-10 rounded-full">
        <Icon className="h-6 w-6 text-blue-400" />
      </div>
      <h3 className="text-xl font-bold text-center">{title}</h3>
      <p className="text-center text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}
