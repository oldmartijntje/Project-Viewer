export interface Achievement {
    name: string;
    description: string;
    cookie: string;
    BUName: string; //Before unlock name
    BUDescription: string; //before unlock description
    BUImage?: string; //before unlock image
    Image?: string; //after unlock image
    Hidden: boolean;
}

export const Achievements: Achievement[] = [
    {
        "name": "How did we get here?",
        "description": "Go to the redirect page without a source to redirect to",
        "cookie": "ProjectsViewer.achievement.howdidwegethere",
        "BUName": "How did we get here?",
        "BUDescription": "???",
        "Hidden": true
    },
    {
        "name": "Wait whot?",
        "description": "Knowing to klick both 4's 4 times and to hover over the logo for 10 seconds\n\nYou are a true fan",
        "cookie": "ProjectsViewer.achievement.40farfetched",
        "BUName": "???",
        "BUDescription": "SafetyCT easteregg",
        "Hidden": false
    },
    {
        "name": "404 not found",
        "description": "Klick both 4's 4 times",
        "cookie": "ProjectsViewer.achievement.404notfound",
        "BUName": "404 not found",
        "BUDescription": "SafetyCT easteregg",
        "Hidden": false
    }
]