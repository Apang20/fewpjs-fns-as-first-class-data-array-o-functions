function wakeDog(name, breed) {
    let string = `Wake ${name} the ${breed}`;
    console.log(string);
    return string;
}

function leashDog(name, breed) {
    let string = `Leash ${name} the ${breed}`;
    console.log(string);
    return string;
}

function walkToPark(name, breed) {
    let string = `Walk to the park with ${name} the ${breed}`;
    console.log(string);
    return string;
}

function throwFrisbee(name, breed) {
    let string = `Throw the frisbee for ${name} the ${breed}`;
    console.log(string);
    return string;
}

function walkHome(name, breed) {
    let string = `Walk home with ${name} the ${breed}`;
    console.log(string);
    return string;
}

function unleashDog(name, breed) {
    let string = `Unleash ${name} the ${breed}`;
    console.log(string);
    return string;
}

const routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
]

const exerciseDog = function(name, breed) {
    let arr = []
    routine.forEach(element => {
        arr.push(element(name, breed));
    })
    return arr
}
