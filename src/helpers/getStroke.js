export function getStroke(time,circumf){
    const timeInSeconds = time * 60;
    const amount = Math.round(circumf / timeInSeconds);
    return amount
}
