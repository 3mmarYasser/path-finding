
// @ts-ignore
const getColorByVar = (name:string)=> getComputedStyle(document.documentElement).getPropertyValue(name);
function oklchToHsl(oklchColor: string): [number, number, number] {
    const [L, C, H] = oklchColor.split(" ").map(Number) as [number, number, number];

    // Convert OKLCH to HSL
    const H_deg = H;  // OKLCH hue is directly in degrees
    const S = C / 100;
    const L_percent = L / 100;

    return [H_deg, S, L_percent];
}
const hslToRgb = (hsl:[number,number,number])=>{
    let [h ,s,l] =hsl
    s /= 100;
    l /= 100;
    const k = (n:number)=> (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n:number) =>
        l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [255 * f(0), 255 * f(8), 255 * f(4)];
}





export {
    getColorByVar,
    oklchToHsl,
    hslToRgb


}