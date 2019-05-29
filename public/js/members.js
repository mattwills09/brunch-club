$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  if (!sessionStorage.getItem("member-name")){
    window.location.href = "/";
  }

  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
    sessionStorage.setItem("member-name", data.email);

  });
});
