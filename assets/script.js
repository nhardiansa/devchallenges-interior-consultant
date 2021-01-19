const hamburger = document.querySelector("nav .menu-icon");
const navigation = document.querySelector("nav .menu");
const closeMenu = document.querySelector("nav .menu span")

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("show")
    console.log("hi");
    
})

closeMenu.addEventListener("click", () => {
    navigation.classList.toggle("show")
    console.log("ho");
    
})
