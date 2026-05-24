import {Coordinate, checkPossibleMoves, knightMoves} from "../src/index.js"

test("Invalid coordiantes to knightMoves", () => {
    expect(() => {knightMoves(new Coordinate(-1, 3, null), new Coordinate(0, 5, null))}).toThrow();
    expect(() => {knightMoves(new Coordinate(0, 9, null), new Coordinate(0, 5, null))}).toThrow();
    expect(() => {knightMoves(new Coordinate(0, 5, null), new Coordinate(-1, 5, null))}).toThrow();
    expect(() => {knightMoves(new Coordinate(0, 5, null), new Coordinate(0, 100, null))}).toThrow();
})

test("Possible moves in middle of board", () => {
    expect(checkPossibleMoves(new Coordinate(3,3,null))).toStrictEqual([
        new Coordinate(4, 5, new Coordinate(3,3,null)),
        new Coordinate(5, 4, new Coordinate(3,3,null)),
        new Coordinate(5, 2, new Coordinate(3,3,null)),
        new Coordinate(4, 1, new Coordinate(3,3,null)),
        new Coordinate(2, 1, new Coordinate(3,3,null)),
        new Coordinate(1, 2, new Coordinate(3,3,null)),
        new Coordinate(1, 4, new Coordinate(3,3,null)),
        new Coordinate(2, 5, new Coordinate(3,3,null)),
    ]);

    expect(checkPossibleMoves(new Coordinate(4, 5,null))).toStrictEqual([
        new Coordinate(5,7,new Coordinate(4, 5,null)),
        new Coordinate(6,6,new Coordinate(4, 5,null)),
        new Coordinate(6,4,new Coordinate(4, 5,null)),
        new Coordinate(5,3,new Coordinate(4, 5,null)),
        new Coordinate(3,3,new Coordinate(4, 5,null)),
        new Coordinate(2,4,new Coordinate(4, 5,null)),
        new Coordinate(2,6,new Coordinate(4, 5,null)),
        new Coordinate(3,7,new Coordinate(4, 5,null)),
    ]);
})

test("Possible moves on the edge, not corner, of the board", () => {
    expect(checkPossibleMoves(new Coordinate(7, 3, null))).toStrictEqual([
        new Coordinate(6,1,new Coordinate(7, 3, null)),
        new Coordinate(5,2,new Coordinate(7, 3, null)),
        new Coordinate(5,4,new Coordinate(7, 3, null)),
        new Coordinate(6,5,new Coordinate(7, 3, null)),
    ]);

    expect(checkPossibleMoves(new Coordinate(3, 0,null))).toStrictEqual([
        new Coordinate(4,2,new Coordinate(3, 0,null)),
        new Coordinate(5,1,new Coordinate(3, 0,null)),
        new Coordinate(1,1,new Coordinate(3, 0,null)),
        new Coordinate(2,2,new Coordinate(3, 0,null)),
    ]);

    expect(checkPossibleMoves(new Coordinate(0, 3, null))).toStrictEqual([
        new Coordinate(1,5,new Coordinate(0, 3, null)),
        new Coordinate(2,4,new Coordinate(0, 3, null)),
        new Coordinate(2,2,new Coordinate(0, 3, null)),
        new Coordinate(1,1,new Coordinate(0, 3, null)),
    ]);

    expect(checkPossibleMoves(new Coordinate(3, 7, null))).toStrictEqual([
        new Coordinate(5,6,new Coordinate(3, 7, null)),
        new Coordinate(4,5,new Coordinate(3, 7, null)),
        new Coordinate(2,5,new Coordinate(3, 7, null)),
        new Coordinate(1,6,new Coordinate(3, 7, null)),
    ])
})  

test("Possible moves for each corner", () => {
    expect(checkPossibleMoves(new Coordinate(0,0,null))).toStrictEqual([
        new Coordinate(1,2,new Coordinate(0,0,null)),
        new Coordinate(2,1,new Coordinate(0,0,null)),
    ])

    expect(checkPossibleMoves(new Coordinate(7,0,null))).toStrictEqual([
        new Coordinate(5,1,new Coordinate(7,0,null)),
        new Coordinate(6,2,new Coordinate(7,0,null)),
    ])

    expect(checkPossibleMoves(new Coordinate(0,7,null))).toStrictEqual([
        new Coordinate(2,6,new Coordinate(0,7,null)),
        new Coordinate(1,5,new Coordinate(0,7,null)),
    ])

    expect(checkPossibleMoves(new Coordinate(7,7,null))).toStrictEqual([
        new Coordinate(6,5,new Coordinate(7,7,null)),
        new Coordinate(5,6,new Coordinate(7,7,null)),
    ])
})

test("Shortest path for more than 1 jump", () => {
    expect(knightMoves(new Coordinate(0,0,null), new Coordinate(3,3,null))).toBe([[0,0], [2,1], [3,3]]);
    expect(knightMoves(new Coordinate(3,3,null), new Coordinate(0,0,null))).toBe([[3,3], [1,2], [0,0]]);
})