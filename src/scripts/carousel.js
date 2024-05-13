import {CarouselImgArr} from '../dummy/dummyData.js';

const carousel = () => {
    const carouselWrap = document.querySelector(".carousel_banner_lists");

    CarouselImgArr.forEach(imgArr => {
        carouselWrap.innerHTML += `
            <li class="carousel_banner_list">
                <a href="#" class="carousel_link scale_hidden">
                <img class="img_scale_transition"
                    src=${imgArr.img} alt=${imgArr.alt}>
                </a>
            </li>
        `; 
    })
};
carousel();