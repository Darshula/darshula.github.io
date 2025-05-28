import { StickySectionIdentifier } from "./Navbar";
import LinkIndicator from "../components/LinkIndicator";

export default function About() {
    return (
        <section id="about" className="relative mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <StickySectionIdentifier sectionName="About" />
            <div>
                <p className="mb-4">I'm a dedicated computer science student with a passion for creating dynamic web applications that enhance user engagement and accessibility. I thrive on the challenge of transforming complex ideas into intuitive digital experiences, ensuring that technology serves as a bridge between users and information.</p>
                <p className="mb-4">Currently, I am pursuing a Master of Science in Computer Science at Indiana University, where I focus on applied algorithms and software development. My academic projects have allowed me to explore various technologies, including building responsive web applications and collaborating on innovative solutions that address real-world challenges. I take pride in my ability to blend technical skills with a user-centered approach to design.</p>
                <p className="mb-4">In my free time, I enjoy experimenting with new programming languages and frameworks, constantly seeking to expand my skill set. I also have a passion for photography, capturing moments in nature and urban settings, which helps me appreciate the beauty of the world around me and inspires my creative process in technology.</p>
                <p className="mt-8 font-medium leading-tight"><a href="./TanmayKulkarniResume.pdf" target="_blank" rel="noreferrer noopener" className="group">View Full Résumé<LinkIndicator /></a></p>
            </div>
        </section>
    );
};
