function hasCycle(graph) { // graphs are taken as adjacency lists
    for (let i = 0; i < graph.length; i++) {
        if (cycleSearch(graph, i, i).length > 0) return true;
    }
    return false;
}

function cycleSearch(graph, startNode, targetNode) { // based off depthFirstSearch function
    if (graph[0].length < 1) return [];
    let path = [];
    let visited = [];
    for (let i = 0; i < graph.length; i++) visited[i] = false;
    if (cs(graph, startNode, targetNode, path, visited)) return path;
    return [];
}

function cs(graph, currentNode, targetNode, path, visited) { // based off dfs function
    if (currentNode != targetNode) visited[currentNode] = true;
    path.push(currentNode);
    if (currentNode == targetNode && path.length > 1) return 1;
    for (let v = 0; v < graph[currentNode].length; v++) {
        let nextNode = graph[currentNode][v];
        if (!visited[nextNode]) {
            if (cs(graph, nextNode, targetNode, path, visited)) return 1;
        }
    }
    path.pop();
}



