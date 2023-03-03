export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: "light",
  properties: {
  "--app-background": "#EEEEEE",
  "--app-header-background": "#FFFFFF",
  "--card-background": "#FFFFFF",
  "--card-header-background": "#F6F6F6",
  "--button-background": "#F6F6F6",

  "--text-color-primary": "#717171",
  "--text-color-secondary": "#919191",
  "--text-success": "#3C7649",
  "--text-danger": "#3684CB",
  "--text-info": "#DD4B4B",

  "--shadow": "0px 0px 6px 2px rgba(204, 204, 204, 0.25)",
  }
};
export const dark: Theme = {
  name: "dark",
  properties: {
  "--app-background": "#EEEEEE",
  "--app-header-background": "#FFFFFF",
  "--card-background": "#FFFFFF",
  "--card-header-background": "#F6F6F6",
  "--button-background": "#F6F6F6",

  "--text-color-primary": "#717171",
  "--text-color-secondary": "#919191",
  "--text-success": "#3C7649",
  "--text-danger": "#3684CB",
  "--text-info": "#DD4B4B",

  "--shadow": "0px 0px 6px 2px rgba(204, 204, 204, 0.25)",
  }
};
