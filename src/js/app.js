import * as flsFunctions from "./modules/functions.js"

flsFunctions.isWebp()

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

//==============================================================================================================================================
const allPercents = document.querySelectorAll('[data-percent]')

if(allPercents.length > 0) {
  for (let percent of allPercents) {
    percent.innerHTML = percent.dataset.percent
  }
}