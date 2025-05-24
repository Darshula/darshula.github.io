import { StickySectionIdentifier } from "./Navbar";
import ProjectCard from "../components/ProjectCard";
import LinkIndicator from "../components/LinkIndicator";

export default function Projects() {
    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <StickySectionIdentifier sectionName="Projects" />
            <ul className="group/list">
                <li className="mb-12"><ProjectCard name="careerspeak" /></li>
                <li className="mb-12"><ProjectCard name="fusionsage" /></li>
                <li className="mb-12"><ProjectCard name="webplots" /></li>
                <li className="mb-12"><ProjectCard name="neural_network" /></li>
            </ul>
            <p className="font-medium leading-tight"><a href="https://github.com/Darshula" target="_blank" rel="noreferrer noopener" className="group">View All Projects on Github<LinkIndicator /></a></p>
        </section>
    );
};
