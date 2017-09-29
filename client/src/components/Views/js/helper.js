import $ from "jquery"
import axios from "axios";

const helpers = {
  openModal: function() {
    $("#modal1").addClass("is-active");
    console.log("Modal Open");
  },

  closeModal: function() {
    $(".modal").removeClass("is-active");
    console.log("Modal Closed");
  },

  populateLeadTable1: function() {
    $.ajax({ url: "/api/lead", method: "GET" })
        .done(function(userData) {
            console.log(userData);
            var userArray = userData;

            var userList = $('#table1');
            userArray.forEach(function(leads) {
                console.log(leads);
                var userRow = $("<tr>");
                userRow.append("<td>" + leads.first_name + " " + leads.last_name + "</td>");
                userRow.append("<td>" + leads.email + "</td>");
                userRow.append("<td>" + leads.phone + "</td>");
                userRow.append("<td>" + leads.address + "</td>");
                userRow.append("<td>" + leads.city + "</td>");
                userRow.append("<td>" + leads.state + "</td>");
                userRow.append("<td>" + leads.zip + "</td>");
                userList.append(userRow);
            });

        });
  },

  populateLeadTable2: function() {
      $("#submitstate").click(function() {
        $('#table2 tbody').remove();

        $.ajax({ url: "/api/lead", method: "GET" })
            .done(function(userData) {
                console.log(userData);
                var userArray = userData;
                var e = $("#statelist").val();
                console.log(e);

                var userList = $('#table2');
                userArray.forEach(function(leads) {
                    console.log(leads);
                    var userRow = $("<tr>");
                    if (e === leads.state) {
                        userRow.append("<td>" + leads.first_name + " " + leads.last_name + "</td>");
                        userRow.append("<td>" + leads.email + "</td>");
                        userRow.append("<td>" + leads.phone + "</td>");
                        userRow.append("<td>" + leads.address + "</td>");
                        userRow.append("<td>" + leads.city + "</td>");
                        userRow.append("<td>" + leads.state + "</td>");
                        userRow.append("<td>" + leads.zip + "</td>");
                        userList.append(userRow);
                    }
                });
            });
    });
  },

  populateUserTable: function() {

    $.ajax({ url: "/api/user", method: "GET" })
    .done(function(userData) {
        console.log(userData);
        var userArray = userData;

        var userList = $('#table1');
        userArray.forEach(function(user) {
            console.log(user);
            var userRow = $("<tr>");
            userRow.append("<td>"+ user.id +"</td>");
            userRow.append("<td>"+ user.user_name +"</td>");
            userRow.append("<td>"+ user.state +"</td>");
            userRow.append("<td>"+ user.email +"</td>");
            userRow.append("<td>"+ user.phone +"</td>");
            userRow.append("<td>" +"</td>");
            userRow.append("<td>"+ "</td>");
            userRow.append("<td>" +"</td>");
            userList.append(userRow);
        });
    });

  },

  populateTable2: function() {
    $("#submitstate").click(function() {
      $('#table2').find("tr:gt(0)").remove();
      $.ajax({ url: "/api/lead", method: "GET" })
        .done(function(userData) {
          console.log(userData);
          var userArray = userData;
          var e = $("#statelist").val();
          console.log(e);
          var userList = $('#table2');
          userArray.forEach(function(leads) {
          console.log(leads);
          var userRow = $("<tr>");
          if (e === leads.state) {
              userRow.append("<td>" + leads.first_name + " " + leads.last_name + "</td>");
              userRow.append("<td>" + leads.phone + "</td>");
              userRow.append("<td>" + leads.address + " " + leads.city + "</td>");
              userList.append(userRow);
          }
        });
      });
    });
  },

  sortTable1: function(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("table1");
        switching = true;
        //Set the sorting direction to ascending:
        dir = "asc";
        /*Make a loop that will continue until
        no switching has been done:*/
        while (switching) {
            //start by saying: no switching is done:
            switching = false;
            rows = table.getElementsByTagName("TR");
            /*Loop through all table rows (except the
            first, which contains table headers):*/
            for (i = 1; i < (rows.length - 1); i++) {
                //start by saying there should be no switching:
                shouldSwitch = false;
                /*Get the two elements you want to compare,
                one from current row and one from the next:*/
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                /*check if the two rows should switch place,
                based on the direction, asc or desc:*/
                if (dir == "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        //if so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir == "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        //if so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                /*If a switch has been marked, make the switch
                and mark that a switch has been done:*/
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                //Each time a switch is done, increase this count by 1:
                switchcount++;
            } else {
                /*If no switching has been done AND the direction is "asc",
                set the direction to "desc" and run the while loop again.*/
                if (switchcount == 0 && dir == "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
  },

  sortTable2: function(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("table2");
        switching = true;
        //Set the sorting direction to ascending:
        dir = "asc";
        /*Make a loop that will continue until
        no switching has been done:*/
        while (switching) {
            //start by saying: no switching is done:
            switching = false;
            rows = table.getElementsByTagName("tr");
            /*Loop through all table rows (except the
            first, which contains table headers):*/
            for (i = 1; i < (rows.length - 1); i++) {
                //start by saying there should be no switching:
                shouldSwitch = false;
                /*Get the two elements you want to compare,
                one from current row and one from the next:*/
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                /*check if the two rows should switch place,
                based on the direction, asc or desc:*/
                if (dir == "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        //if so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir == "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        //if so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                /*If a switch has been marked, make the switch
                and mark that a switch has been done:*/
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                //Each time a switch is done, increase this count by 1:
                switchcount++;
            } else {
                /*If no switching has been done AND the direction is "asc",
                set the direction to "desc" and run the while loop again.*/
                if (switchcount == 0 && dir == "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
  },

  submitLeadForm: function() {
    console.log("clicked");
    $("#modal2").removeClass("is-active");
    let newLead = {
      first_name: $("#first_name").val().trim(),
      last_name: $("#last_name").val().trim(),
      email: $("#email").val().trim(),
      phone: $("#phone").val().trim(),
      contacted: false,
      converted: false,
      address: $("#streetAddress").val().trim(),
      city: $("#city").val().trim(),
      state: $("#statelist").val(),
      zip: $("#zip").val().trim()
    };
    console.log(newLead);

    $.post("/api/lead", newLead)
      .done(function(data) {
        console.log(data);
        console.log("--------------------Lead id: " + data.id);
      });
    $("#modal1").removeClass("is-active");
      $("#modal2").addClass("is-active");
      // $("#fieldinfo").append("Thank You " + newLead.first_name + "!" + "<br /> A Representative will be contacting you shortly");
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
        console.log("--------------------User id: " + data.id);
      });
  }
}

export default helpers;















