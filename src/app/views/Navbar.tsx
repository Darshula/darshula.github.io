import { CSSProperties } from "react";
import CaretWriter from "../components/CaretWriter";

export default function Navbar() {
    const strings = ["Software Developer", "Full-Stack Developer", "Machine Learning Engineer", "Data Scientist"]
    const style: CSSProperties = {
        fontSize: "var(--text-4xl)", lineHeight: "var(--tw-leading, var(--text-4xl--line-height)", letterSpacing: "var(--tracking-tight)"
    }
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-5xl font-bold tracking-tight">Tanmay Kulkarni</h1>
                <CaretWriter strings={strings} delay={1000} style={style} />

                <nav className="nav hidden lg:block">
                    <ul className="mt-24 w-max">
                        <li>
                            <a className="group py-3" href="#about">
                                <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"></span>
                                <span className="text-xs font-bold tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                            </a>
                        </li>
                        <li>
                            <a className="group py-3" href="#projects">
                                <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"></span>
                                <span className="text-xs font-bold tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
            <ul id="links" className="flex ml-1 mt-8 items-center">
                <li>
                    <a href="https://github.com/Darshula/" target="_blank" rel="noreferrer noopener" title="Darshula | GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>
                    </a>
                </li>
                <li className="ml-5">
                    <a href="https://www.linkedin.com/in/tanmay-kulkarni12/" target="_blank" rel="noreferrer noopener" title="tanmay-kulkarni12 | LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" /></svg>
                    </a>
                </li>
            </ul>
        </header>
    );
};

type StickySectionIdentifierProps = { sectionName: string };
export function StickySectionIdentifier({ sectionName }: StickySectionIdentifierProps) {
    return (
        <div className="sticky z-100 top-0 -mx-6 mb-4 bg-transparent px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">{sectionName}</h2>
        </div>
    );
};
