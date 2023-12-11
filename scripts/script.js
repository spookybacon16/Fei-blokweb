// JavaScript Document
console.log("hi");

var snow = document.querySelector('#sneeuw');
var snowPattern = document.querySelector('.sneeuwvlokken');

snow.addEventListener("change", function (event) {
    document.body.classList.toggle(event.target.id);
    snowPattern.classList.toggle('show');
});

// ************************************************************************************************************************


var santaAnimation = document.querySelector(".santamove");
var kerstknop = document.querySelector(".kerstmanButton");

kerstknop.addEventListener("click", kerstmanBewegen);

function kerstmanBewegen() {
    santaAnimation.classList.toggle("santamove-bewegen");
}


/* Van docent */
// snel toetsen
document.addEventListener("keydown", controleerToetsen)

function controleerToetsen(event) {
    //    snel toets voor activeren van de kerstman/ santa
    if (event.key == 'k') {
        console.log("toets k ingedrukt")
        kerstmanBewegen()

        //    snel toets voor activeren van de kerstboom
    } else if (event.key == 'b') {
        console.log("toets b ingedrukt")
        growing()
    }
}




// ************************************************************************************************************************

var plant = document.querySelector(".plant")
var kerstpot = document.querySelector(".christmasPot")


kerstpot.addEventListener("click", growing)
function growing() {
    plant.classList.toggle("plant-visable");
}



// ************************************************************************************************************************

// bron: klas genoot
// container van buttons
const macProduct1Buttons = document.querySelectorAll('.product-tile-colors.one button');
const macProduct2Buttons = document.querySelectorAll('.product-tile-colors.two button');
const macProduct3Buttons = document.querySelectorAll('.product-tile-colors.three button');


// foto van de mac
const macbook1 = document.querySelector('.image1');
const macbook2 = document.querySelector('.image2');
const macbook3 = document.querySelector('.image3');



macProduct1Buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index === 0) {
            macbook1.src = './images/lineup/mac13/mac13-spaceg.png';
        } else if (index === 1) {
            macbook1.src = './images/lineup/mac13/mac13-silver.png';
        } else if (index === 2) {
            macbook1.src = './images/lineup/mac13/mac13-rose-default.png';
        }
    });
});


macProduct2Buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index === 0) {
            macbook2.src = './images/lineup/mac15/mac13-15-default.png';
        } else if (index === 1) {
            macbook2.src = './images/lineup/mac15/mac15-gold.png';
        } else if (index === 2) {
            macbook2.src = './images/lineup/mac15/mac15-spaceg.png';
        } else if (index === 3) {
            macbook2.src = './images/lineup/mac15/mac15-silver.png';
        }
    });
});


macProduct3Buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index === 0) {
            macbook3.src = './images/lineup/mac14/mac14-16-default.png';
        } else if (index === 1) {
            macbook3.src = './images/lineup/mac14/mac14-silver.png';
        } else if (index === 2) {
            macbook3.src = './images/lineup/mac14/mac14-spaceg.png';
        }
    });
});

