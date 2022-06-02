import { goingMenu } from "./menu";
import { home } from "./home";

const container = document.querySelector('#content');

//header
const header = document.createElement('header');
container.appendChild(header);

//title name
const titleName = document.createElement('h1');
titleName.innerText = "Big Big Pan";
header.appendChild(titleName);

//nav-bar
const nav = document.createElement('nav');
header.appendChild(nav);

const navList = document.createElement('ul');
nav.appendChild(navList);

const navItem1 = document.createElement('li');
navItem1.innerText = "Home";
navList.appendChild(navItem1);

const navItem2 = document.createElement('li');
navItem2.innerText = "Menu";
navList.appendChild(navItem2);

home();
goingMenu();
  

const navItems = document.querySelectorAll('li');
navItems.forEach(tab=>tab.addEventListener('click',changeTab));

const tabContent = document.querySelectorAll('.tabContent');

tabContent.forEach(tab=>tab.style.display = "none");
document.getElementById('Home').style.display = "block"

function changeTab(e) {
    tabContent.forEach(tab=>tab.style.display = "none");
    document.getElementById(this.innerText).style.display = "block";
}