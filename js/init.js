(function($){
  $(function(){

    $('.button-collapse').sideNav();

//     if( $('.li-li').css('display') == 'block' )  { 
//     /*success*/ 
//     alert("hidden");
// } 





// $('.consult-mobile-link').click(function(){
//       $('.consult-minus').toggleClass("hidden");
//       $('.consult-plus').toggleClass("hidden");
// });

// $('.experience-mobile-link').click(function(){
//       $('.experience-minus').toggleClass("hidden");
//       $('.experience-plus').toggleClass("hidden");
// });

// $('.automotive-mobile-link').click(function(){
//       $('.automotive-minus').toggleClass("hidden");
//       $('.automotive-plus').toggleClass("hidden");
// });


// // $('.consult-mobile-link').mouseover(function(){
// //       $('.consult-minus').toggleClass("hidden");
// //       $('.consult-plus').toggleClass("hidden");
// // });

// // $('.experience-mobile-link').mouseover(function(){
// //       $('.experience-minus').toggleClass("hidden");
// //       $('.experience-plus').toggleClass("hidden");
// // });

// // $('.automotive-mobile-link').mouseover(function(){
// //       $('.automotive-minus').toggleClass("hidden");
// //       $('.automotive-plus').toggleClass("hidden");
// // });

// $('.consult-mobile-link').mouseleave(function(){
//       $('.consult-minus').toggleClass("hidden");
//       $('.consult-plus').toggleClass("hidden");
// });

// $('.experience-mobile-link').mouseleave(function(){
//       $('.experience-minus').toggleClass("hidden");
//       $('.experience-plus').toggleClass("hidden");
// });

// $('.automotive-mobile-link').mouseleave(function(){
//       $('.automotive-minus').toggleClass("hidden");
//       $('.automotive-plus').toggleClass("hidden");
// });




 $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      // draggable: true // Choose whether you can drag to open on touch screens
    }
  );





 

  }); // end of document ready
})(jQuery); // end of jQuery name space