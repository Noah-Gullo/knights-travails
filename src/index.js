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
    if(!(point instanceof Coordinate)) throw Error("checkPossibleMoves must take in a Coordinate as an argument.");
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

function contains(array, point){
    if(!(point instanceof Coordinate)) throw Error("contains must take in a Coordinate as the second argument.");
    for(let i = 0; i < array.length; i++){ 
        if(array[i].x === point.x && array[i].y === point.y){
            return true;
        }
    }

    return false;
}

export function knightMoves(start, end){
    if(!(start instanceof Coordinate) || !(end instanceof Coordinate)) throw Error("knightMoves argument must be two Coordinates.");
    if(!validCoordinate(start)) throw Error("Starting coordinate is out of bounds.");
    if(!validCoordinate(end)) throw Error("Starting coordinate is out of bounds.");

    let visitQueue = []; 
    let visited = [];

    visitQueue.push(start);
    while(!contains(visited, end)){
        const moves = checkPossibleMoves(visitQueue[0]);
        for(let i = 0; i < moves.length; i++){
            if(!contains(visited, moves[i])){
                console.log(moves[i]);
                visitQueue.push(moves[i]);
            }
        }
        visited.push(visitQueue[0]);
        visitQueue.splice(0, 1);
    }

    return visited;
}

console.log(knightMoves(new Coordinate(0,0), new Coordinate(2, 4)));