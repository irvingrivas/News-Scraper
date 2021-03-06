// Grab the articles as a json
$.getJSON("/articles", function(data) {
  // For each one
  for (var i = 0; i < data.length; i++) {
    // Display the apropos information on the page
    $("#articles").append("<p data-id='" + data[i]._id + "'>" + 
    data[i].title + "<br />" + data[i].link + "</p>")
    .append("<button data-id='" + data[i]._id + 
    "' data-title='" + data[i].title + "' data-link='" + data[i].link +
    "' id='savearticle'>Save</button><br>")
    .append("<button data-id='" + data[i]._id + 
    "' data-title='" + data[i].title + "' data-link='" + data[i].link +
    "' id='deletearticle'>Delete</button><br>");
  }
});

$.getJSON("/saved-articles", function(data) {
  // For each one
  for (var i = 0; i < data.length; i++) {
    // Display the apropos information on the page
    $("#saved-articles").append("<p data-id='" + data[i]._id + "'>" + 
    data[i].title + "<br />" + data[i].link + "</p>")
    .append("<button data-id='" + data[i]._id + 
    "' data-title='" + data[i].title + "' data-link='" + data[i].link +
    "' id='removearticle'>Remove</button><br>");
  }
});

// When you click the savearticle button
$(document).on("click", "#savearticle", function() {
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");

  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/saved-articles/" + thisId,
    data: {
      title: $(this).attr("data-title"),
      link: $(this).attr("data-link"),
      saved: true
    }
  })
    // With that done
    .then(function(data) {
      // Log the response
      console.log(data);
      location.reload(true);
    });
});

// When you click the savearticle button
$(document).on("click", "#savearticle", function() {
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");

  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/saved-articles/" + thisId,
    data: {
      title: $(this).attr("data-title"),
      link: $(this).attr("data-link"),
      saved: true
    }
  })
    // With that done
    .then(function(data) {
      // Log the response
      console.log(data);
      location.reload(true);
    });
});

// When you click the scrape button
$(document).on("click", "#scrape", function() {
  // Grab the id associated with the article from the submit button
  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "GET",
    url: "/scrape",
  })
    // With that done
    .then(function(data) {
      // Log the response
      console.log(data);
      location.reload(true);
    });
});

// When you click the removearticle button
$(document).on("click", "#removearticle", function() {
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");

  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/unsaved-articles/" + thisId,
    data: {
      title: $(this).attr("data-title"),
      link: $(this).attr("data-link"),
      saved: false
    }
  })
    // With that done
    .then(function(data) {
      // Log the response
      console.log(data);
      location.reload(true);
    });
});

// When you click the removearticle button
$(document).on("click", "#removearticle", function() {
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");

  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/unsaved-articles/" + thisId,
    data: {
      title: $(this).attr("data-title"),
      link: $(this).attr("data-link"),
      saved: false
    }
  })
    // With that done
    .then(function(data) {
      // Log the response
      console.log(data);
      location.reload(true);
    });
});

// When you click the deletearticle button
$(document).on("click", "#deletearticle", function() {
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");
  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/delete-articles/" + thisId,
    data: {
      id: thisId
    }
  })
      // With that done
      .then(function(data) {
        // Log the response
        console.log(data);
        location.reload(true);
      });
});
/*
// Whenever someone clicks a p tag
$(document).on("click", "#editnote=", function() {
  // Empty the notes from the note section
  $("#notes").empty();
  // Save the id from the p tag
  var thisId = $(this).attr("data-id");

  // Now make an ajax call for the Article
  $.ajax({
    method: "GET",
    url: "/articles/" + thisId
  })
    // With that done, add the note information to the page
    .then(function(data) {
      console.log(data);
      // The title of the article
      $("#notes").append("<h2>" + data.title + "</h2>");
      // An input to enter a new title
      $("#notes").append("<input id='titleinput' name='title' >");
      // A textarea to add a new note body
      $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
      // A button to submit a new note, with the id of the article saved to it
      $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");

      // If there's a note in the article
      if (data.note) {
        // Place the title of the note in the title input
        $("#titleinput").val(data.note.title);
        // Place the body of the note in the body textarea
        $("#bodyinput").val(data.note.body);
      }
    });
});
*/
// When you click the savenote button
$(document).on("click", "#savenote", function() {
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");

  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      // Value taken from title input
      title: $("#titleinput").val(),
      // Value taken from note textarea
      body: $("#bodyinput").val()
    }
  })
    // With that done
    .then(function(data) {
      // Log the response
      console.log(data);
      // Empty the notes section
      $("#notes").empty();
    });

  // Also, remove the values entered in the input and textarea for note entry
  $("#titleinput").val("");
  $("#bodyinput").val("");
});
