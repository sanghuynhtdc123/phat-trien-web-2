var currentCookie="";
var currentUid = "";
$(document).ready(function () {
    $("#check").click(function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.reload(tabs[0].id);
      });
    });

    $("#send").click(function () {
        window.open('http://localhost/phat-trien-web2/php-training/autocheck.php?list', '_blank', 'width=900px,height=600px,toolbar=yes,location=yes,menubar=yes');
    });
}); //end document ready
