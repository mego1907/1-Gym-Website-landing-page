const tabHeading = document.querySelectorAll(".services-section .tab .tabs-heading");
const tabDesc = document.querySelectorAll(".services-section .tab .tabs-desc");
const tabIcon = document.querySelector(".services-section .tab .tabs-heading i");
let  i;

console.log(tabHeading);
console.log(tabDesc)

/*
function addActive() {

  for (var i = 0; i < tabHeading.length; i++) {
    tabHeading[i].classList.toggle("active")
  }

  for (var i = 0; i < tabDesc.length; i++) {
    tabDesc[i].classList.toggle("active")
  }

}
*/


tabHeading.forEach(function(tab, tab_index){
  tab.addEventListener("click", function() {

      tabHeading.forEach(function(tab) {
        tab.classList.remove("active");
        tabIcon.classList.remove("active")
      });

    tab.classList.add("active");
    tabIcon.classList.add("active")

    tabDesc.forEach(function(content, content_index) {
      if(content_index == tab_index){
        content.style.display = "block";
      }else {
        content.style.display = "none";
      }
    });

  })
});
