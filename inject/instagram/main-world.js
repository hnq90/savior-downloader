function getReactKey(node) {
	let reactKey = '';
	const keys = Object.keys(node);
	for (let j=0;j<keys.length;j++) {
		if (keys[j].indexOf ('__reactFiber') != -1) {
			reactKey = keys[j].split('__reactFiber')[1];
			break;
		}
	}

	return reactKey;
}

// This function is looted from Story Saver 2.5
function getPostDetailFromNode(node) {
	try {
		const reactKey = getReactKey(node);

		if (location.href.match(/instagram\.com\/explore/i)) {
			const post = node?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.['__reactProps'+reactKey]?.children?.[0]?.props;
			return post;
		}

		// if (location.href.match(/instagram\.com\/reels\//i)) {
		// 	const postData = node?.parentElement?.parentElement?.parentElement?.parentElement?.['__reactProps'+reactKey]?.children.props.children.props.implementations[0].data;
		// 	const data = {
		// 		video_dash_manifest: postData.manifest,
		// 	};
		// 	return data;
		// }

		const $wrapper = node.closest('div:not([class])');
		const post = $wrapper[`__reactProps${reactKey}`].children[0]?.props.post || $wrapper[`__reactProps${reactKey}`].children?.props.dashInfo;

		return post;
	} catch (error) {
		return null;
	}
}

(() => {
	const videos = document.querySelectorAll('video');
	if (videos) {
		Array.from(videos).filter(v => v).forEach($node => {
			let detail = getPostDetailFromNode($node);

			if (detail) {
				$node.setAttribute('savior-video-detail', JSON.stringify(detail));
			}
		});
	}
	return;

})();