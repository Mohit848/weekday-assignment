import React, { useCallback, useRef } from "react";

const useIntersectionObserver = (callback, deps) => {
	const observer = useRef(null);
	const ref = useCallback(
		(node) => {
			if (deps.every()) {
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
};

export default useIntersectionObserver;
