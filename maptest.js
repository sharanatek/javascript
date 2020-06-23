const populationBySpecies = new Map();
const reindeer = { name: 'Reindeer', formalName: 'Rangifer tarandus' };

populationBySpecies.set(reindeer, 2000000);

// Map {
//     { name: 'Reindeer', formalName: 'Rangifer tarandus' } => 2000000
//   }

console.log(populationBySpecies);
populationBySpecies.get(reindeer); // => 2,000,000
