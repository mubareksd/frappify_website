import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, Globe, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Learn Arabic with Alif
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Master Arabic language skills with our innovative app.
                Personalized lessons, interactive exercises, and cultural
                insights at your fingertips.
              </p>
            </div>
            <div className="space-x-4">
              <Button
                asChild
                size="lg"
                className="bg-teal-400 hover:bg-teal-500"
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
              icon={BookOpen}
              title="Personalized Learning"
              description="Tailored lessons that adapt to your learning pace and style."
            />
            <FeatureCard
              icon={Zap}
              title="Interactive Exercises"
              description="Engaging activities to practice and reinforce your Arabic skills."
            />
            <FeatureCard
              icon={Globe}
              title="Cultural Insights"
              description="Dive into the rich Arabic culture while learning the language."
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
                Start your Arabic learning journey today. Download Alif and
                unlock a world of language and culture.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Button
                className="w-full bg-teal-400 hover:bg-teal-500"
                asChild
                size="lg"
              >
                <Link
                  href="https://play.google.com/store/apps/details?id=com.mubareksd.alif"
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
      <div className="p-2 bg-teal-400 bg-opacity-10 rounded-full">
        <Icon className="h-6 w-6 text-teal-400" />
      </div>
      <h3 className="text-xl font-bold text-center">{title}</h3>
      <p className="text-center text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}
