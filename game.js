var computerChoice = Math.floor(Math.random() * 3);

function leftVal() {
	if(computerChoice === 0) {
		kleft.style.display = 'block';
	} else {
		noppl.style.display = 'block';
	}
	
}

function mittVal() {
	if(computerChoice === 1) {
		kmitt.style.display = 'block';
	} else {
		noppm.style.display = 'block';
	}

}

function rightVal() {
	if(computerChoice === 2) {
		kright.style.display = 'block';
	} else {
		noppr.style.display = 'block';
	}
	
}
	
function resetBtn() {
	location.reload(); 
}