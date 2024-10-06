//module 7.7.1
const person1 = {
    name: "Алексей",
    age: 31,
}

function printInfo (){
    return this.name + " " + this.age;
}
const fullName = printInfo.call(person1);
    console.log(fullName);  


//module 7.7.2
const Obj = {
    a: 0,
    b: 0,
    operator: ''
  };
  
  const arr = [2, 10, "/"];
  
  function calculate(a, b, operator) {
    let res;
    switch (operator) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "*":
        res = a * b;
        break;
      case "/":
        res = a / b;
        break;
    }
    return res;
  }
  
  const result = calculate.apply(Obj, arr);
  console.log(result); 


//module 7.7.3
const users = [
    { name: "John", age: 10 },
    { name: "Jane", age: 13 },
    { name: "Bob", age: 19 },
    { name: "Alice", age: 40 },
];

const filteredUsers = users.filter((user) => {
    return user.age >= 18; // фильтруем только пользователей старше 17 лет
});
const filteredUsersNames = (arr) =>{
    let newArr = [];
    for (let elem of arr){
        for (let key in elem)
    {
        if (key === "name"){
            newArr.push(elem[key]);
        }
    }
    }
    return newArr;
}

console.log(filteredUsers); 
console.log(filteredUsersNames(users)); 



//module 7.7.4

const Person = {
    firstName: "John",
    lastName: "Smith",
    fullName: "JS"
  } 
   
  function setFullName(obj, str) {
    obj.fullName = str;
  }
  
  const setPersonFullName = setFullName.bind(null, Person);
  
  setPersonFullName("John Smith");
  
  console.log(Person.fullName);
  console.log(Person);




//module 7.7.5

const arr2 = [1, 2, 1, 2, 3, 4, 5, 2, 4, 1, 1, 6, 10];

const getUnique = (arr2) => {
  return arr2.filter((el, ind) => ind === arr2.indexOf(el));
}

console.log(getUnique(arr2));


