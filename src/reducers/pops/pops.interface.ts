export enum PopsType {
    Undefined = "Undefined",
    ThemesMenu = "Themes_Menu",
    Test = "Test"
}
export interface Pops{
    type:PopsType,
    data:null |string | number |[]|object
}
