import config from '../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  return `
            ██████████                        sumfetch
        ████          ████                   -----------
      ██                  ██                  ABOUT
    ████  ████      ████  ████                ${config.name}
    ████  ████      ████  ████                ${config.profession}
  ██▒▒▒▒██▒▒▒▒██  ██▒▒▒▒██▒▒▒▒██             爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
  ██▒▒▒▒▒▒▒▒▒▒██  ██▒▒▒▒▒▒▒▒▒▒██             -----------
██  ██▒▒▒▒▒▒██      ██▒▒▒▒▒▒██  ██            <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
██    ██▒▒██          ██▒▒██    ██            <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
██      ██              ██      ██            <u><a href="https://www.xing.com/profile/${config.social.xing}" target="_blank">xing.com/profile/${config.social.xing}</a></u>
██      ██              ██      ██            <u><a href="https://www.linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
██                              ██           -----------
██    ██████████████████████    ██            PROJECTS
  ██    ██              ██    ██             <u><a href="https://${config.projects.jptec.link}" target="_blank">${config.projects.jptec.link}</a></u> ${config.projects.jptec.description}
  ██      ██████████████      ██             
    ██      ██████████      ██               <u><a href="https://${config.projects.pokalkoenig.link}" target="_blank">${config.projects.pokalkoenig.link}</a></u> ${config.projects.pokalkoenig.description}
      ██      ██████      ██                 
        ████          ████                   <u><a href="https://${config.projects.froshShareBasket.link}" target="_blank">${config.projects.froshShareBasket.link}</a></u> ${config.projects.froshShareBasket.description}
            ██████████                       <u><a href="https://${config.projects.froshPlatformShareBasket.link}" target="_blank">${config.projects.froshPlatformShareBasket.link}</a></u> ${config.projects.froshPlatformShareBasket.description}
`;
};

export default sumfetch;
