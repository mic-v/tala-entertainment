import './styles/main.css';

import logo from './assets/logo.jpg';
import landingImg from './assets/heroimage.webp';
import flowImg from './assets/FlowG.webp';
import skustaImg from './assets/SkustaClee.webp';
import jroaImg from './assets/JRoa.webp';
import dianaImg from './assets/Diana.PNG';
import alvaroImg from './assets/DJAlvaro.jpg';
import bambooImg from './assets/bambooposter.webp';
import eraserImg from './assets/eraserheadsposter.webp';


function loadImages() {
    //LOGOS
    const navLogo = document.getElementById('navLogo');

    navLogo.src = logo;

    //IMAGES

    const landingImage = document.getElementById('landingImage');
    if(landingImage) landingImage.src = landingImg;

    const skustaImage = document.getElementById('skustaImage');
    if(skustaImage) skustaImage.src = skustaImg;

    const jroaImage = document.getElementById('jroaImage');
    if(jroaImage) jroaImage.src = jroaImg;

    const flowImage = document.getElementById('flowImage');
    if(flowImage) flowImage.src = flowImg;

    const bambooImage = document.getElementById('bambooImage');
    if(bambooImage) bambooImage.src = bambooImg;

    const eraserImage = document.getElementById('eraserImage');
    if(eraserImage) eraserImage.src = eraserImg;
}

window.onscroll = function (event) {
    let scroll = window.pageYOffset;
    const navBar = document.getElementById('navBar');
    if(scroll < 25 && window.innerWidth > 640) {
        if(!navBar.classList.contains('bg-transparent')) {
            navBar.classList.add('bg-transparent');
            navBar.classList.add('md:bg-transparent');
            navBar.classList.remove('bg-slate-800');
            navBar.classList.remove('border-slate-800');
            navBar.classList.remove('border-b');
        }
    } else {
        if(!navBar.classList.contains('bg-slate-800')) {
            navBar.classList.add('bg-slate-900');
            navBar.classList.add('border-slate-800');
            navBar.classList.add('border-b');
            navBar.classList.remove('bg-transparent');
            navBar.classList.remove('md:bg-transparent');
        }
    }
}

function classToggle() {
    const navs = document.getElementById('navlist');
    const socials = document.getElementById('sociallist');
    navs.classList.toggle('flex');
    navs.classList.toggle('hidden');
    socials.classList.toggle('flex');
    socials.classList.toggle('hidden');
}

document.querySelector('#navlist-toggle').addEventListener('click', classToggle);

loadImages();
