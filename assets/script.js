/** @format */

const aerin = document.querySelector('.aerin');
const rock = document.querySelector('.rock');
const score = document.querySelector('.score');

const jump = () => {
	aerin.classList.add('jump');

	setTimeout(() => {
		aerin.classList.remove('jump');
	}, 500);
};

const loop = setInterval(() => {
	const rockPosition = rock.offsetLeft;
	const aerinPosition = +window
		.getComputedStyle(aerin)
		.bottom.replace('px', '');

	if (rockPosition <= 70 && rockPosition > 0 && aerinPosition < 26) {
		rock.style.animation = 'none';
		rock.style.left = `${rockPosition}px`;

		aerin.style.animation = 'none';
		aerin.style.bottom = `${aerinPosition}px`;
		aerin.src = './assets/img/aerin-die.png';
		aerin.style.width = '6vmax';
		aerin.style.marginLeft = '30px';
		aerin.style.marginBottom = '20px';
		aerin.style.zIndex = '9';

		console.log(loop);

		clearInterval(loop);
	}
}, 10);

document.addEventListener('keydown', jump);
