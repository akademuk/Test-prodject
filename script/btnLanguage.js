var buttons = document.querySelectorAll(".btn-language");

for (var button of buttons) {
   button.addEventListener('click', function () {
     buttons.forEach(i => i.classList.remove('active'));
   
     this.classList.toggle('active');
   });
};