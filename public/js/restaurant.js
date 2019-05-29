$(document).ready(function() {

  if (!sessionStorage.getItem("member-name")){
    window.location.href = "/";
  }


  // Getting references to the name input and restaurant container, as well as the table body
  var nameInput = $("#restaurant-name");
  var restaurantList = $("tbody");
  var restaurantContainer = $(".restaurant-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an restaurant
  $(document).on("submit", "#restaurant-form", handlerestaurantFormSubmit);
  $(document).on("click", ".delete-restaurant", handleDeleteButtonPress);

  // Getting the initial list of restaurants
  getrestaurants();

  // A function to handle what happens when the form is submitted to create a new restaurant
  function handlerestaurantFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim().trim()) {
      return;
    }
    // Calling the upsertrestaurant function and passing in the value of the name input
    upsertrestaurant({
      name: nameInput
        .val()
        .trim()
    });
  }

  // A function for creating an restaurant. Calls getrestaurants upon completion
  function upsertrestaurant(restaurantData) {
    $.post("/api/restaurants", restaurantData)
      .then(getrestaurants);
  }

  // Function for creating a new list row for restaurants
  function createrestaurantRow(restaurantData) {
    var newTr = $("<tr>");
    newTr.data("restaurant", restaurantData);
    newTr.append("<td>" + restaurantData.name + "</td>");
    if (restaurantData.Posts) {
      newTr.append("<td> " + restaurantData.Posts.length + "</td>");
    } else {
      newTr.append("<td>0</td>");
    }
    newTr.append("<td><a href='/blog?restaurant_id=" + restaurantData.id + "'>Go to Reviews</a></td>");
    newTr.append("<td><a href='/cms?restaurant_id=" + restaurantData.id + "'>Create Review</a></td>");
    newTr.append("<td><a style='cursor:pointer;color:red' class='delete-restaurant'>Delete</a></td>");
    return newTr;
  }

  // Function for retrieving restaurants and getting them ready to be rendered to the page
  function getrestaurants() {
    $.get("/api/restaurants", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createrestaurantRow(data[i]));
      }
      renderrestaurantList(rowsToAdd);
      nameInput.val("");

    });
  }

  // A function for rendering the list of restaurants to the page
  function renderrestaurantList(rows) {
    restaurantList.children().not(":last").remove();
    restaurantContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      restaurantList.prepend(rows);
    }
    else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no restaurants
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create an restaurant before you can create a Post.");
    restaurantContainer.append(alertDiv);
  }

  // Function for handling what happens when the delete button is pressed
  function handleDeleteButtonPress() {
    var listItemData = $(this).parent("td").parent("tr").data("restaurant");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/restaurants/" + id
    })
      .then(getrestaurants);
  }
});
