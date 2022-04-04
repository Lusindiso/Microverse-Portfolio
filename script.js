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