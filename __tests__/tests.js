import {Coordinate, knightMoves} from "../src/index.js"

test("Invalid coordiantes", () => {
    expect(() => {knightMoves(new Coordinate(-1, 3), new Coordinate(0, 5))}).toThrow();
    expect(() => {knightMoves(new Coordinate(0, 9), new Coordinate(0, 5))}).toThrow();
    expect(() => {knightMoves(new Coordinate(0, 5), new Coordinate(-1, 5))}).toThrow();
    expect(() => {knightMoves(new Coordinate(0, 5), new Coordinate(0, 100))}).toThrow();
})

test("Shortest path for more than 1 jump", () => {
    expect(knightMoves(new Coordinate(0,0), new Coordinate(3,3))).toBe([[0,0], [2,1], [3,3]]);
    expect(knightMoves(new Coordinate(3,3), new Coordinate(0,0))).toBe([[3,3], [1,2], [0,0]]);
})