"use strict";

let myInit = {
        method : 'GET',
        header : {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default' 
};

let myRequest = new Request('./class.json', myInit);

//they check the fetch response for include in fetch():
let checkFetch = response =>  {
    if(!response.ok){
        throw Error(response.statusText + ' - ' + response.url);
    }
    else{
        return response.json(); // with json() format file.
    }
}

fetch(myRequest)
.then(checkFetch)
// .then(function(resp){
//     return resp.json();
//     // console.log('Works');
//     // console.log(resp);
// })
.then(function(data){
    console.log(data.students);
})
.catch(function(error){
    console.log('error');
    console.log(error);
});