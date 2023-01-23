import config from '../../config.json';

export const projects = async (args: string[]): Promise<string> => {
  const projects = config.projects;

  let output = ``;
  projects.forEach((project) => {
    output += `<small>${project.date}</small>\n<strong>${project.title}</strong>\n${project.description}\n\n<small>${project.stack}</small>\n\n`;
  });

  return `<div class="projects">` + output + `</div>`;
};
