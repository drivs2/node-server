$(document).ready(function() {
  $('.slider').slider({
    indicators: false,
    full_width: false,
    height: 400,
    transition: 800, // ms
    interval: 6000
  });

  // $(".maintext").show("slide", {
  //   direction: "left"
  // }, 5000);
  //
  // $('.collapsible').collapsible({
  //   accordion: false   // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  // });
});
// $(document).ready(function(){
//     $('.hidden').slideDown(4000);
// });

    // var options = [
    //    {selector: '.class', offset: 200, callback: 'globalFunction()' },
    //    {selector: '.other-class', offset: 200, callback: 'globalFunction()' },
    //  ];
    //  Materialize.scrollFire(options);
