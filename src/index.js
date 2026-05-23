export class Coordinate{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

function validCoordinate(point){
    if(!(point instanceof Coordinate)) throw Error("validCoordinate requires a Coordinate argument.");
    if(point.x < 0 || point.x > 7 || point.y < 0 || point.y > 7){
        return false;
    }
    return true;
}

export function checkPossibleMoves(point){
    const offsets = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];
    let validMoves = [];

    for(let i = 0; i < offsets.length; i++){
        const xOffset = offsets[i][0];
        const yOffset = offsets[i][1];
        const currMove = new Coordinate(point.x + xOffset, point.y + yOffset);

        if(validCoordinate(currMove)){
            validMoves.push(currMove);
        }
    }

    return validMoves;
}

export function knightMoves(start, end){
    if(!(start instanceof Coordinate) || !(end instanceof Coordinate)) throw Error("knightMoves argument must be two Coordinates.");
    if(!validCoordinate(start)) throw Error("Starting coordinate is out of bounds.");
    if(!validCoordinate(end)) throw Error("Starting coordinate is out of bounds.");

    let visitQueue = []; 
    let visited = [];

    visitQueue.push(start);

    while(visitQueue.length != 0){
        checkPossibleMoves(visit[0]);
        visited.push(visitQueue[0]);
        visitQueue.splice(0, 1);
    }
}