import GradientBack from "./components/GradientBack";

import Navbar from "./views/Navbar";
import About from "./views/About";
import Projects from "./views/Projects";
import Attribution from "./views/Attribution";

export default function Home() {
    return (
        <div className="">
            <GradientBack className="bg-slate-900" />
            <a href="#content" className="absolute left-0 top-0 -translate-x-full rounded px-4 py-3 text-sm font-bold uppercase tracking-widest focus-visible:translate-x-0">Skip to Content</a>
            <div className="inset-0 lg:flex lg:justify-between lg:gap-4 mx-auto max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
                <Navbar />
                <Content />
            </div>
        </div>
    );
};

function Content() {
    return (
        <main id="content" className="z-10 pt-24 lg:w-[52%] lg:py-24">
            <About />
            <Projects />
            <Attribution />
        </main>
    );
};
