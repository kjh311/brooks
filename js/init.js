(function($){
  $(function(){

    $('.button-collapse').sideNav();

//     if( $('.li-li').css('display') == 'block' )  { 
//     /*success*/ 
//     alert("hidden");
// } 


$('.modal').modal();


$('select').material_select();

$('select').material_select();


  // $("#formValidate").validate({
  //       rules: {
  //           uname: {
  //               required: true,
  //               minlength: 5
  //           },
  //           cemail: {
  //               required: true,
  //               email:true
  //           },
  //           password: {
  //       required: true,
  //       minlength: 5
  //     },
  //     cpassword: {
  //       required: true,
  //       minlength: 5,
  //       equalTo: "#password"
  //     },
  //     curl: {
  //               required: true,
  //               url:true
  //           },
  //           crole:"required",
  //           ccomment: {
  //       required: true,
  //       minlength: 15
  //           },
  //           cgender:"required",
  //     cagree:"required",
  //       },
  //       //For custom messages
  //       messages: {
  //           uname:{
  //               required: "Enter a username",
  //               minlength: "Enter at least 5 characters"
  //           },
  //           curl: "Enter your website",
  //       },
  //       errorElement : 'div',
  //       errorPlacement: function(error, element) {
  //         var placement = $(element).data('error');
  //         if (placement) {
  //           $(placement).append(error)
  //         } else {
  //           error.insertAfter(element);
  //         }
  //       }
  //    });




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