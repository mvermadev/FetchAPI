"use strict";

let apiKey = "3304d8d2-9f67-4661-825e-085bc3f9f577";
 let url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
 qstring = "?CMC_PRO_API_KEY=" + apiKey + "start=1&limit=5&convert=USD";


fetch(url + qstring)
.then(function(response){
    console.log(response);
})
.then(function(data){
    console.log(data);
});


