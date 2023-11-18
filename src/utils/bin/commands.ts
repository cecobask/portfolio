import * as bin from './index';
import config from '../../../config.json';
import axios from 'axios';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort();
  let c = '';
  for (let i = 1; i <= commands.length; i++) {
    c += commands[i - 1] + '\n';
  }
  return `Here are all the available commands:\n
${c}
[tab]: trigger completion
[ctrl+l]: clear terminal
`;
};

export const cv = async (args: string[]): Promise<string> => {
  window.open(`${config.cv_url}`);
  return 'Opening CV...';
};

export const instagram = async (args: string[]): Promise<string> => {
  window.open(`https://www.instagram.com/${config.social.instagram}/`);

  return 'Opening Instagram...';
};

export const facebook = async (args: string[]): Promise<string> => {
  window.open(`https://www.facebook.com/${config.social.facebook}/`);

  return 'Opening Facebook...';
};

export const lastfm = async (args: string[]): Promise<string> => {
  window.open(`https://www.last.fm/user/${config.social.lastfm}/`);

  return 'Opening Last FM...';
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening GitHub...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening LinkedIn...';
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  return `Permission denied: with little power comes... no responsibility? `;
};

export const summary = (args?: string[]): string => {
  return ` 
 @@@@@@@  @@@@@@@@   @@@@@@@   @@@@@@ 
@@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@
!@@       @@!       !@@       @@!  @@@
!@!       !@!       !@!       !@!  @!@
!@!       @!!!:!    !@!       @!@  !@!
!!!       !!!!!:    !!!       !@!  !!!
:!!       !!:       :!!       !!:  !!!
:!:       :!:       :!:       :!:  !:!
::::::::  ::::::::  ::::::::  ::::::::
 ::::::    ::::::    ::::::    :::::: 
                                      
@@@@@@@    @@@@@@    @@@@@@   @@@  @@@
@@@@@@@@  @@@@@@@@  @@@@@@@   @@@  @@@
@@!  @@@  @@!  @@@  !@@       @@!  !@@
!@   @!@  !@!  @!@  !@!       !@!  @!!
@!@!@!@   @!@!@!@!  !!@@!!    @!@@!@! 
!!!@!!!!  !!!@!!!!   !!@!!!   !!@!!!  
!!:  !!!  !!:  !!!       !:!  !!: :!! 
:!:  !:!  :!:  !:!      !:!   :!:  !:!
::::::::  :::  :::  :::::::   :::  :::
:::::::   :::  :::   :::::    :::  :::

ABOUT
――――――――――――
 ${config.name}
 Waterford, Ireland
 Sofia, Bulgaria
󰈙 <u><a href="${config.cv_url}" target="_blank">Curriculum Vitae</a></u>

CONTACT
――――――――――――
 <u><a href="tel:${config.phone}" target="_blank">${config.phone}</a></u>
󰇰 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
 <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
󰊤 <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
󰋾 <u><a href="https://www.instagram.com/${config.social.instagram}" target="_blank">instagram.com/${config.social.instagram}</a></u>
 <u><a href="https://www.facebook.com/${config.social.facebook}" target="_blank">facebook.com/${config.social.facebook}</a></u>
 <u><a href="https://www.last.fm/user/${config.social.lastfm}" target="_blank">last.fm/user/${config.social.lastfm}</a></u>

Type 'help' to see the list of all available commands
`;
};

export const projects = async (args: string[]): Promise<string> => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos?sort=pushed`,
  );
  return data
    .map((repo) => {
      let desc = repo.description != null ? repo.description : 'no description';
      return `* <u><a href="${repo.html_url}" target="_blank">${repo.name}</a></u> - ${desc}`;
    })
    .join('\n');
};
