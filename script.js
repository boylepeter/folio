const contentBox = document.getElementById('contentBox');
const aboutContent = document.querySelectorAll(".about");
const contactContent = document.querySelectorAll(".contact");
const closeContentBtn = document.getElementById("closeContent");

const populateAbout = () => {
    contentBox.classList.remove('hide');
    aboutContent.forEach((element)=>{
        element.classList.remove('hide');
    });
};

const populateContact = () => {
    contentBox.classList.remove('hide');
    contactContent.forEach((element)=>{
        element.classList.remove('hide');
    });
};

const closeContentBox = () => {
    contentBox.classList.add('hide');
    aboutContent.forEach((element)=>{
        element.classList.add('hide');
    });
    contactContent.forEach((element)=>{
        element.classList.add('hide');
    });
};