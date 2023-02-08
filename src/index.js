import './styles/main.css';

import logo from './assets/logo.jpg';
import landingIMG from './assets/landingimage.jpg';


function loadImages() {
    //LOGOS
    const navLogo = document.getElementById('navLogo');

    navLogo.src = logo;

    //IMAGES

    const landingImage = document.getElementById('landingImage');
    landingImage.src = landingIMG;

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
