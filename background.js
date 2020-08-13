function callback() {
    if(xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            result = xhr.responseText;
            console.log(result);
            var div = document.getElementById('bankAccount');
            div.innerHTML += result;
        }
    }
};

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://harmonize-api-endpoint.herokuapp.com/", true);
xhr.onreadystatechange = callback;
xhr.send();
