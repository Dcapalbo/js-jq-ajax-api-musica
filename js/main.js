$(document).ready(function() {

// ask to the server an array objects of album music
var apiObjects = "https://flynn.boolean.careers/exercises/api/array/music";
   //make an ajax call for the music
   $.ajax (
     {
     "url": apiObjects,
     "method": "GET",
     "success": function(data) {
       // save the array objects inside of a variable
       var results = data.response;
       Rendered(results);
     },
     "error": function(error) {
       alert("an error has occured");
     }
    });

  $("#genre").change(function() {
   //make a variable to save the value of the genre options
   var valueSelect = $(this).val();
   //make some conditions which let appear or disappear the content
    if (valueSelect == "") {
     $(".cd").fadeIn(1500);
    } else {
     $(".cd").hide();
     $(".cd[data-genre=" + valueSelect + "]").fadeIn(1500);
    }
 });
   //make a function for handlebars which will append the html
   function Rendered(results) {
     //make a variable to read the html inside the template class
     var source = $('#music-template').html();
     //make a variable for handlebars
	   var template = Handlebars.compile(source);
     //make a cicle to read and insert the objects inside the HTML
     for (var i = 0; i < results.length; i++) {
		  var html = template(results[i]);
		  $('.cds-container').append(html);
   }
  }
});
