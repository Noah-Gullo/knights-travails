export class Coordinate{
    constructor(x, y, parent){
        this.x = x;
        this.y = y;
        this.parent = parent;
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
        const currMove = new Coordinate(point.x + xOffset, point.y + yOffset, point);
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

function parsePath(array){
    let result = [];
    let currNode = array[array.length - 1];
    while(currNode != null){
        result.unshift(currNode);
        currNode = currNode.parent;
    }
    return result;
}

function convertToArray(path){
    let array = []
    for(let i = 0; i < path.length; i++){
        let point = [];
        point[0] = path[i].x;
        point[1] = path[i].y; 
        array.push(point);
    }
    return array;
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
                visitQueue.push(moves[i]);
            }
        }
        visited.push(visitQueue[0]);
        visitQueue.splice(0, 1);
    }
    let path = parsePath(visited);
    let pathArray = convertToArray(path);
    return pathArray;
}

console.log(knightMoves(new Coordinate(0,0,null), new Coordinate(7,7,null)));