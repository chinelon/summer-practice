let user = {
    name: "Ayo",
    age: 23,
    "likes birds": true,  // multiword property name must be quoted
}

alert(user.age)// gets property valures of object
delete user.age;// deletes age property of the object

// for multiword properties dot access doesnt work, instead square brackert notation is used

user["likes birds"]= false;
alert(user["likes birds"])

delete user["likes birds"]


let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user) {
    // keys
    alert( key );  // name, age, isAdmin
    // values for the keys
    alert( user[key] ); // John, 30, true
  }


  let userss = {
    name: "John",
    surname: "Smith",
  }

   userss.name = "Pete";

   alert (userss.name);