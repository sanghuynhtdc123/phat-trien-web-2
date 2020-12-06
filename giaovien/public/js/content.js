$(document).ready(function(){
	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse){
			if(request.message === 'start'){
				check();
			}
			else if(request.message === 'reset'){
				reset();
			}
		});
});
