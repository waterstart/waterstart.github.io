document.addEventListener('DOMContentLoaded', function() {


const testthing = document.getElementById('myElement');
const fulldate = new Date().toDateString();

console.log(fulldate);

testthing.innerText=fulldate;

});