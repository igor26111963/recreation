const navigationItems=document.querySelectorAll('.navigation-items');

for(let i=0; i<navigationItems.length; i++) {
   navigationItems[i].addEventListener('click', function() {
      this.classList.toggle('active');
      let navigationItemsList=this.nextElementSibling;
      if(navigationItemsList.style.display) {
         navigationItemsList.style.display = none;
      } else {
         navigationItemsList.style.display = navigationItemsList.block;
      }
   })
}
// console.log(navigationItemsList);