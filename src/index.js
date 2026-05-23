export class Coordinate{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

export function knightMoves(start, end){
    if(!(start instanceof Coordinate) || !(end instanceof Coordinate)) throw Error("knightMoves argument must be two Coordinates.");
    if(start.x < 0 || start.x > 7 || start.y < 0 || start.y > 7) throw Error("Starting coordinate is out of bounds.");
    if(end.x < 0 || end.x > 7 || end.y < 0 || end.y > 7) throw Error("Starting coordinate is out of bounds.");

    let visitQueue = []; 
    let visited = [];

    visitQueue.push(start);
}