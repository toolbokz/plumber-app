import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustSignals } from "@/components/TrustSignals";
import { Services } from "@/components/Services";
import { WhyChoose } from "@/components/WhyChoose";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { StickyCallButton } from "@/components/StickyCallButton";

export default function Page() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/*
        Visual polish (no gimmicks):
        Soft "light blooms" add depth on a dark base without using images.
      */}
            {/* Intentionally no section/page overlays — keep the background consistent. */}

            <Header />
            <main>
                <Hero />
                <TrustSignals />
                <Services />
                <WhyChoose />
                <Testimonials />
                <CTASection />
            </main>
            <Footer />
            <StickyCallButton />

            {/*
        Mobile UX note:
        Add bottom padding so content isn't hidden behind sticky call button.
      */}
            <div className="h-24 md:hidden" aria-hidden="true" />
        </div>
    );
}
