// List of commands that do not require API calls

import * as bin from './index';
import config from '../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  let c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

export const so = async (args: string[]): Promise<string> => {
  window.open(`https://stackoverflow.com/search?q=${args.join(' ')}`);
  return `Searching stackoverflow for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `<div class="banner"><div>
███████╗████████╗███████╗███████╗ █████╗ ███╗   ██╗                   
██╔════╝╚══██╔══╝██╔════╝██╔════╝██╔══██╗████╗  ██║                   
███████╗   ██║   █████╗  █████╗  ███████║██╔██╗ ██║                   
╚════██║   ██║   ██╔══╝  ██╔══╝  ██╔══██║██║╚██╗██║                   
███████║   ██║   ███████╗██║     ██║  ██║██║ ╚████║                   
╚══════╝   ╚═╝   ╚══════╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝                   
                                                                      
██████╗  ██████╗ ███████╗███╗   ██╗███████╗ ██████╗ ███████╗███╗   ██╗
██╔══██╗██╔═══██╗██╔════╝████╗  ██║██╔════╝██╔════╝ ██╔════╝████╗  ██║
██████╔╝██║   ██║█████╗  ██╔██╗ ██║███████╗██║  ███╗█████╗  ██╔██╗ ██║
██╔═══╝ ██║   ██║██╔══╝  ██║╚██╗██║╚════██║██║   ██║██╔══╝  ██║╚██╗██║
██║     ╚██████╔╝███████╗██║ ╚████║███████║╚██████╔╝███████╗██║ ╚████║
╚═╝      ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚══════╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝
</div><div><img src="/assets/me.jpg" alt="${config.name}" width="250" height="250" /></div></div>
${config.profession}


Type 'help' to see the list of available commands.
Type 'summary' to display summary. 
Type 'projects' to display my project history. 
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};

// SSH
export const ssh = (args?: string[]): string => {
  return `${config.ssh}
                                                                      
Type 'sshcopy' to copy to clipboard.`;
};
