"use strict"

$(document).ready(function () {
	const $slides = $('.carousel__item');
	const $dots = $('.dot');
	let currentIndex = 0;

	function showSlide(index) {
		$slides.hide().eq(index).show().css('z-index', 10);
		$dots.removeClass('active').eq(index).addClass('active');
		currentIndex = index;
	}

	function setupCarouselMobile() {
		showSlide(0);

		$dots.off('click').on('click', function () {
			const index = $(this).index();
			showSlide(index);
		});

		let touchStartX = 0;
		let touchEndX = 0;

		$('.carousel__items')
			.off('touchstart touchend')
			.on('touchstart', function (e) {
				touchStartX = e.originalEvent.touches[0].clientX;
			})
			.on('touchend', function (e) {
				touchEndX = e.originalEvent.changedTouches[0].clientX;
				handleSwipe();
			});

		function handleSwipe() {
			const swipeThreshold = 50;
			const deltaX = touchEndX - touchStartX;

			if (Math.abs(deltaX) > swipeThreshold) {
				if (deltaX < 0 && currentIndex < $slides.length - 1) {
					showSlide(currentIndex + 1);
				} else if (deltaX > 0 && currentIndex > 0) {
					showSlide(currentIndex - 1);
				}
			}
		}
	}

	function teardownCarouselMobile() {
		$slides.show().css('z-index', 'auto');
		$dots.off('click');
		$dots.removeClass('active');
		$('.carousel__items').off('touchstart touchend');
	}

	function checkWidth() {
		if (window.innerWidth <= 600) {
			setupCarouselMobile();
		} else {
			teardownCarouselMobile();
		}
	}

	checkWidth();
	$(window).resize(checkWidth);
}
);
let isSwiping = false;

$('.carousel__items')
	.on('touchstart', function (e) {
		touchStartX = e.originalEvent.touches[0].clientX;
		touchStartY = e.originalEvent.touches[0].clientY;
		isSwiping = false;
	})
	.on('touchmove', function (e) {
		const dx = e.originalEvent.touches[0].clientX - touchStartX;
		const dy = e.originalEvent.touches[0].clientY - touchStartY;

		// Якщо горизонтальний свайп більший за вертикальний — блокуємо скрол
		if (Math.abs(dx) > Math.abs(dy)) {
			e.preventDefault(); // блокування вертикального скролу
			isSwiping = true;
		}
	})
	.on('touchend', function (e) {
		if (isSwiping) {
			touchEndX = e.originalEvent.changedTouches[0].clientX;
			handleSwipe();
		}
	});


// -----------------------------
$(document).ready(function () {
	const $slides = $('.sellers__item');
	const $dots = $('.dot');
	let currentIndex = 0;

	function showSlide(index) {
		$slides.hide().eq(index).show().css('z-index', 10);
		$dots.removeClass('active').eq(index).addClass('active');
		currentIndex = index;
	}

	function setupCarouselMobile() {
		showSlide(0);

		$dots.off('click').on('click', function () {
			const index = $(this).index();
			showSlide(index);
		});

		let touchStartX = 0;
		let touchEndX = 0;

		$('.sellers__items')
			.off('touchstart touchend')
			.on('touchstart', function (e) {
				touchStartX = e.originalEvent.touches[0].clientX;
			})
			.on('touchend', function (e) {
				touchEndX = e.originalEvent.changedTouches[0].clientX;
				handleSwipe();
			});

		function handleSwipe() {
			const swipeThreshold = 50;
			const deltaX = touchEndX - touchStartX;

			if (Math.abs(deltaX) > swipeThreshold) {
				if (deltaX < 0 && currentIndex < $slides.length - 1) {
					showSlide(currentIndex + 1);
				} else if (deltaX > 0 && currentIndex > 0) {
					showSlide(currentIndex - 1);
				}
			}
		}
	}

	function teardownCarouselMobile() {
		$slides.show().css('z-index', 'auto');
		$dots.off('click');
		$dots.removeClass('active');
		$('.sellers__items').off('touchstart touchend');
	}

	function checkWidth() {
		if (window.innerWidth <= 600) {
			setupCarouselMobile();
		} else {
			teardownCarouselMobile();
		}
	}

	checkWidth();
	$(window).resize(checkWidth);
}
);

$('.sellers__items')
	.on('touchstart', function (e) {
		touchStartX = e.originalEvent.touches[0].clientX;
		touchStartY = e.originalEvent.touches[0].clientY;
		isSwiping = false;
	})
	.on('touchmove', function (e) {
		const dx = e.originalEvent.touches[0].clientX - touchStartX;
		const dy = e.originalEvent.touches[0].clientY - touchStartY;

		// Якщо горизонтальний свайп більший за вертикальний — блокуємо скрол
		if (Math.abs(dx) > Math.abs(dy)) {
			e.preventDefault(); // блокування вертикального скролу
			isSwiping = true;
		}
	})
	.on('touchend', function (e) {
		if (isSwiping) {
			touchEndX = e.originalEvent.changedTouches[0].clientX;
			handleSwipe();
		}
	});


