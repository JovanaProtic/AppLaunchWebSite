													
													// Img Slider on Click
													
let sliderImages = document.querySelectorAll('.mySlides'),
	button = document.querySelector('.take-tour'),
	current = 0;

								// Clear all images

function reset() {
	for(let i = 0; i < sliderImages.length; i++) {
		sliderImages[i].style.display = 'none';
	}
}
								// Init slider

function startSlide() {
	reset();
	sliderImages[0].style.display = 'block';
}

								// Show next

function slideRight() {
	reset();
	sliderImages[current + 1].style.display = 'block';
	current++;
}

								// Click on button

button.addEventListener('click', function() {
	if(current === sliderImages.length -1) {
		current = -1
	}
	slideRight();
});
startSlide();