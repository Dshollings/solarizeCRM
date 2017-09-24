import $ from "jquery"

$("#sentmail_submit").on("click", function() {
  console.log("clicked");

  // var itemurl;
  var newLead = {
    first_name: $("#first_name").val().trim(),
    last_name: $("#last_name").val().trim(),
    email: $("#email").val().trim(),
    phone: $("#phone").val().trim(),
    state: $("#state").val().trim(),
    contacted: false,
    converted: false,
    address: $("#streetAddress").val().trim(),
    city: $("#city").val().trim(),
    state: $("#state").val().trim(),
    zip: $("#zip").val().trim()
  };
  console.log(newLead);

  $.post("/api/leads", newLead)
    .done(function(data) {
      console.log(data);
      console.log("--------------------Lead id: " + data.id);
    });
});

// function(){
//   var burger = document.querySelector('.nav-toggle');
//   var menu = document.querySelector('.nav-menu');
//   burger.addEventListener('click', function() {
//     burger.classList.toggle('is-active');
//     menu.classList.toggle('is-active');
//   });
// };

$("#showModal").click(function() {
  console.log("Modal Clicked")
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