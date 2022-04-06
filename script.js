const popUpModal = document.getElementById('popUpModal');
const popUp = document.querySelectorAll('.popUp');
const closePopUp = document.getElementById('closePopUp');
const modal = document.getElementById('modal');
const btn = document.getElementById('modal-btn');
const closeModal = document.getElementById('closeModal');
const modalLink = document.querySelectorAll('.modalLink');
const form = document.querySelector('form');
const invalid = document.querySelector('.invalid');

const data = {
  project1: {
    title: 'Profesional Art Printing Data',
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    lang: ['<li class="pop-up__languages--item">html</li>',
      '<li class="pop-up__languages--item">Bootstrap</li>',
      '<li class="pop-up__languages--item">Ruby</li>'],
    image: './img/project1.jpg',
  },
  project2: {
    title: 'Data Dashboard Healthcare',
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s.",
    lang: ['<li class="pop-up__languages--item">html</li>',
      '<li class="pop-up__languages--item">Bootstrap</li>',
      '<li class="pop-up__languages--item">Ruby</li>'],
    image: './img/project2.jpg',
  },
  project3: {
    title: 'Website Protfolio',
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    lang: ['<li class="pop-up__languages--item">html</li>',
      '<li class="pop-up__languages--item">Bootstrap</li>',
      '<li class="pop-up__languages--item">Ruby</li>'],
    image: './img/project3.jpg',
  },
  project4: {
    title: 'Profesional Art Printing Data More',
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard, no accounts or sign-ups.",
    lang: ['<li class="pop-up__languages--item">html</li>',
      '<li class="pop-up__languages--item">Bootstrap</li>',
      '<li class="pop-up__languages--item">Ruby</li>'],
    image: './img/project4.jpg',
  },
  project5: {
    title: 'Data Dashboard Healthcare',
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    lang: ['<li class="pop-up__languages--item">html</li>',
      '<li class="pop-up__languages--item">Bootstrap</li>',
      '<li class="pop-up__languages--item">Ruby</li>'],
    image: './img/project5.jpg',
  },
  project6: {
    title: 'Website Protfolio',
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    lang: '<li class="pop-up__languages--item">html</li><li class="pop-up__languages--item">Bootstrap</li><li class="pop-up__languages--item">Ruby</li>',
    image: './img/project6.jpg',
  },
};

const story = {
  title: 'Multi-Post Stories',
  text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  lang: ['<li class="pop-up__languages--item">css</li>',
    '<li class="pop-up__languages--item">html</li>',
    '<li class="pop-up__languages--item">bootstrap</li>',
    '<li class="pop-up__languages--item">Ruby</li>'],
  image: './img/portfolio.jpg',
};

const mainProjectsContainer = document.querySelector('.works');
mainProjectsContainer.innerHTML = `<div class="works-stories">
<div class="works-stories__heading--container">
<h2 class="works-stories__heading">${story.title}</h2>
<img src="./img/line.jpg" alt="horizontal line" />
</div>
<div class="works-stories__photo">
<img
class="works-stories__photo--img"
src=${story.image} alt=""/>
</div>
<div class="right">
<div class="works-stories__story">
<h3 class="works-stories__story--heading">Multi-Post Stories</h3>
<p class="works-stories__story--paragraph">${story.text}</p>
</div>
<ul class="works-stories__languages">
<li class="works-stories__languages--item">css</li>
<li class="works-stories__languages--item">html</li>
<li class="works-stories__languages--item">bootstrap</li>
<li class="works-stories__languages--item">Ruby</li>
</ul>

<div class="works-stories__btn">
<a href="#" class="works-stories__btn--link popp" id="popUp1">See Project</a>
</div>
</div>
</div>`;

const keys = Object.keys(data);
keys.forEach((key) => {
  if (key) {
    mainProjectsContainer.innerHTML += `
<div class="works-project works-${[key]}">
<h3 class="works-project__heading">${data[key].title}</h3>
<p class="works-project__paragraph">
${data[key].text}
</p>
<ul class="works-project__languages">
<li class="works-project__languages--item">html</li>
<li class="works-project__languages--item">Bootstrap</li>
<li class="works-project__languages--item">Ruby</li>
</ul>
<div class="works-project__btn">
<a href="#" class="btn popUp" id="${key}">"See Project</a>
</div>
</div>
`;
  }
});

btn.onclick = function () {
  modal.style.display = 'block';
};

closeModal.onclick = function (event) {
  if (event.target) {
    modal.style.display = 'none';
  }
};

modalLink.forEach((element) => {
  element.onclick = function (event) {
    if (event.target) {
      modal.style.display = 'none';
    }
  };
});

/// //// Popup window ///////

popUp.forEach((element) => {
  element.onclick = function (event) {
    if (event.target) {
      popUpModal.style.display = 'block';
      const uniqId = event.target.id;
      document.querySelector('.pop-up__heading').innerHTML = data[uniqId].title;
      document.querySelector('.pop-up__paragraph').innerHTML = data[uniqId].text;
      document.querySelector('.pop-up__languages').innerHTML = data[uniqId].lang;
      document.querySelector('.popUpImage').setAttribute('src', data[uniqId].image);
    }
  };
});

document.getElementById('popUp1').onclick = function (event) {
  if (event.target) {
    popUpModal.style.display = 'block';
    document.querySelector('.pop-up__heading').innerHTML = story.title;
    document.querySelector('.pop-up__paragraph').innerHTML = story.text;
    document.querySelector('.pop-up__languages').innerHTML = story.lang;
    document.querySelector('.popUpImage').setAttribute('src', story.image);
  }
};

closePopUp.onclick = function (event) {
  if (event.target) {
    popUpModal.style.display = 'none';
  }
};

const email = document.querySelector('.email');

form.addEventListener('submit', (event) => {
  const val = email.value;
  if (val !== val.toLowerCase()) {
    event.preventDefault();
    invalid.style.display = 'block';
  }
});

email.onclick = (e) => {
  if (e.target) {
    invalid.style.display = 'none';
  }
};

// Local Storage
const nameInput = document.querySelector('.name');
const emailInput = document.querySelector('.email');
const messageInput = document.querySelector('.message');

