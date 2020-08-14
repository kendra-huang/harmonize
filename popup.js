document.addEventListener('DOMContentLoaded', function() {
  // var checkPageButton = document.getElementById('checkPage');
  // checkPageButton.addEventListener('click', function() {
  //
  //   chrome.tabs.getSelected(null, function(tab) {
  //     document.getElementById('sc-item-Cf0ffe267-d465-474a-a98b-93b0be1a45b1').innerHTML += 'Insert Form Here'
  //   });
  // }, false);
  function callback() {
      if(xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
              result = xhr.responseText;
              console.log(result);
              result = "<b>" + result + "<b>"
              var div = document.getElementById('bankAccount');
              div.innerHTML += result;
          }
      }
      
  };
  
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://harmonize-api-endpoint.herokuapp.com/", true);
  xhr.onreadystatechange = callback;
  xhr.send();
}, false);

