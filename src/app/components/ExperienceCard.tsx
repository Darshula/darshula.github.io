import { promises as fs } from "fs";

import DynamicBackground from "./DynamicBackground";

type EmploymentDataModel = {
    name: string,
    description: string,
    duration: string,
    tags: Array<string>
};

type EmploymentCardProps = {
    name: string
};

export default async function EmploymentCard({ name }: EmploymentCardProps) {
    const employmentData: EmploymentDataModel = JSON.parse(await fs.readFile(process.cwd() + `/src/app/data/${name}.json`, "utf8"));
    let key = 0;
    return (
        <div className="group relative mb-12 hover:!opacity-100 group-hover/list:opacity-50 transition-all">
                <div className="p-4">
                    <DynamicBackground />
                    <div className="grid grid-cols-8 gap-8 md:gap-4">
                        <div className="col-span-2 relative">
                        <p className="text-xs leading-normal font-bold tracking-widest uppercase mt-1">{employmentData.duration}</p>

                        </div>
                        <div className="col-span-6">
                            <h3>{employmentData.name}</h3>
                            <p className="text-sm leading-normal">{employmentData.description}</p>
                            <ul className="mt-2 flex flex-wrap">
                                {employmentData.tags.map((tag) =>
                                    <li className="mr-1.5 mt-2" key={key++}>
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                            {tag}
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    );
}
