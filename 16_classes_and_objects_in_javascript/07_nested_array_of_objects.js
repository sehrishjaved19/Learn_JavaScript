// Nested Array of Objects
const arrayOfObjects = [
    {// First Object
        name : 'Sehrish',
        age : 19,
        hobbies : ['coding','Traveling', 'Painting'],
        address : {
            street : 'unreal',
            city : 'in the heaven',
            zip : '10001'
        }
    },
    { //second Object
        name : 'Aiman',
        age : 20,
        skills : ['sql','python','C++'],
        projects: [
            { title:'Project A', completed: true },
            { title:'Project B', completed: false}
        ]
    },
    { //third object
        title: 'Special Object',
        data: [1,2,3],
        metsData: { key: "Value"}
    },
    {//FoUrth Object
        //An object with no specific properties
    },
    { // fifth object
        anotherObject: true,
        nestedArrays: [
            [1,2,3],
            ['a', 'b', 'c']
        ],
        additionalProperty: 'Extra'
    }
];
//Accessing properties of FIRST OBJECT:
console.log(arrayOfObjects[0].name);//output: Sehrish
console.log(arrayOfObjects[0].hobbies[0]); //output: coding

//Accessing properties of SECOND OBJECT:
console.log(arrayOfObjects[1].skills[2]);//output: C++
console.log(arrayOfObjects[1].projects[0].completed);//output: true

//Accessing properties of THIRD OBJECT:
console.log(arrayOfObjects[2].metsData.key);// output: Value

//Accessing properties of FOURTH OBJECT:
console.log(arrayOfObjects[3]); //output: {} (reterives an empty object)

////Accessing properties of FIFTH OBJECT:
console.log(arrayOfObjects[4].anotherObject);//output: true
console.log(arrayOfObjects[4].nestedArrays[0][1]);//output: 2
console.log(arrayOfObjects[4].additionalProperty); //output: Extra

