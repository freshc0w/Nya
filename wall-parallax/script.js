const imgClasses = document.querySelectorAll(".img");

let imgCount = 1;
let vidCount = 1;
imgClasses.forEach((img) => {
	// console.log(img.src);

	// Add shading effect
	console.log(img.tagName);
	if(img.tagName === "IMG") {
		img.src = `./images/${imgCount}.jpg`;
		imgCount++;
		if(imgCount === 68) imgCount = 1;
	} else {
		img.src = `./videos/video${vidCount}.mp4`;
		vidCount++;
		if(vidCount === 13) vidCount = 1;
	}


	img.tagName === "IMG"
		? (img.parentNode.style = `background-image: url(${img.src})`)
		: img.parentNode.style = `background-image: url(./images/spiral-rainbow-background.jpg)`;
});


