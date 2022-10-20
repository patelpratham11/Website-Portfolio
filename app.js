
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
        if(entry.target == "Experience"){
            console.log("AYO")
        }
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