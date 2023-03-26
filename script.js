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
		try {img.src = `./videos/video${vidCount}.mp4`;
		vidCount++;} catch(err) {
			vidCount++;
			img.src = `./videos/video${vidCount}.mp4`;
			console.log(err);
		};
		if(vidCount === 13) vidCount = 1;
	}

	img.tagName === "IMG"
		? (img.parentNode.style = `background-image: url(${img.src})`)
		: img.parentNode.style = `background-image: url(./images/spiral-rainbow-background.jpg)`;
});

const MSG = "H - Hungry and tired, always\n"+
"A - Absent-minded\n"+
"P - Prone to accidents and mistakes\n"+
"P - Perpetually running late\n"+
"Y - Yet to master basic skills\n"+
"B - Blunder-prone\n"+
"I - Incompetent\n"+
"R - Regularly disorganized\n"+
"T - Too weak to handle the pressure\n"+
"H - Hopelessly clumsy and accident-prone\n"+
"D - Definitely scatterbrained\n"+
"A - Always needing a snack and a nap\n"+
"Y - Yearning for intelligence\n"+
"HAPPY BIRTHDAY"

setTimeout(() => alert(MSG), 1000);