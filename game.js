const computerChoice = Math.floor(Math.random() * 3);

const left = document.getElementById('left');
const mitt = document.getElementById('mitt');
const right = document.getElementById('right');
left.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		leftVal();
	}
});
mitt.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		mittVal();
	}
});
right.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		rightVal();
	}
});

function leftVal() {
	if(computerChoice === 0) {
		kleft.style.display = 'block';
		left.style.backgroundColor = "#21d034"
	} else {
		noppl.style.display = 'block';
		left.style.backgroundColor = "#e61b1b"
	}
	
}

function mittVal() {
	if(computerChoice === 1) {
		kmitt.style.display = 'block';
		mitt.style.backgroundColor = "#21d034"
	} else {
		noppm.style.display = 'block';
		mitt.style.backgroundColor = "#e61b1b"
	}

}

function rightVal() {
	if(computerChoice === 2) {
		kright.style.display = 'block';
		right.style.backgroundColor = "#21d034"
	} else {
		noppr.style.display = 'block';
		right.style.backgroundColor = "#e61b1b"
	}
	
}
	
function resetBtn() {
	location.reload(); 
}