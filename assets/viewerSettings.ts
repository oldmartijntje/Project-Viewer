export interface PageData {
    key: string;
    routerRedirect: string[];
    description: string;
    name: string;
    url: string | null;
}

export function getDataByKey(key, data: PageData[] = PagesData) {
    return data.find(item => item.key === key);
}

export const WebsiteVersion: string = "1.4.0.0";

export const PagesData: PageData[] = [
    {
        "key": "info",
        "routerRedirect": ["article", "info"],
        "description": "The info page is a page where you can find information about the website and the creator of the website",
        "name": "Info page",
        "url": "/article/info"
    },
    {
        "key": "home",
        "routerRedirect": [""],
        "description": "The home page of the website, Which currently is the same as the info page.",
        "name": "Homepage",
        "url": "/"
    },
    {
        "key": "aboutMe",
        "routerRedirect": ["article", "about-me"],
        "description": "A bit of information about the creator",
        "name": "About-me page",
        "url": "/article/about-me"
    },
    {
        "key": "pages",
        "routerRedirect": ["article", "pages"],
        "description": "A list of all the pages on the website.",
        "name": "Navigator page",
        "url": "/article/pages"
    },
    {
        "key": "achievements",
        "routerRedirect": ["achievements"],
        "description": "A list of achievements that you can unlock by doing certain things on the website.",
        "name": "Achievements page",
        "url": "/achievements"
    },
    {
        "key": "projects",
        "routerRedirect": ["page", "1"],
        "description": "The projects page is a page where you can find all the projects that I have worked on.",
        "name": "Projects page",
        "url": "/page/1"
    },
    {
        "key": "defaultProject",
        "routerRedirect": ["offlineProject", "14"],
        "description": "This is the project of the website you are currently looking at.",
        "name": "Project Viewer Project Page",
        "url": "/offlineProject/14"
    },
    {
        "key": "redirect",
        "routerRedirect": ["r", "1"],
        "description": "This page just redirects you straigt back to the Projects page.",
        "name": "RedirectPage",
        "url": "r/1"
    },
    {
        "key": "onlineProject",
        "routerRedirect": ["project", "1"],
        "description": "This goes to the first project in the online projects list.",
        "name": "Online Project 1",
        "url": "/project/1"
    }
]