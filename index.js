//Section 1
let hamBurger = document.querySelector('.ham-burger');
let toggleLinks = document.querySelector('.nav-links');

hamBurger.addEventListener('click', () => {
	toggleLinks.classList.add('hide-burger');

	// toggleLinks.display = toggleLinks.display === 'none' ? 'block' : 'none';
});

//Section 2

let toggleTexts = document.querySelectorAll('.toggleText');
let toggleDivs = document.querySelectorAll('.feat-toggle-div');
let toggleImgs = document.querySelector('.toggle-img');

let toggleTextsFunc = () => {
	toggleTexts.forEach((toggleText, i) => {
		toggleTexts[0].addEventListener('click', () => {
			toggleTexts[0].lastElementChild.classList.add('hide-span');
			toggleTexts[1].lastElementChild.classList.remove('hide-span');
			toggleTexts[2].lastElementChild.classList.remove('hide-span');
		});
		toggleTexts[1].addEventListener('click', () => {
			toggleTexts[0].lastElementChild.classList.remove('hide-span');
			toggleTexts[1].lastElementChild.classList.add('hide-span');
			toggleTexts[2].lastElementChild.classList.remove('hide-span');
		});
		toggleTexts[2].addEventListener('click', () => {
			toggleTexts[0].lastElementChild.classList.remove('hide-span');
			toggleTexts[1].lastElementChild.classList.remove('hide-span');
			toggleTexts[2].lastElementChild.classList.add('hide-span');
		});
	});
};
toggleTextsFunc();

let toggleDivsFunc = () => {
	toggleDivs.forEach((toggleDiv, j) => {
		toggleTexts[0].addEventListener('click', () => {
			toggleDivs[0].classList.remove('inactive');
			toggleDivs[1].classList.add('inactive');
			toggleDivs[2].classList.add('inactive');

			toggleDivs[0].firstElementChild.classList.remove('inactive');
			toggleDivs[1].firstElementChild.classList.add('inactive');
			toggleDivs[2].firstElementChild.classList.add('inactive');

			toggleDivs[0].lastElementChild.classList.remove('inactive');
			toggleDivs[1].lastElementChild.classList.add('inactive');
			toggleDivs[2].lastElementChild.classList.add('inactive');
		});

		toggleTexts[1].addEventListener('click', () => {
			toggleDivs[0].classList.add('inactive');
			toggleDivs[1].classList.remove('inactive');
			toggleDivs[2].classList.add('inactive');

			toggleDivs[0].firstElementChild.classList.add('inactive');
			toggleDivs[1].firstElementChild.classList.remove('inactive');
			toggleDivs[2].firstElementChild.classList.add('inactive');

			toggleDivs[0].lastElementChild.classList.add('inactive');
			toggleDivs[1].lastElementChild.classList.remove('inactive');
			toggleDivs[2].lastElementChild.classList.add('inactive');
		});

		toggleTexts[2].addEventListener('click', () => {
			toggleDivs[0].classList.add('inactive');
			toggleDivs[1].classList.add('inactive');
			toggleDivs[2].classList.remove('inactive');

			toggleDivs[0].firstElementChild.classList.add('inactive');
			toggleDivs[1].firstElementChild.classList.add('inactive');
			toggleDivs[2].firstElementChild.classList.remove('inactive');

			toggleDivs[0].lastElementChild.classList.add('inactive');
			toggleDivs[1].lastElementChild.classList.add('inactive');
			toggleDivs[2].lastElementChild.classList.remove('inactive');
		});
	});
};
toggleDivsFunc();

//Section 4

let changeHeads = document.querySelectorAll('.head');
let changeArrows = document.querySelectorAll('.first-arrow');

let myArrows = () => {
	changeArrows.forEach((changeArrow, i) => {
		changeHeads[i].addEventListener('click', () => {
			changeArrows[i].classList.toggle('turn-arrow');
		});
	});
};
setTimeout(myArrows, 500);

changeHeads.forEach((changeHead, i) => {
	changeHead.addEventListener('click', () => {
		changeHead.nextElementSibling.classList.toggle('myHead');
	});
});

//Section 5

let blueButton = document.querySelector('.contactBtn');
let input = document.querySelector('input');
let errorMsg = document.querySelector('.invalid');

let isEmailValid = (e) => {
	e.preventDefault();
	if (input.validity.valid) {
		input.style.borderColor = 'green';
		errorMsg.style.display = 'none';
	} else if (e.target.value === '') {
		input.style.borderColor = 'hsl(0, 94%, 66%)';
		errorMsg.style.display = 'block';
	} else {
		input.style.borderColor = 'hsl(0, 94%, 66%)';
		errorMsg.style.display = 'block';
	}
};
blueButton.addEventListener('click', isEmailValid);
