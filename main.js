const people = [
    {
        name: 'vaibhav',
        age: 25,
        profession: 'Web developer'
    },
    {
        name: 'Datta',
        age: 16,
        profession: 'student'
    }
];
const person = {
    name: 'Kavita',
    age: 25,
    profession: 'engineer'
};
// Each invocation of iteratee is called with three arguments: (element, index, list)
//he array (or object) to iterate over.A callback function.
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