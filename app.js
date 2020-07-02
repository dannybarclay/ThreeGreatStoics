const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navA = document.querySelector(".nav-links a");
    const navLinks = document.querySelectorAll(".nav-links li");

    //Toggle the navigation in!// 
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

     

    //Animates the links in and out...//
    navLinks.forEach((link, index)=>{
        if (link.style.animation) {
            link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + .3}s`;  
        }
    });
    
 });


}

navSlide();