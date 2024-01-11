const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
];

function walk(maze: string[], wall: string, currentPoint: Point, end: Point, seen: boolean[][], path: Point[]): boolean {

    // 1. Base Case
    // Off the map
    if (currentPoint.x < 0 || currentPoint.x >= maze[0].length ||
       currentPoint.y < 0 || currentPoint.y >= maze.length) {
        return false;
    }
    // On a wall
    if (maze[currentPoint.y][currentPoint.x] === wall) {
        return false;
    }
    // At the end
    if (currentPoint.x === end.x && currentPoint.y === end.y) {
        path.push(end);
        return true;
    }
    // seen already
    if (seen[currentPoint.y][currentPoint.x]) {
        return false;
    }
  
    // pre
    seen[currentPoint.y][currentPoint.x] = true;
    path.push(currentPoint);
   
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        if (walk(maze, wall, {
            x: currentPoint.x + x,
            y: currentPoint.y + y
        }, end, seen, path)) {
            return true;
        }
    }

    //post
    path.pop();
    return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0;  i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
