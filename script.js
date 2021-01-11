let cardOne = document.getElementById('cardOne');
let cardTwo = document.getElementById('cardTwo');
let cardThree = document.getElementById('cardThree');
let cardFour = document.getElementById('cardFour');
let displayOne = document.getElementById('displayOne');
let displayTwo = document.getElementById('displayTwo');
let displayThree = document.getElementById('displayThree');
let displayFour = document.getElementById('displayFour');


cardOne.addEventListener('click', showOne);

function showOne()
{
    displayOne.style.display = "block";
    displayTwo.style.display = "none";
    displayThree.style.display = "none";
    displayFour.style.display = "none";
}

cardTwo.addEventListener('click', showTwo);

function showTwo()
{
    displayOne.style.display = "none";
    displayTwo.style.display = "block";
    displayThree.style.display = "none";
    displayFour.style.display = "none";
}

cardThree.addEventListener('click', showThree);

function showThree()
{
    displayOne.style.display = "none";
    displayTwo.style.display = "none";
    displayThree.style.display = "block";
    displayFour.style.display = "none";
}

cardFour.addEventListener('click', showFour);

function showFour()
{
    displayOne.style.display = "none";
    displayTwo.style.display = "none";
    displayThree.style.display = "none";
    displayFour.style.display = "block";
}

let continueFormButton = document.getElementById('continueForm');
let formTest = document.getElementById('formTest');
let divOne = formTest.getElementsByClassName('contact-form-first')[0];
let divTwo = formTest.getElementsByClassName('contact-form-seccond')[0];
let divThree = formTest.getElementsByClassName('contact-form-third')[0];
let reverseForm = document.getElementById('reverseContinueForm');
let submitFormButton = document.getElementById('submitFormButton');

formTest.addEventListener('submit', noSubmit);

function noSubmit(e)
{
    e.preventDefault();
}

continueFormButton.addEventListener('click', continueForm);

function continueForm()
{
    divOne.style.display = "none";
    divTwo.style.display = "block";
    continueFormButton.removeEventListener('click', continueForm);
    reverseForm.addEventListener('click', reverseFormFunction);
    submitFormButton.addEventListener('click', finishForm);
}

function reverseFormFunction()
{
    divTwo.style.display = "none";
    divOne.style.display = "grid";
    reverseForm.removeEventListener('click', reverseFormFunction);
    continueFormButton.addEventListener('click', continueForm);
}

function finishForm()
{
    divTwo.style.display = "none";
    divThree.style.display = "flex";
}
