//Import array of motivational photos
import { photos } from './photo.js';

//HTML elements

const motivationalImage = $('#motivationalImage');
const photoInfo = $('#photoInfo');
const photographer = $('#photographer');
const photoInfoContainer = $('.photoInfoContainer');

//Personal image and motivational sayings
const customImg = [
  "resources/images/motivational.png",
  "resources/images/cat.png",
  "resources/images/motivationalwithoutme.png"
];


//Determine whether to use personal or random img and quote
let randomNum = Math.floor(Math.random() * Math.floor(100));
if ( randomNum >= 80) {
  motivationalImage.attr("src", chrome.runtime.getURL(customImg[Math.floor(Math.random() * Math.floor(3))]));
  photoInfoContainer.remove();
} else {
  motivationalImage.attr("src", photos[randomNum].src.landscape);
  photoInfo.attr("href", photos[randomNum].url);
  photographer.text(`Photographer: ${photos[randomNum].photographer} on pexels.com`);
}
