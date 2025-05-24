import { promises as fs } from "fs";
import Image from "next/image";

import LinkIndicator from "./LinkIndicator";
import DynamicBackground from "./DynamicBackground";

type ProjectDataModel = {
    name: string,
    description: string,
    imageLink: string,
    link: string,
    tags: Array<string>
};

type ProjectCardProps = {
    name: string
};

export default async function ProjectCard({ name }: ProjectCardProps) {
    const projectData: ProjectDataModel = JSON.parse(await fs.readFile(process.cwd() + `/src/app/data/${name}.json`, "utf8"));
    let key = 0;
    return (
        <div className="group relative mb-12 p-4 hover:!opacity-100 group-hover/list:opacity-50 transition-all">
            <a href={projectData.link} target="_blank" rel="noreferrer noopener">
                <DynamicBackground />
                <div className="grid grid-cols-8 gap-8 md:gap-4">
                    <div className="col-span-2 relative" style={{ height: 'fit-content' }}>
                        <DynamicBackground />
                        <Image
                            className="p-2"
                            src={projectData.imageLink}
                            alt={projectData.name}
                            width={1280}
                            height={1280}
                        />
                    </div>
                    <div className="col-span-6">
                        <h3>{projectData.name}<LinkIndicator /></h3>
                        <p className="text-sm leading-normal">{projectData.description}</p>
                        <ul className="mt-2 flex flex-wrap">
                            {projectData.tags.map((tag) =>
                                <li className="mr-1.5 mt-2" key={key++}>
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                        {tag}
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </a>
        </div>
    );
}
