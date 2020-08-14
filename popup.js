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
              result = "<font size='+10'>$" + result + "</font>"
              var div = document.getElementById('bankAccount');
              div.innerHTML += result;
          }
      }
  };

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://harmonize-api-endpoint.herokuapp.com/", true);
  xhr.onreadystatechange = callback;
  xhr.send();

  function modifyDOM() {
      //You can play with your DOM here or check URL against your regex
      return document.body.innerHTML;
  }

  let totalCost = '';
  //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
  chrome.tabs.executeScript({
      code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
  }, (results) => {
      //Here we have just the innerHTML and not DOM structure
      console.log('Popup script:')
      console.log(results[0]);
      totalCost = results;
  });
  for (let i = 0; totalCost.length; i++){
      if (totalCost[i] == '$'){
          console.log(totalCost.splice(i, i+5));
          console.log(i);
      }
  }
}, false);
