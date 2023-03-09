let headerNavMenu = document.querySelector('.nav__menu');
let headerNavLine = document.querySelector('.nav__line');
let headerList = document.querySelector('.list');
let headerSearch = document.querySelector('.header__search');


headerNavLine.addEventListener('click', function (e) {
   this.classList.toggle('active');
   headerList.classList.toggle('active');
   headerSearch.classList.toggle('active');
   headerNavMenu.classList.toggle('active');
})