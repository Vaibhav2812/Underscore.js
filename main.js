const people = [
    {
        name: 'vaibhav',
        age: 25,
        profession: 'Web developer',
        data: {
            school: 'Army School',
            dipCollege: 'Government Polytechnic Malvan',
            BeCollege: 'PVPIT Pune'
        },
        sex:'male'
    },
    {
        name: 'Datta',
        age: 16,
        profession: 'student',
        data: {
            school: 'Abhinav Vidyalaya Aralgundi',
            dipCollege: 'Government Polytechnic Malvan',
            BeCollege: 'PVPIT Pune'
        },
        religion: 'Hindu'
    }
];
const person = {
    name: 'Kavita',
    age: 25,
    profession: 'engineer'
};
/* _.each = Each invocation of iteratee is called with three arguments: (element, index, list)
he array (or object) to iterate over.A callback function.
*/
const people1 = _.each(people, (element, index, list) => {
    element.height = 5.4;
})
//0: {name: "vaibhav", age: 25, profession: "Web developer", height: 5.4}
//1: {name: "Datta", age: 16, profession: "student", height: 5.4}
const person1 = _.each(person, (element, key, obj) => {
    if (key === 'profession') {
        delete obj[key];
        key = 'profile';
        obj[key] = element;
    }
});
// age: 25 ,name: "Kavita", profile: "engineer";

/*_.map = Produces a new array of values by mapping each value in list through a 
with 3 argument:(list, iteratee, [context])
 */
const people2 = _.map(people, (value, index, list) => {
    return value.data;
});
/*[{school: "Abhinav Vidyalaya Aralgundi", dipCollege: "Government Polytechnic Malvan", BeCollege: "PVPIT Pune"},
 {school: "Abhinav Vidyalaya Aralgundi", dipCollege: "Government Polytechnic Malvan", BeCollege: "PVPIT Pune"}*/
const person2 = _.map(person, (value, key, obj) => {
    key = 'relationship';
    obj[key] = 'GirlFriend';
    return obj
})
/*{name: "Kavita", age: 25, profile: "engineer", relationship: "GirlFriend"}
1: {name: "Kavita", age: 25, profile: "engineer", relationship: "GirlFriend"}
2: {name: "Kavita", age: 25, profile: "engineer", relationship: "GirlFriend"}
*/

/*_.reduce = reduce boiled down a list of values into single values. 
  with argument (list , iteratee(memo, value, index, [context]))
*/
const person3 = _.reduce(people, (model, value, index, list) => {
    model.push( _.keys(value));
    return [...model];
}, []);
/*
0:["name", "age", "profession", "data", "sex", "height"]
1: ["name", "age", "profession", "data", "religion", "height"]
*/
console.log(person3);