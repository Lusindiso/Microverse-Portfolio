let modal = document.getElementById("modal");

let btn = document.getElementById("modal-btn");

let closeModal = document.getElementById("closeModal");

let modalLink = document.querySelectorAll(".modalLink")

btn.onclick = function() {
  modal.style.display = "block";
}

closeModal.onclick = function(event) {
  if (event.target) {
    modal.style.display = "none";
  }
}

modalLink.forEach(element => {
	element.onclick = function(event) {
		if (event.target) {
			modal.style.display = "none";
		}
	}
}); 

/////// Popup window ///////


let popUpModal = document.getElementById('popUpModal')
let popUp = document.querySelectorAll('.popUp')
let closePopUp = document.getElementById('closePopUp')


popUp.forEach(element => {
	element.onclick = function(event) {
		if (event.target) {
			popUpModal.style.display = "block";
	
		}
		
	}
}); 

closePopUp.onclick = function(event) {
  if (event.target) {
    popUpModal.style.display = "none";
  }
}
