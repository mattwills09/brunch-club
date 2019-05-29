$(document).ready(function() {
 
  /* global moment */

  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
    sessionStorage.setItem("member-name", data.email);
  }); 

  var userEmail = sessionStorage.getItem("member-name");

  // blogContainer holds all of our posts
  var blogContainer = $(".blog-container");
  var postCategorySelect = $("#category");
  // Click events for the edit and delete buttons
  $(document).on("click", "button.delete", handlePostDelete);
  $(document).on("click", "button.edit", handlePostEdit);
  // Variable to hold our posts
  var posts;

  // The code below handles the case where we want to get blog posts for a specific restaurant
  // Looks for a query param in the url for restaurant_id
  var url = window.location.search;
  var restaurantId;
  if (url.indexOf("?restaurant_id=") !== -1) {
    restaurantId = url.split("=")[1];
    getPosts(restaurantId);
  }
  // If there's no restaurantId we just get all posts as usual
  else {
    getPosts();
  }


  // This function grabs posts from the database and updates the view
  function getPosts(restaurant) {
    restaurantId = restaurant || "";
    if (restaurantId) {
      restaurantId = "/?restaurant_id=" + restaurantId;
    }
    $.get("/api/posts" + restaurantId, function(data) {
      console.log("Posts", data);
      posts = data;
      if (!posts || !posts.length) {
        displayEmpty(restaurant);
      }
      else {
        initializeRows();
      }
    });
  }

  // This function does an API call to delete posts
  function deletePost(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/posts/" + id
    })
      .then(function() {
        getPosts(postCategorySelect.val());
      });
  }

  // InitializeRows handles appending all of our constructed post HTML inside blogContainer
  function initializeRows() {
    blogContainer.empty();
    var postsToAdd = [];
    for (var i = 0; i < posts.length; i++) {
      postsToAdd.push(createNewRow(posts[i]));
    }
    blogContainer.append(postsToAdd);
  }

  // This function constructs a post's HTML
  function createNewRow(post) {
    var formattedDate = new Date(post.createdAt);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mma");
    var newPostCard = $("<div>");
    newPostCard.addClass("card");
    newPostCard.css({
      "margin-bottom": "15px",
      "margin-top": "5px"
    })
    var newPostCardHeading = $("<div>");
    newPostCardHeading.addClass("card-header");
    if(userEmail==post.User.email){
    var deleteBtn = $("<button>");
    deleteBtn.text("x");
    deleteBtn.addClass("delete btn-sm btn-danger");
    deleteBtn.css({
      float: "right",
      "margin-left": "10px"
    });
    var editBtn = $("<button>");
    editBtn.text("EDIT");
    editBtn.addClass("edit btn-sm btn-info");
    editBtn.css({
      float: "right"
    });}
    var newPostTitle = $("<h2>");
    var newPostDate = $("<small>");
    newPostDate.css({
      float: "left",
      "font-size": "14px",
      "margin-top":
      "5px"
    });
    var newPostrestaurant = $("<h5>");
    newPostrestaurant.text(post.restaurant.name);
    newPostrestaurant.css({
      float: "left",
      color: "grey",
      "font-size": "22px",
      "margin-top":
      "-30px"
    });
    var newAuthor = $("<h7>");
    newAuthor.text("by: " + post.User.email);
    newAuthor.css({
      float: "left",
      color: "darkgrey",
      "font-size": "14px",
      "margin-top":
      "-25px",
      "margin-right":
      "3px"
    });
    var newPostCardBody = $("<div>");
    newPostCardBody.addClass("card-body");
    var newPostBody = $("<p>");
    newPostBody.css({
      "font-size": "20px"
    });
    newPostTitle.text(post.title + " ");
    newPostBody.text(post.body);
    newPostTitle.append("<br>");
    newPostDate.text(formattedDate);
    newPostTitle.append(newPostDate);
    newPostTitle.append("<br>");
    newPostCardHeading.append(deleteBtn);
    newPostCardHeading.append(editBtn);
    newPostCardHeading.append(newPostTitle);
    newPostCardHeading.append(newPostrestaurant);
    newPostCardHeading.append("<br>");
    newPostCardHeading.append(newAuthor);
    newPostCardBody.append(newPostBody);
    newPostCard.append(newPostCardHeading);
    newPostCard.append(newPostCardBody);
    newPostCard.data("post", post);
    return newPostCard;
    
    
  }

  // This function figures out which post we want to delete and then calls deletePost
  function handlePostDelete() {
    var currentPost = $(this)
      .parent()
      .parent()
      .data("post");
    deletePost(currentPost.id);
  }

  // This function figures out which post we want to edit and takes it to the appropriate url
  function handlePostEdit() {
    var currentPost = $(this)
      .parent()
      .parent()
      .data("post");
    window.location.href = "/cms?post_id=" + currentPost.id;
  }

  // This function displays a message when there are no posts
  function displayEmpty(id) {
    var query = window.location.search;
    var partial = "";
    if (id) {
      partial = " for restaurant #" + id;
    }
    blogContainer.empty();
    var messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html("No posts yet" + partial + ", navigate <a href='/cms" + query +
    "'>here</a> in order to get started.");
    blogContainer.append(messageH2);
  }

});
