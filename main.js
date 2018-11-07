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
        sex: 'male'
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
    },
    {
        name: 'Vaibhu',
        age: 24,
        profession: 'Web developer',
        data: {
            school: 'Abhinav Vidyalaya Aralgundi',
            dipCollege: 'Government Polytechnic Malvan',
            BeCollege: 'PVPIT Pune'
        },
        religion: 'Hindu',
        sex: 'male'
    }
];
const person = {
    name: 'Kavita',
    age: 25,
    profession: 'engineer'
};

const library = [{
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
},
{
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
},
{
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
}
];
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
    model.push(_.keys(value));
    return [...model];
}, []);
/*
0:["name", "age", "profession", "data", "sex", "height"]
1: ["name", "age", "profession", "data", "religion", "height"]
*/

/*_.where = Looks through each value in the list, returning an array of all the values that matches the key-value pairs listed in properties. 
*/
const people4 = _.where(people, ({ profession: 'Web developer', sex: 'male' }));
/*0:name: "vaibhav", age: 25, profession: "Web developer", data: {…}, sex: "male", …}
1: {name: "Vaibhu", age: 24, profession: "Web developer", data: {…}, religion: "Hindu", …}
*/

/*_.reject = its opposite to filter.looks through in each value in list return array
*/
const people5 = _.reject(people, (item) => item.age > 20);
/*
0: {name: "Datta", age: 16, profession: "student", data: {…}, religion: "Hindu", …}
*/

/*_.contains = it will return true if value is present in list. use for only array element
*/
const people6 = _.contains([1, 2, 3], 10);
//false

/*_.invoke(list, methodName, *arguments) 
*/
const people7 = _.invoke([[8, 7, 9], [88, 8, 888]], 'sort');
/*0: (3) [7, 8, 9]
1: (3) [8, 88, 888]
*/

/*_.pluck(list, property) = extracting a list of property values. same as map */
const people8 = _.pluck(person, 'data');
/*
0: {school: "Army School", dipCollege: "Government Polytechnic Malvan", BeCollege: "PVPIT Pune"}
1: {school: "Abhinav Vidyalaya Aralgundi", dipCollege: "Government Polytechnic Malvan", BeCollege: "PVPIT Pune"}
2: {school: "Abhinav Vidyalaya Aralgundi", dipCollege: "Government Polytechnic Malvan", BeCo
*/

/*_groupBy(list, iteratee) =Splits a collection into sets, grouped by the result of running each value through iteratee.*/
const people9 = _.groupBy(library, (book) => book.readingStatus);
/*false: 0: {author: "Suzanne Collins", title: "Mockingjay: The Final Book of The Hunger Games", readingStatus: false}
length: 1
true: 0: {author: "Bill Gates", title: "The Road Ahead", readingStatus: true}
      1: {author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true}
*/