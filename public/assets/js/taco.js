// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
      console.log("Change Devoured state");
      
      let id = $(this).data("id");
      let devoured = $(this).data("devoured");
      // console.log(devoured);
      
      let devouredState = {
        devoure: devoured
      };
      console.log(devouredState);
      
  
      // Send the PUT request.
      $.ajax("/api/tacos/" + id, {
        type: "PUT",
        data: devouredState
      }).then(
        function() {
          console.log("changed devoured to", devoured);
          // Reload the page to get the updated list
          location.reload();
        });
    });
  
    $(".addTaco-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newTaco = {
        name: $("#taco").val().trim()
      };
      // console.log(newTaco);
      
  
      // Send the POST request.
      $.ajax("/api/tacos", {
        type: "POST",
        data: newTaco
      }).then(
        function() {
          console.log("created new taco");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-taco").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/tacos/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted tacos", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  