// Uploadinf a file:
//files can be uploaded using HTML <input type="file"/> input element, "FormData()" and "fetch()".
    // var  formData = new FormData();
    // var filefield = document.querySelector("input[type='file']");

    // formData.append('username', 'abc123');
    // formData.append("avatar", filefield.files[0]);

    // fetch("https://example.com/profile/avatar", {
    //     method: 'PUT',
    //     body: formData
    // })
    // .then(function(response){
    //     return response.json()
    // })
    // .catch(error => console.log('Error', error))
    // .then(response => console.log('Success:', JSON.stringify(response)));

//======================================================

//Uploading Multitple files:
var formData = new FormData();
var photos = document.querySelector("input[type='files'][multiple]");
formData.append('title', 'My vegas vacation');
for(var i = 0; i < photos.files.length; i++){
    formData.append('photo', photo.files[i]);
}

fetch('https://example.com/posts', {
    method: 'post',
    body: formData
})
.then(response => response.json())
.then(response => console.log('Success : ', JSON.stringify(response)))
.catch(err => console.error('Error :', error ));


