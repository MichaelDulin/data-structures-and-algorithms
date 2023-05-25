let graph = {
  'Metroville': { 'Pandora': 82 },
  'Arendelle': { 'New Monstropolis': 42, 'Naboo': 73 },
  'Naboo': {},
  'Narnia': { 'Arendelle': 53 },
  'New Monstropolis': { 'Naboo': 73 },
  'Pandora': {}
};

function businessTrip(graph, cities) {
  let cost = 0;
  for (let i = 0; i < cities.length - 1; i++) {
    let start = cities[i];
    let end = cities[i + 1];
    if (graph[start][end] !== undefined) {
      cost += graph[start][end];
    } else {
      return null;
    }
  }
  return "$" + cost;
}


businessTrip(graph);
