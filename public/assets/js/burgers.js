// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour").on("click", function(event) {
  
      var id = $(this).data("id");
      var devoured = $(this).data("devour");

      if ( devoured ) {
        devoured = true;
      }

      console.log(devoured);
      var newDevouredState = {
        devoured: devoured
      };
      
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevouredState
        }).then(function() {
          // Reload the page to get the updated list
          location.reload();
        });
  });
  $(".create-burger").on("submit", function(event) {
    console.log('test');
    event.preventDefault();

var newBurger = {
  name: $("#burger").val().trim(),
};
 console.log(newBurger);
// Send the POST request.
$.ajax("/api/burgers", {
  type: "POST",
  data: newBurger
}).then(
  function() {
    console.log("created new burger");
    // Reload the page to get the updated list
    location.reload();
  }
);
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");
console.log('test');
// Send the DELETE request.
$.ajax("/api/burgers/" + id, {
  type: "DELETE"
}).then(
  function() {
    console.log("deleted burger", id);
    // Reload the page to get the updated list
    location.reload();
  }
);
  });
});  
