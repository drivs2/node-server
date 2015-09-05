$(document).ready(function(){
  $('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style

  });
  console.log("about to slide down");
  $('body').slideDown(480000, function() {
    console.log("finish sliding down");
  });

  console.log("slide left");
  $('maintext').slideLeft(1000, function() {
    console.log("finish sliding left");
  });
});
