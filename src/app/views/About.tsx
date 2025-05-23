import { StickySectionIdentifier } from "./Navbar";
import LinkIndicator from "../components/LinkIndicator";

export default function About() {
    return (
        <section id="about" className="relative mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <StickySectionIdentifier sectionName="About" />
            <div>
                <p className="mb-4">Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum (&quot;pain itself&quot;).</p>
                <p className="mb-4">Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum (&quot;pain itself&quot;).</p>
                <p className="mb-12">Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum (&quot;pain itself&quot;).</p>
                <p className="font-medium leading-tight"><a href="./TanmayKulkarniResume.pdf" target="_blank" rel="noreferrer noopener" className="group">View Full Résumé<LinkIndicator /></a></p>
            </div>
        </section>
    );
};
