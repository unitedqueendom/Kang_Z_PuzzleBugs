(() => {
	// set up the puzzle pieces and boards
	// buttons ath the bottom of the page

	//const => buttons never change
	const navButtons = document.querySelectorAll("#buttonHolder img"),
		puzzlePiece = document.querySelectorAll('.puzzle-pieces img'),
		dropZones = document.querySelectorAll('.drop-zone'),
		puzzleBoard = document.querySelector('.puzzle-board');
	//store the image names here
	const pieces = ["topLeft", "topRight", "bottomRight", "bottomLeft"];
	//function go here => what we want to have to happen when our triggers fire
	function changeImageSet() {
		//change thumbnail images on the left to match the button image
	pieces.forEach((piece, index) => {
	 puzzlePiece[index].src=`images/${piece + this.dataset.puzzleindex}.jpg`;
	puzzlePiece[index].id=`${piece + this.dataset.puzzleindex}`;
	});
		//change the thumbnail images on the left to match the drop zone container
		//and set a background image on thw drop zone container
		//debugger;
		puzzleBoard.style.backgroundImage = `url(images/background${this.dataset.puzzleindex}.jpg)`;
	}



	function dragStart(event) {
		console.log('started a drag');

		//capture the id of the element were working with
		//like an audio track for example
		event.dataTransfer.setData("text/plain", this.id);
	}

	function allowdragOver(event) {
		if (event.target.tagName=='DIV') {
			event.preventDefault();
    }
		console.log('you dragged something onto me')
	}

	function allowDrop(event) {
		console.log('you dropped something on me')
		let currentPiece = event.dataTransfer.getData("text/plain");
		sourceObj = document.querySelector(`#${currentPiece}`);
		if(event.target.classList.contains('puzzle-pieces')){
			sourceObj.style.width = '40%';
		}
		else {
			sourceObj.style.width = '100%';
		}

		event.target.appendChild(sourceObj);
	}
	//add some event handling for the nav navButtons
	navButtons.forEach(button => button.addEventListener('click', changeImageSet));

	//set up drag event on our puzzle
	puzzlePiece.forEach(piece => piece.addEventListener('dragstart', dragStart));

	//set up the dragover event for our drop zones
	dropZones.forEach(zone =>addEventListener('dragover', allowdragOver));
	dropZones.forEach(zone =>addEventListener('drop', allowDrop));

	//call, apply and bind are different ways to invoke functions
	//you should know what call does --> research in on MDN
	changeImageSet.call(navButtons[0]);
})();
