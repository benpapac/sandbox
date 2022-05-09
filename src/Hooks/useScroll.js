import { useEffect, useState } from 'react';

const useScroll = () => {
	const [scrollData, setScrollData] = useState({
		scrollHeight: 0,
		direction: '',
	});

	const handleScroll = (e) => {
		e.preventDefault();
		// let direction = scrollData.scrollHeight < e.path[1].scrollY ? 'down' : 'up';
		console.log('old Height: ', scrollData.scrollHeight);
		let oldHeight = scrollData.scrollHeight;
		setScrollData({
			scrollHeight: e.path[1].scrollY,
			// direction: direction,
			prevHeight: oldHeight,
			// down: (scrollData.prevHeight < scrollData.scrollHeight),
		});
		console.log(e.path[1].scrollY, e.path[1].scrollY > scrollData.scrollHeight);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return scrollData;
};

export default useScroll;
