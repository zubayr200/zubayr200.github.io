function showMenu(toggle, menu){
    const toggleMenu = document.getElementById(toggle)
    const sideMenu =  document.getElementById(menu);
    if(toggleMenu && sideMenu){
        toggleMenu.addEventListener("click", function(){
            sideMenu.classList.toggle('active-menu')
        })
    }
}
showMenu("header-toggle", "header-menu")


const swiper = new Swiper(".mainscreen_container", {
    loop: true,
    effect: "cube",
    grabCursor:true,
    direction:"horizontal", 
    keyboard: {
        enable:true,
    },
    autoplay: {
         delay: 3500,
         disableOnInteraction: false,
    },
    speed:2000,
    cubeEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier:1,

    },
    cubeEffect: {
        shadow: true,
        slideShadows: false,
        shadowOffset: 20,
        slideShadow: 0,
},   
   navigation: {
        prevEl: ".arrow-left",
        nextEl: ".arrow-right"
    },  
})               