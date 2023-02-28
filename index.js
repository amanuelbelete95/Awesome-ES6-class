/* eslint-disable max-classes-per-file */
import time from './modules/time.js';

import loadLibraryFromLocalStorage from './modules/onload.js';

import { listClick, handleAddClick, handleContactClick } from './modules/navigator.js';

import {
  add, list, add1, contact,
} from './modules/selector.js';

import populateStorage from './modules/populateStorage.js';

list.addEventListener('click', listClick);
add1.addEventListener('click', handleAddClick);
contact.addEventListener('click', handleContactClick);

add.addEventListener('click', () => {
  populateStorage();
});

loadLibraryFromLocalStorage();
time();