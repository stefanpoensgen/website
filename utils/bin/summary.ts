import config from '../../config.json';

export const summary = async (args: string[]): Promise<string> => {
  return `
            ██████████                       █ summary
        ████          ████                   -----------
      ██                  ██                 ▒ ABOUT
    ████  ████      ████  ████               • ${config.name}
    ████  ████      ████  ████               • ${config.profession}
  ██▒▒▒▒██▒▒▒▒██  ██▒▒▒▒██▒▒▒▒██             • <u><a href="${config.repo}" target="_blank">Github repo</a></u>
  ██▒▒▒▒▒▒▒▒▒▒██  ██▒▒▒▒▒▒▒▒▒▒██             -----------
██  ██▒▒▒▒▒▒██      ██▒▒▒▒▒▒██  ██           ▒ CONTACT
██    ██▒▒██          ██▒▒██    ██           • <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
██      ██              ██      ██           • <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
██      ██              ██      ██           • <u><a href="https://www.xing.com/profile/${config.social.xing}" target="_blank">xing.com/profile/${config.social.xing}</a></u>
██                              ██           • <u><a href="https://www.linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
██    ██████████████████████    ██           -----------
  ██    ██              ██    ██             ▒ PROJECTS
  ██      ██████████████      ██             Type 'projects' to display my project history. 
    ██      ██████████      ██               
      ██      ██████      ██                 
        ████          ████                   
            ██████████                       
`;
};
