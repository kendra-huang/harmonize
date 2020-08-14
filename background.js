function callback() {
    if(xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            result = xhr.responseText;
            console.log(result);
            var div = document.getElementById('bankAccount');
            div.innerHTML += result;
        }
    }
    chrome.browserAction.onClicked.addListener(function(tab) {
        chrome.tabs.executeScript({
          code: 'var div=document.createElement("div"); document.body.appendChild(div); div.innerText="test123";'
        });
      });
};


var xhr = new XMLHttpRequest();
xhr.open("GET", "https://harmonize-api-endpoint.herokuapp.com/", true);
xhr.onreadystatechange = callback;
xhr.send();
