let arrays = [[100, 101, 102], [200, 201], [300]];

console.log(arrays.reduce((flat, current) => flat.concat(current), []));
