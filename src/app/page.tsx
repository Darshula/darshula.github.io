import Gradientdiv from "./Gradientdiv";
import CaretWriter from "./CaretWriter";
import { CSSProperties } from "react";

function Home() {
    return (
        <Gradientdiv className="h-full bg-slate-900 font-[family-name:var(--font-inter-sans)]">
            <div className="lg:flex lg:justify-between lg:gap-4 mx-auto max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
                <Header />
                <Content />
            </div>
        </Gradientdiv>
    );
}

function Header() {
    const strings = ["Software Developer", "Full-Stack Developer", "Machine Learning Engineer", "Data Scientist"]
    const style: CSSProperties = {
        fontSize: "var(--text-4xl)", lineHeight: "var(--tw-leading, var(--text-4xl--line-height)", letterSpacing: "var(--tracking-tight)"
    }
    return (
        <header className=" min-h-screen lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-5xl font-bold tracking-tight ">Tanmay Kulkarni</h1>
                <CaretWriter strings={strings} delay={1000} style={style} />

                <nav className="nav hidden lg:block">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </nav>

            </div>
            <ul id="links" className="flex">
                <li>
                    <a href="https://github.com/Darshula/" target="_blank" rel="noreferrer noopener" title="Darshula | GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>
                    </a>
                </li>
                <li className="ml-5">
                    <a href="https://www.linkedin.com/in/tanmay-kulkarni12/" target="_blank" rel="noreferrer noopener" title="tanmay-kulkarni12 | LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24  " fill="currentColor" className="w-6 h-6"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" /></svg>
                    </a>
                </li>
            </ul>
        </header>
    );
}

function Content() {
    return (
        <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <div>
                    <p className="mb-4">Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum (&quot;pain itself&quot;).</p>
                    <p className="mb-4">Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum (&quot;pain itself&quot;).</p>
                    <p className="mb-4">Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum (&quot;pain itself&quot;).</p>
                </div>
            </section>
            <section >
                <p className="mb-4">Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum (&quot;pain itself&quot;).</p>
                <p className="mb-4">Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum (&quot;pain itself&quot;).</p>
                <p className="mb-4">Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum (&quot;pain itself&quot;).</p>
                <p className="mb-4">This is the right side.</p>
            </section>
            <a href="https://brittanychiang.com/" id="projects">https://brittanychiang.com/</a>
        </main>
    );
}

export default Home
