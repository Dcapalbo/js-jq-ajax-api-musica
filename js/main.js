$(document).ready(function() {
// ask to the server an array objects of album music
var apiObjects = "https://flynn.boolean.careers/exercises/api/array/music";
  $.ajax({
    "url": apiObjects,
    "method": "GET",
    "success": function(data, status) {
      // save the array objects inside of a variable
      var results = data.response;
      console.log(data.response);
      Rendered(results);
    },
    "error": function(request, status, error) {
      alert("an error has occured");
    }
   });

  $("#genre").change(function() {

   var valueSelect = $(this).val();

    if (valueSelect == "") {
     $(".cd").fadeIn(1500);
    } else {
      $(".cd").hide();
      $(".cd[data-genre=‘" + valueSelect + "’]").fadeIn(1500);
    }

 });

   function Rendered(results) {
     //make a variable to read the html inside the template class
     var source = $('#entry-template').html();
     //make a variable for handlebars
	   var template = Handlebars.compile(source);
     //make a cicle to read and insert the objects inside the HTML
     for (var i = 0; i < results.length; i++) {
		  var html = template(results[i]);
		  console.log(html);
		  $('.cds-container').append(html);
   }
  }
});
