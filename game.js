
//------- Datorns val ----------
var computerChoice = Math.random();

console.log(computerChoice);

if (computerChoice < 0.34) {
	var itIsHere = 1;
}

if (computerChoice >= 0.34 && computerChoice < 0.68) {
	var itIsHere = 2;
}

if (computerChoice >= 0.68) {
	var itIsHere = 3;
}


//--------- Jämför datorns val med användaren --------
function leftVal() {
	if(itIsHere === 1) {
		kleft.style.display = 'block';
	} else {
		noppl.style.display = 'block';
	}
	
}

function mittVal() {
	if(itIsHere === 2) {
		kmitt.style.display = 'block';
	} else {
		noppm.style.display = 'block';
	}

}

function rightVal() {
	if(itIsHere === 3) {
		kright.style.display = 'block';
	} else {
		noppr.style.display = 'block';
	}
	
}

//-------- Restet-sidan-knapp ---------
	
	function resetBtn() {
		location.reload(); 
	}