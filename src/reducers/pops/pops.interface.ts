export enum PopsType {
    Undefined = "Undefined",
    Nav_Menu = "Nav_Menu",
    Test = "Test"
}
export interface Pops{
    type:PopsType,
    data:null |string | number |[]|object
}
