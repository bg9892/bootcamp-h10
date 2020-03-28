$(function () {
    // Add a new burger
    $(".add").on("click", function (event) {
        event.preventDefault();
        const newBurger = {
            name: $("#burger-name").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // Devour a burger
    $(".devour").on("click", function (event) {
        event.preventDefault();
        const id = $(this).data("id");
        const devourState = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devourState
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});