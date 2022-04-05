const data = {
	story: {
		title: "Multi-Post Stories",
		text:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
		lang: ['<li class="pop-up__languages--item">css</li>',
		'<li class="pop-up__languages--item">html</li>',
		'<li class="pop-up__languages--item">bootstrap</li>',
		'<li class="pop-up__languages--item">Ruby</li>'],
		image: "./img/portfolio.jpg"
	},
	project1: {
		title: "Profesional Art Printing Data",
		text:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
		lang: ['<li class="pop-up__languages--item">html</li>',
		'<li class="pop-up__languages--item">Bootstrap</li>',
		'<li class="pop-up__languages--item">Ruby</li>'],
		image: "./img/project-1.jpg"
	},
	project2: {
		title: "Data Dashboard Healthcare",
		text:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
		lang: ['<li class="pop-up__languages--item">html</li>',
		'<li class="pop-up__languages--item">Bootstrap</li>',
		'<li class="pop-up__languages--item">Ruby</li>'],
		image: "./img/project-2.jpg"
	},
	project3: {
		title: "Website Protfolio",
		text:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
		lang: ['<li class="pop-up__languages--item">html</li>',
		'<li class="pop-up__languages--item">Bootstrap</li>',
		'<li class="pop-up__languages--item">Ruby</li>'],
		image: "./img/project-3.jpg"
	},
	project4: {
		title: "Profesional Art Printing Data More",
		text:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
		lang: ['<li class="pop-up__languages--item">html</li>',
		'<li class="pop-up__languages--item">Bootstrap</li>',
		'<li class="pop-up__languages--item">Ruby</li>'],
		image: "./img/project-4.jpg"
	},
	project5: {
		title: "Data Dashboard Healthcare",
		text:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
		lang: ['<li class="pop-up__languages--item">html</li>',
		'<li class="pop-up__languages--item">Bootstrap</li>',
		'<li class="pop-up__languages--item">Ruby</li>'],
		image: "./img/project-5.jpg"
	},
	project6: {
		title: "Website Protfolio",
		text:"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
		lang: ['<li class="pop-up__languages--item">html</li>',
		'<li class="pop-up__languages--item">Bootstrap</li>',
		'<li class="pop-up__languages--item">Ruby</li>'],
		image: "./img/project-6.jpg"
	}
}


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
			let uniqId= event.target.id;
			document.querySelector('.pop-up__heading').innerHTML = data[uniqId].title;
			document.querySelector('.pop-up__paragraph').innerHTML = data[uniqId].text;
			document.querySelector('.pop-up__languages').innerHTML = data[uniqId].lang;
			document.querySelector('.popUpImage').setAttribute('src', data[uniqId].image)
		}
		
	}
}); 

closePopUp.onclick = function(event) {
  if (event.target) {
    popUpModal.style.display = "none";
  }
}
