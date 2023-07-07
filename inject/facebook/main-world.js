// This function is looted from Story Saver 2.5
function getStoryUrlFromNode(node) {
	try {
		let reactKey = '';
		const keys = Object.keys(node);
		for (let j=0;j<keys.length;j++) {
			if (keys[j].indexOf ('__reactFiber') != -1) {
				reactKey = keys[j].split('__reactFiber')[1];
				break;
			}
		}
		const videoUrl =
		node?.parentElement?.parentElement?.parentElement?.parentElement?.['__reactProps'+reactKey]?.children?.[0]?.props?.children?.props?.implementations?.[1]?.data?.hdSrc
		|| node?.parentElement?.parentElement?.parentElement?.parentElement?.['__reactProps'+reactKey]?.children?.[0]?.props?.children?.props?.implementations?.[1]?.data?.sdSrc
		|| node?.parentElement?.parentElement?.parentElement?.parentElement?.['__reactProps'+reactKey]?.children?.props?.children?.props?.implementations?.[1]?.data?.hdSrc
		|| node?.parentElement?.parentElement?.parentElement?.parentElement?.['__reactProps'+reactKey]?.children?.props?.children?.props?.implementations?.[1]?.data?.sdSrc
		|| node['__reactFiber'+reactKey]?.return?.stateNode?.props?.videoData?.$1?.hd_src
		|| node['__reactFiber'+reactKey]?.return?.stateNode?.props?.videoData?.$1?.sd_src
		|| '';

		return videoUrl;
	} catch (error) {
		return null;
	}
}

(() => {
	const videos = document.querySelectorAll('video');
	let video = null;
	for (let i = 0, len = videos.length; i < len; i++) {
		if (videos[i].offsetHeight !== 0) {
			video = videos[i];
		}
	}
	if (video !== null) {
		let videoUrl = getStoryUrlFromNode(video);
		document.head.setAttribute('savior-story-url', videoUrl);
	}

	return;

})();