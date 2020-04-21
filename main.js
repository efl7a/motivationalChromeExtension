// const prime = document.getElementById('primary');
// const parent = prime.parentNode;
//
// const widthOfPrime = prime.offsetWidth;
//
// const picLoc = chrome.runtime.getURL("images/motivational.png");
// const myImg = new Image(widthOfPrime);
// myImg.src = picLoc;
// myImg.alt = "Coming soon";
//
// prime.parentNode.removeChild(prime);
// parent.appendChild(myImg);

// prime.innerHTML = '<img id="motivate" src="images/motivational.png" alt="Coming Soon" />';

const prime = $('#primary');
const parent = prime.parent();
const widthOfPrime = prime.innerWidth();


const picLoc = chrome.runtime.getURL("resources/images/motivational.png");
const myImg = new Image(widthOfPrime * .75);
myImg.src = picLoc;
myImg.alt = "Coming soon";

prime.remove();
parent.prepend(myImg);
setTimeout(() => {
  myImg.remove();
  parent.prepend(prime);
}, 5000);
