import $ from 'jquery';

let userArray = $.ajax({ url: "/api/user", method: "GET" })
.done(function(userData) {
    
    let uArray = userData;
    console.log("User Array: " + uArray);
    var userList = $('#table1');
    uArray.forEach(function(user) {
        console.log(user);
        var userRow = $("<tr>");
        userRow.append("<td>"+ user.id +"</td>");
        userRow.append("<td>"+ user.user_name +"</td>");
        userRow.append("<td>"+ user.state +"</td>");
        userRow.append("<td>"+ user.email +"</td>");
        userRow.append("<td>"+ user.phone +"</td>");
        userRow.append("<td></td>");
        userRow.append("<td></td>");
        userRow.append("<td></td>");
        userList.append(userRow);
    });
    return uArray;
});

export default Array;