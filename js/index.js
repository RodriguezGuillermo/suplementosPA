const header = document.getElementById('header')

const divLogoName = document.createElement('div');
divLogoName.classList.add('divLogoName');
header.appendChild(divLogoName);

const logo = document.createElement('img');
logo.classList.add('logo');
logo.src = '../images/logo/logo.png'
divLogoName.appendChild(logo);

const title = document.createElement('h1');
title.classList.add('headerTitle');
title.textContent = "Suplementos Punta Alta"
divLogoName.appendChild(title);

const navbar = document.createElement('nav');
navbar.classList.add('navbar');
navbar.id = "navbar";

const proteinNavLink = document.createElement('a');
proteinNavLink.classList.add('proteinNavLink');
proteinNavLink.id = proteinNavLink;
proteinNavLink.textContent = "Proteina"
navbar.appendChild(proteinNavLink);

const creatineNavLink = document.createElement('a');
creatineNavLink.classList.add('creatineNavLink');
creatineNavLink.id = creatineNavLink;
creatineNavLink.textContent = "Creatina"
navbar.appendChild(creatineNavLink);

const aminoNavLink = document.createElement('a');
aminoNavLink.classList.add('aminoNavLink');
aminoNavLink.id = aminoNavLink;
aminoNavLink.textContent = "Aminoacidos"
navbar.appendChild(aminoNavLink);

const collagenNavLink = document.createElement('a');
collagenNavLink.classList.add('collagenNavLink');
collagenNavLink.id = collagenNavLink;
collagenNavLink.textContent = "Colageno"
navbar.appendChild(collagenNavLink);

const bcaaNavLink = document.createElement('a');
bcaaNavLink.classList.add('bcaaNavLink');
bcaaNavLink.id = bcaaNavLink;
bcaaNavLink.textContent = "BCAA"
navbar.appendChild(bcaaNavLink);

const otherNavLink = document.createElement('a');
otherNavLink.classList.add('otherNavLink');
otherNavLink.id = otherNavLink;
otherNavLink.textContent = "otros"
navbar.appendChild(otherNavLink);

//CREAR DESPUES
// const otherDropDown = document.createElement('ul');
// otherDropDown.classList.add('otherDropDown');
// dropdownContent.innerHTML = `
//   <li><a href="#">Opción 1</a></li>
//   <li><a href="#">Opción 2</a></li>
//   <li><a href="#">Opción 3</a></li>
// `;

header.appendChild(navbar);

