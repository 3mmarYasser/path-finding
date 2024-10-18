export enum PopsType {
    Undefined = "Undefined",
    ThemesMenu = "Themes_Menu",
    "DocsMenu" = "DOCS_MENU",
    Test = "Test"
}
export interface Pops{
    type:PopsType,
    data:null |string | number |[]|object
}
