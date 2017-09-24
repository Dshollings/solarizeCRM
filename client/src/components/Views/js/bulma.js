import "jquery"
(function() {
    var burger = document.querySelector('.nav-toggle');
    var menu = document.querySelector('.nav-menu');
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})();

$(".modal-open").click(function() {
  $(".modal").addClass("is-active");  
});

$(".delete").click(function() {
   $(".modal").removeClass("is-active");
});

$("#cancel").click(function() {
   $(".modal").removeClass("is-active");
});

$(".modal-close").click(function() {
   $(".modal").removeClass("is-active");
});

// $("#costs").click(function() {
//   $(".modal").addClass("is-active");  
// });