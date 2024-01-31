const clarkKent = {
    name: "Clark Kent",
    secretID: "Superman",
    intro: function(){
        return `Hello my name is ${clarkKent.name}`
    },
    issuereport: function() {
        return `${this.secretID} did well today`
    }
}

console.log(clarkKent.issuereport())

const missKent = (function(){
    const name = "miss Kent";
    const secretID = "Superwoman";
    intros = function(){
        return `Hello my name is ${name}`
    },
    issuereports = function() {
        return `${secretID} did well today`
    }   
    return {name, intros, issuereports};

})();

console.log(missKent.issuereports);

//getters and setters

let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    },
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    }
  };
  
  // set fullName is executed with the given value.
  user.fullName = "Alice Cooper";
  
  alert(user.name); // Alice
  alert(user.surname); // Cooper