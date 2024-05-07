import { useCallback, useRef } from "react";

const useIntersectionObserver = (callback, deps) => {
	const observer = useRef(null);
	const ref = useCallback(
		(node) => {
			if (deps[0] && deps[1]) {
				observer.current?.disconnect();
				observer.current = new IntersectionObserver((entries) => {
					if (entries[0].isIntersecting) {
						callback();
					}
				});
				if (node) {
					observer.current.observe(node);
				}
			}
		},
		[callback, deps]
	);
	return ref;
};

export default useIntersectionObserver;
