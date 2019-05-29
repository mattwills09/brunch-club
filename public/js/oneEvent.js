
var API = {
    deleteEvent: function(id) {
      return $.ajax({
        url: "/api/events/" + id,
        type: "DELETE",
        success: function(data, textStatus) {

            if (data.redirect) {
                window.location.href = data.redirect;
            }
        }
      });
    }
};

$(".delete").click(function() {
    console.log(this);

    var idToDelete = $(this).attr("data-id");

    console.log(idToDelete);

  API.deleteEvent(idToDelete).then(function() {
    console.log("Event Deleted");
  });
});

