'use strict'

window.addEventListener('load',calculateTime)

function calculateTime() {
	let date = new Date();
	let dayNumber = date.getDay();
	let hour = date.getHours();
	let minute = date.getMinutes();
	let ampm = hour >= 12 ? 'PM' : 'AM';
	let dayNames = ['SUN', "MON", 'TUE', "WED", "THU", "FRI", "SAT"];
	hour = hour % 12;
	hour = hour ? hour : '12';
	hour = hour < 10 ? '0' + hour : hour;
	minute = minute < 10 ? '0' + minute: minute;
	document.querySelector('#day').textContent = dayNames[dayNumber];
	document.querySelector('#hour').textContent = hour;
	document.querySelector('#minutes').textContent = minute;
	document.querySelector('#ampm').textContent = ampm;
	setTimeout(calculateTime,200)
}


