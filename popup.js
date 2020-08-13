document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      document.getElementById('sc-item-Cf0ffe267-d465-474a-a98b-93b0be1a45b1').innerHTML += 'Insert Form Here'
    });
  }, false);
}, false);
