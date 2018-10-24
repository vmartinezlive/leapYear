// Business Logic
function leapYear(year) {
  if (year % 400 === 0) {
      return true
  } else {
      return false;
  }

   // if  (year % 100 !== 0) {
  //     return true
  // } else {
  //   return false;
  // }
  // if (year % 4 === 0) {
  //   return true
  // } else {
  //   return false;
  // }
}


// User Interface Logic
$(document).ready(function(){
  $("#leap-year").submit(function(event){
    event.preventDefault();
    var year = parseInt($("input#leap-year-input").val());
    var result = leapYear(year);
    $("#results").text(result);
  });
});
