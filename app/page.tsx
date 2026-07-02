import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { Problem } from "@/sections/Problem";
import { HowItWorks } from "@/sections/HowItWorks";
import { Features } from "@/sections/Features";
import { DashboardShowcase } from "@/sections/DashboardShowcase";
import { QuickStart } from "@/sections/QuickStart";
import { Comparison } from "@/sections/Comparison";
import { ProductionSafe } from "@/sections/ProductionSafe";
import { FAQ } from "@/sections/FAQ";
import { FinalCTA } from "@/sections/FinalCTA";
import { getStats, formatCompact } from "@/lib/stats";
import { site } from "@/lib/site";

// Statically rendered, revalidated hourly so live stats stay fresh (ISR).
export const revalidate = 3600;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Windows, macOS, Linux",
  description: site.description,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  softwareRequirements: site.requirements.node,
  license: "https://opensource.org/licenses/MIT",
  url: site.url,
  downloadUrl: site.npm,
  codeRepository: site.github,
};

export default async function Home() {
  const stats = await getStats();
  const stars = formatCompact(stats.stars);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar stars={stars} />
      <main>
        <Hero downloads={stats.downloads} />
        <Problem />
        <HowItWorks />
        <Features />
        <DashboardShowcase />
        <QuickStart />
        <Comparison />
        <ProductionSafe />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
