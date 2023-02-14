import './styles/main.css';

import logo from './assets/logo.jpg';
import landingImg from './assets/heroimage.JPG';
import flowImg from './assets/FlowG.PNG';
import skustaImg from './assets/SkustaClee.PNG';
import jroaImg from './assets/JRoa.PNG';
import dianaImg from './assets/Diana.PNG';
import alvaroImg from './assets/DJAlvaro.jpg';
import bambooImg from './assets/bambooposter.jpg';


function loadImages() {
    //LOGOS
    const navLogo = document.getElementById('navLogo');

    navLogo.src = logo;

    //IMAGES

    const landingImage = document.getElementById('landingImage');
    landingImage.src = landingImg;

    const skustaImage = document.getElementById('skustaImage');
    skustaImage.src = skustaImg;

    const jroaImage = document.getElementById('jroaImage');
    jroaImage.src = jroaImg;

    const flowImage = document.getElementById('flowImage');
    flowImage.src = flowImg;

}

window.onscroll = function (event) {
    let scroll = window.pageYOffset;
    const navBar = document.getElementById('navBar');
    if(scroll < 25) {
        if(!navBar.classList.contains('bg-transparent')) {
            navBar.classList.add('bg-transparent');
            navBar.classList.remove('bg-slate-900');
        }
    } else {
        if(!navBar.classList.contains('bg-slate-900')) {
            navBar.classList.add('bg-slate-900');
            navBar.classList.remove('bg-transparent');
        }
    }
}

loadImages();
