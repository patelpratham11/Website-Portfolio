
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});
const hiddenItems = document.querySelectorAll('.hidden');
hiddenItems.forEach((el) => observer.observe(el));


const newobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('projShow');
        } 
        else{
            entry.target.classList.remove('projShow');
            // entry.target.classList.add('ProjectChild');
        }
    });
});
const newhiddenItems = document.querySelectorAll('.ProjectChild');
newhiddenItems.forEach((el) => newobserver.observe(el));

const newNewObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('AccomplishmentsShow');
        } else{
            entry.target.classList.remove('AccomplishmentsShow');
        }
    });
});
const newNewHiddenItems = document.querySelectorAll('.AccShow');
newNewHiddenItems.forEach((el) => newNewObserver.observe(el));

//Image stuff
var i = 0; 
var images = [];
var quotes = [];
var time = 3000;

//Images

images[0] = 'images/Post_55_edited.jpg';
images[1] = 'images/Post_52_edited.jpg';
images[2] = 'images/IMG_4084.jpg';
images[3] = 'images/Post_43_edited.jpg';
images[4] = 'images/Post_51_edited.jpg';

quotes[0] = 'Downtown Pittsburgh on a late fall night, 2021. \nTaken on iPhone 11.';
quotes[1] = 'The beautiful Cathy, gem of the University of Pittsburgh. Homecoming night 2021. \nTaken on iPhone 11.';
quotes[2] = 'Southside Pittsburgh near the Sheraton Hotel. Orientation at PNC, summer 2022. \nTaken on iPhone 11.';
quotes[3] = 'Phipps Conservatory during early fall semester 2021. \nTaken on iPhone 11.';
quotes[4] = "Phipps Conservatory's beautiful cacti \nTaken on iPhone 11.";

//Change Images
function changeImage(){
  document.slide.src = images[i];
  document.getElementById("caption").innerHTML = quotes[i];
  if(i < images.length - 1){
    i++;
  } else{
    i = 0;
  }

  setTimeout("changeImage()", time);
}

window.onload = changeImage;


// var imgVals = Array.from(document.querySelectorAll('img'));
        
// if ('IntersectionObserver' in window) {
//     const imageObserver = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const image = entry.target;

//                 // image.src = image.dataset.src;
//                 image.onload = () => image.previousElementSibling.remove();

//                 imageObserver.unobserve(image);
//             }
//         });
//     });

//     imgVals.forEach(img => imageObserver.observe(img));
// }