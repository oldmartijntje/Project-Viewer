export interface Theme {
    name: string;
    title: string;
    description: string,
    properties: any;
}

export const Default: Theme = {
    name: "Default",
    title: 'Default Theme',
    description: 'Default theme',
    properties: {
        "--background": "#363636",
        "--background-accent": "#3d3d3d",
        "--image-background-home": "#000000",
        "--color-accent": "#1db954",
        "--text-color-on-accent": "#fff",

        "--item-home-background": "#161616",
        "--item-home-textcolor": "#4d4d4d",
        "--item-home-glow": "#575757",
        "--item-home-glow-hover": "#575757",
        "--home-button-background": "#4e4e4e",
        "--home-button-color": "#111111",
        "--home-button-background-hover": "#111111",
        "--home-button-color-hover": "#4e4e4e",

        "--menu-bar-background": "#1d1d1d",
        "--menu-bar-logo-color": "#575757",
        "--menu-bar-button-background": "#4e4e4e",
        "--menu-bar-button-color": "#111111",
        "--menu-bar-button-background-hover": "#111111",
        "--menu-bar-button-color-hover": "#4e4e4e",

        "--rating-background": "#0c0052",
        "--rating-color": "#0714ca",
        "--rating-background-og": "#004e00",
        "--rating-color-og": "#058800",
        "--rating-background-s": "#3f0013",
        "--rating-color-s": "#97002d",
        "--rating-background-a": "#5f0600",
        "--rating-color-a": "#9b0000",
        "--rating-background-s-plus": "#c46f00",
        "--rating-color-s-plus": "#ffe600",



        "--details-title-color": "#575757",
        "--details-version-text-color": "#575757",
        "--details-status-text-color": "#575757",
        "--details-creators-text-color": "#575757",
        "--details-title-shadow-color": "#111111",
        "--details-version-text-shadow-color": "#111111",
        "--details-status-text-shadow-color": "#111111",
        "--details-creators-text-shadow-color": "#111111",

        "--details-info-text-color": "#4e4e4e",
        "--details-info-background-color": "#1d1d1d",


    }
};
