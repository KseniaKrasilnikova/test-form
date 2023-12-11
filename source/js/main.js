import {initBurger} from './modules/init-burger-action';
import {initSelect} from './modules/init-custom-select';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // Modules
  // ---------------------------------
  window.addEventListener('load', () => {
    initBurger();
    initSelect();
  });
});

// ---------------------------------
