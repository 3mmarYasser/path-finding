export enum PopsType {
    Undefined = "Undefined",
    Test = "Test",
    Test2 = "Test2"
}
export interface Pops{
    type:PopsType,
    data:null |string | number |[]|object
}
