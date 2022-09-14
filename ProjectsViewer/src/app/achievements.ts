export interface Achievement {
  name: string;
  description: string;
  cookie: string;
  BUName: string; //Before unlock name
  BUDescription: string; //before unlock description
}

export const Achievements: Achievement[] = [
  {
    "name": "How did we get here?",
    "description": "Go to the redirect page without a source to redirect to",
    "cookie": "ProjectsViewer.achievement.howdidwegethere",
    "BUName": "How did we get here? e",
    "BUDescription": "???"
  }
]