import config from '../../config.json';

export const projects = async (args: string[]): Promise<string> => {
    return config.projects.reduce((output, project) => {
        return output + `<small>${project.date}</small>\n<strong>${project.title}</strong>\n${project.description}\n<small>${project.stack}</small>\n\n`;
    }, '');
};
