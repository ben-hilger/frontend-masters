export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    seen[source] = true;
    const q: number[] = [source];

    do {
        const current = q.shift() as number;
        if (current === needle) {
            break;
        }

        const adjs = graph[current];
        for (let i = 0; i < adjs.length; i++) {
            if (adjs[i] === 0) {
                continue;
            }

            if (seen[i]) {
                continue;
            }

            seen[i] = true;
            prev[i] = current;

            q.push(i);
        }
        seen[current] = true;
        
    } while (q.length > 0);

    if (prev[needle] === -1) {
        return null;
    }

    // build it backwards
    let current = needle;
    const out: number[] = [];

    while (prev[current] !== -1) {
        out.push(current);
        current = prev[current];
    }

    return [source].concat(out.reverse())
}
