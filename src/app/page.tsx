import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustSignals } from "@/components/TrustSignals";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { WhyChoose } from "@/components/WhyChoose";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { StickyCallButton } from "@/components/StickyCallButton";

export default function Page() {
    return (
        <div className="relative min-h-screen">
            <Header />
            <main>
                <Hero />
                <TrustSignals />
                <Services />
                <Process />
                <WhyChoose />
                <Testimonials />
                <FAQ />
                <CTASection />
            </main>
            <Footer />
            <StickyCallButton />
            <div className="h-24 md:hidden" aria-hidden="true" />
        </div>
    );
}
