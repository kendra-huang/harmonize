var apiUrl = 'https://harmonize-api-endpoint.herokuapp.com/';
fetch(apiUrl).then(response => {
    return response.json();
}).then(data => {
    // Work with JSON data here
    console.log(data);
}).catch(err => {
    // Do something for an error here
});