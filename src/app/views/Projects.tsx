import { StickySectionIdentifier } from "./Navbar";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <StickySectionIdentifier sectionName="Projects" />
            <ol>
                <ProjectCard>
                    Project Name
                </ProjectCard>
            </ol>
        </section>
    );
};
