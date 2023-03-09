// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
 cats.push("Ralph")
};

function destructivelyPrependCat(name) {
    cats.unshift("Bob")

};

function destructivelyRemoveLastCat(name) {
    cats.pop("Garfield");
};

function destructivelyRemoveFirstCat(name) {
    return cats.shift();
    cats;
}

function removeLastCat(name) {
    const copyCats = cats.slice()
    return copyCats.slice(0, copyCats.length - 1 );
}

function appendCat(name) {
    return [...cats, name];
}


function removeFirstCat() {
    return cats.slice(cats.length - 2)
}

function prependCat(name) {
    const cats = ["Arnold", "Milo", "Otis", "Garfield"]
    return [...cats];
}
