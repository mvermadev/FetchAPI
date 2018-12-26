const myPost = {
    title: "This is Post For Fetch API",
    body: '42',
    userId: 2
}

const options = {
    method: 'POST',
    header: {
        'Content-Type' : 'application/json' 
    },
    body: JSON.stringify(myPost)
}

//BASIC METHOD OF FETCH:
// fetch('https://jsonplaceholder.tyicode.com/posts', options).then(function(response){
//     console.log("Works!");
//     return response.json();
// }).then(function(data){
//     console.log(data);
// });

//With CATCH promises:
// fetch('https://jsonplaceholder.typicode.com/posts',options)
// .then(function(res){
//     if(!res.ok){
//         Promise.reject({status: res.status, statusText: res.statusText});
//     }
//     else{ return res.json(); }
// })
// .then(function(data){
//     console.log(res);
// })
// .catch(function(error){
//     console.log('Error with message: ', error.statusText);
// });

//-------------------------------------------------

//async/await function that performs a simple GET request and extracts the usernames from the returned JSON response to then log the result at the console:
async function fetchUser(endpoint){
    const response = await fetch(endpoint);
//    let data = await response.json();

    // data = data.map(user => user.username);
    // data = data.map(function(user){
    //     return user.username;
    // });
    // console.log(data);
  
    //Catching error with if statement:
    if(!response.ok){
        throw new Error(response.statusText);
    }

  const data = await response.json();
    return data;
}

fetchUser("https://jsonplaceholder.typicode.com/users")
.then(data => {
    console.log(data.map(user => user.username));
    // console.log(data.map(function(user){
    //     return user.username;
    // }));
})
.catch(function(error){
    console.log('Ooops, error', error.message);
})