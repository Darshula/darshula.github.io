import { StickySectionIdentifier } from "./Navbar";
import EmploymentCard from "../components/ExperienceCard";

export default function Employment() {
    return (
        <section id="employment" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <StickySectionIdentifier sectionName="Employment" />
            <ul className="group/list">
                <li className="mb-12"><EmploymentCard name="aicte" /></li>
                <li className="mb-12"><EmploymentCard name="ybifoundation" /></li>
            </ul>
        </section>
    );
};
