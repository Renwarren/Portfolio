
// /* CLICK THE SLIDER/

var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var activex = document.getElementById("activex");
var image = document.getElementById("about_img");

const software_skills = ["HTML","CSS","Javascript","React Js",
"Bootstrap","Python","Django","Java","Spring","SQL"];

const DATA_skills = ["Web Scraping","Data Cleansing","Machine Learning","Python",
"R","Tableau","Data Visualization","Spreadsheets","SQL","Git"];

var profession = document.getElementById("profession");

var skills = document.querySelectorAll(".skill-item");

line1.onclick = function(){
    activex.style.left = '0px';
    profession.innerHTML = "Software Engineer";
    image.src = "assets/images/undraw_programming_re_kg9v.svg";
    for(i = 0; i<software_skills.length; i++){
        skills[i].innerHTML = software_skills[i];
    }
}

line2.onclick = function(){
    activex.style.left = '100px';
    profession.innerHTML = "Data Scientist";
    image.src = "assets/images/undraw_charts_re_5qe9.svg";
    for(i = 0; i<DATA_skills.length; i++){
        skills[i].innerHTML = DATA_skills[i];
    }
}


/* Toggle Navbar*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click",()=>{
    hideSection();
    toggleNavBar();
    document.body.classList.toggle("hide-scrolling");
});

function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavBar(){
    document.querySelector(".header").classList.toggle("active")
}


/*ACTIVE SECTION*/
document.addEventListener("click",(e)=>{
     if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        navToggler.classList.add("hide");
     
     if(e.target.classList.contains("nav-item")){
         toggleNavBar();
     }
     else{
         hideSection();
         document.body.classList.add("hide-scrolling");
     }
     setTimeout(() => {
         document.querySelector("section.active").classList.remove("active","fade-out");
         document.querySelector(e.target.hash).classList.add("active");
         window.scrollTo(0,0);
         document.body.classList.remove("hide-scrolling");
         navToggler.classList.remove("hide");
     },500);
    }
});


/* ----------------- About Tabs -------------- */
const tabsContainer = document.querySelector(".about-tabs");
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click",(e) =>{
    if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active")
    }
});

/* -------------------PORTFOLIO ITEM DETAILS POPUP ------------------------------*/

document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("view-project-btn")){
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement);
    }
})


// Hide Popup when clicking outside of it
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
    }
})


function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click",togglePortfolioPopup);

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML = portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}
