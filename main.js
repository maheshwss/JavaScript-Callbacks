const names = ['james', 'jess', 'lily', 'sevy'];

names.forEach((name) => console.log(name));

const myForEach = (arr, cb) => {
    for (let i=0; i<arr.length; i++) {
        const element = arr[i];
        cb(element);
    }
};

myForEach(names, (name) => {
    console.log(name);
});


const loadPokemon =(id, cb) => {
    fetch(`https://pokeapi.co/api/v2/pokeman/${id}`)
    .then(res => res.json())
    .then(data => {
        cb(data);
    });
};

loadPokemon(56, (pokeman) => {
    console.log(pokeman);
});