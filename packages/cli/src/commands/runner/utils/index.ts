import { ProjectTypes } from "@definitions/projectTypes";
import { getProjectType } from "@utils/project";
import { projectScripts } from "../projectScripts";

export const getRunnerDescription = (runner: "dev" | "start" | "build") => {
    let projectType = getProjectType();
    const command = projectScripts[projectType][runner];

    if (projectType === ProjectTypes.REMIX && runner === "start") {
        projectType = "remix-serve" as ProjectTypes;
    }

    return `It runs: \`${projectType} ${command.join(
        " ",
    )}\`. Also accepts all the arguments \`${projectType}\` accepts.`;
};

export const getPlatformOptionDescription = () => {
    return `Platform to run command on. \nex: ${Object.values(
        ProjectTypes,
    ).join(", ")}`;
};
