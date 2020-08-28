// Navbar item
const navBtns = document.querySelectorAll(".navbar .navbar-nav .nav-item .nav-link");
// Tab heading
const tabHeading = document.querySelectorAll(".services-section .tab .tabs-heading");
// Tab body
const tabBody = document.querySelectorAll(".services-section .tab .tabs-desc");
// Ta Icon
const tabIcon = document.querySelector(".services-section .tab .tabs-heading i");
let  i;

// Add Active Class in Navbar item
console.log(navBtns)
navBtns.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.add("active");
    e.classList.remove("active");
  })
})

// When I click On Tab Heading Tab Body Will Show
tabHeading.forEach(function(tab, tab_index){
  tab.addEventListener("click", function() {

      tabHeading.forEach(function(tab) {
        tab.classList.remove("active");
      });

    tab.classList.add("active");

    tabBody.forEach(function(content, content_index) {
      if(content_index === tab_index){
        /* content.style.display = "block"; */
        content.classList.add("active");
      }else {
        /* content.style.display = "none"; */
        content.classList.remove("active");
      }
    });

  })
});
