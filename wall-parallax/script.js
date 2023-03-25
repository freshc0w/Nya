const imgClasses = document.querySelectorAll(".img");

imgClasses.forEach((img) => {
	// console.log(img.src);

	// Add shading effect
	console.log(img.tagName);
	img.tagName === "IMG"
		? (img.parentNode.style = `background-image: url(${img.src})`)
		: img.parentNode.style = `background-image: url(./images/spiral-rainbow-background.jpg)`;
});
