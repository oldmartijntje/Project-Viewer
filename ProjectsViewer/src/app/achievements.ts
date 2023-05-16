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
        "Hidden": false
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
    },
    {
        "name": "Rickroll :D",
        "description": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "cookie": "ProjectsViewer.achievement.Rickroll",
        "BUName": "",
        "BUDescription": "",
        "Hidden": true
    },
    {
        "name": "Article gon loesoe",
        "description": "Angular be like: ng generate component article",
        "cookie": "ProjectsViewer.achievement.articleWorks",
        "BUName": "Article gon loesoe",
        "BUDescription": "404",
        "Hidden": false
    },
    {
        "name": "Inspector Gadget",
        "description": "Inspect a project",
        "cookie": "ProjectsViewer.achievement.inspectorGadged",
        "BUName": "",
        "BUDescription": "",
        "Hidden": true
    },
    {
        "name": "Online Mode",
        "description": "Look at the list of projects while offline",
        "cookie": "ProjectsViewer.achievement.OnlineMode",
        "BUName": "",
        "BUDescription": "",
        "Hidden": true
    },
    {
        "name": "Going offline",
        "description": "Look at the list of projects while offline",
        "cookie": "ProjectsViewer.achievement.OfflineMode",
        "BUName": "",
        "BUDescription": "",
        "Hidden": true
    },
    {
        "name": "Shy Guy",
        "description": "Look at a project OldMartijntje wants to forget about.",
        "cookie": "ProjectsViewer.achievement.ShyGuy",
        "BUName": "Shy Guy",
        "BUDescription": "D... Did you just look at me?",
        "Hidden": false
    }
]