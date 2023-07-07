
function sendMessage(url) {
	chrome.runtime.sendMessage (null, {
		type: 'script_executed',
		data: {
			data: {
				origin: 'instagram.com',
				url: url,
			}
		}
	});

}


(() => {
	sendMessage(location.href);
})();