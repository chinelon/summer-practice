let p = new Promise((resolve, reject) =>{
    let a = 1 + 1
    if (a===2){
        resolve('success');
    } else {
        reject('failed')
    }
})

p.then((message) =>{
    console.log('this is the then' + message)
}).catch((message) => {
    console.log('this is  the catch' + message)
})


// code used to fetch data from servers using api's

// URL (required), options (optional)
fetch('https://url.com/some/url')
  .then(function(response) {
    // Successful response :)
  })
  .catch(function(err) {
    // Error :(
  });


  //solves issues with cors
  fetch('url.url.com/api', {
    mode: 'cors'
  });

  //error handling in async
  async function getPersonsInfo(name) {
    try {
      const people = await server.getPeople();
      const person = people.find(person => { return person.name === name });
      return person;
    } catch (error) {
      // Handle the error any way you'd like
    }
  }