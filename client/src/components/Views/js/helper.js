import $ from "jquery"

const helpers = {
  openModal: function() {
    $(".modal").addClass("is-active");
    console.log("Modal Open");
  },

  closeModal: function() {
    $(".modal").removeClass("is-active");
    console.log("Modal Closed");
  },

  submitLeadForm: function() {
    console.log("clicked");

    let newLead = {
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

    $.post("/api/lead", newLead)
      .done(function(data) {
        console.log(data);
        console.log("--------------------Lead id: " + data.id);
      });
  },

  submitUserForm: function() {
    console.log("clicked");

    let newUser = {
      user_name: $("#inputUsername").val().trim(),
      user_password: $("#inputPassword").val().trim(),
      salt: "456789",
      company_name: $("#inputCompany").val().trim(),
      email: $("#inputEmail").val().trim(),
      phone: $("#inputPhone").val().trim(),
      state: $("#inputState").val().trim(),
    };
    console.log(newUser);

    $.post("/api/user", newUser)
      .done(function(data) {
        console.log(data);
        console.log("--------------------Lead id: " + data.id);
      });
  },


};


// We export the helpers function
export default helpers;














// $("#sentmail_submit").on("click", function() {
//   console.log("clicked");

//   // var itemurl;
//   var newLead = {
//     first_name: $("#first_name").val().trim(),
//     last_name: $("#last_name").val().trim(),
//     email: $("#email").val().trim(),
//     phone: $("#phone").val().trim(),
//     state: $("#state").val().trim(),
//     contacted: false,
//     converted: false,
//     address: $("#streetAddress").val().trim(),
//     city: $("#city").val().trim(),
//     state: $("#state").val().trim(),
//     zip: $("#zip").val().trim()
//   };
//   console.log(newLead);

//   $.post("/api/leads", newLead)
//     .done(function(data) {
//       console.log(data);
//       console.log("--------------------Lead id: " + data.id);
//     });
// });

// function(){
//   var burger = document.querySelector('.nav-toggle');
//   var menu = document.querySelector('.nav-menu');
//   burger.addEventListener('click', function() {
//     burger.classList.toggle('is-active');
//     menu.classList.toggle('is-active');
//   });
// };

// $("#showModal").click(function() {
//   console.log("Modal Clicked")
//   $(".modal").addClass("is-active");
// });

// $(".delete").click(function() {
//   $(".modal").removeClass("is-active");
// });

// $("#cancel").click(function() {
//   $(".modal").removeClass("is-active");
// });

// $(".modal-close").click(function() {
//   $(".modal").removeClass("is-active");
// });