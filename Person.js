//Original snip of code from Techical Assessment #1
/*
function changeAgeImpure(person){
    person.age = 25;
    return person;

}

const alex= {
    name:'Alex',
    age: 30
};

const changedAlex = changeAgeImpure(alex);

console.log(alex);
console.log(changedAlex);
console.log(alex === changedAlex);

*/

// Correcting the output for person Alex

/*
What we have in this chunck of code is function that changes the name to the person's objects


*/




//Solution with JSON.stringify
/*
function changeAgePure(person) {
    var newPersonObj = JSON.parse(JSON.stringify(person));
    //console.log(newPersonObj);
    newPersonObj.age = 25;
    return newPersonObj;
}
var alex = {
    name: 'Alex',
    age: 30
};
var alexChanged = changeAgePure(alex);
console.log(alex); // -> { name: 'Alex', age: 30 }
console.log(alexChanged); // -> { name: 'Alex', age: 25 }
*/


function changeAgeImpure(person){
    //console.log(person.name);
    //console.log(person.age);
    var newPerson = {
        name: person.name,
        age : 25
    };
    console.log(newPerson.age);
    //newPerson.name : person.name;
    //newPerson.age : 25;
    return newPerson;
    }



const alex= {
    name:'Alex',
    age: 30
};


const changedAlex = changeAgeImpure(alex);

console.log(alex);
console.log(changedAlex);
console.log(alex === changedAlex);