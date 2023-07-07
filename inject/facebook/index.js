
function savePhotoStory(url, username) {
	chrome.runtime.sendMessage (null, {
		type: 'script_executed',
		data: {
			data: {
				origin: 'facebook.com',
				url: url,
				username: username,
			}
		}
	});

}


(() => {
	const profilePictures = document.querySelector ('a[role=link][tabindex=\'0\'][href*=\'https://www.facebook\']>img');
	console.log('I\'ve runnnnnnn');

	if (profilePictures != null && top.location.toString().indexOf('stories') != -1) {
		// const videos = document.querySelectorAll('video');
		// let video = null;
		// for (let i = 0, len = videos.length; i < len; i++) {
		// 	if (videos[i].offsetHeight !== 0) {
		// 		video = videos[i];
		// 	}
		// }
		const username = profilePictures.alt;
		// if (video !== null) {
		let videoUrl = document.head.getAttribute('savior-story-url');
		if (videoUrl && videoUrl !== 'null') {
			document.head.removeAttribute('savior-story-url');
			savePhotoStory(videoUrl, username);
			return;
		}
		// }
	}
	document.head.removeAttribute('savior-story-url');
	savePhotoStory(null);

})();