// window.onscroll = function() {myFunction()};
  
// var navbar = document.getElementById("navbarHome");
// var sticky = 440;
// var second_nav = document.getElementById("navbarHome");
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
 
//    $(navbar).parent().addClass("sticky");
//   } else {
  
//     $(navbar).parent().removeClass("sticky");
//   }
// }



// $('#sliderCarousel.v2 .owl-carousel').owlCarousel({
//     loop:true,
//     margin:30,
//     autoplay:true,
// autoplayTimeout:3000,
// autoplayHoverPause:true,

//     responsive:{
//         0:{
//             items:1
//         },
//         768:{
//             items:1
//         },
//         1200:{
//             items:1
//         }
//     }
// });

// $('#sellerCarousel.v2 .owl-carousel').owlCarousel({
//     loop:true,
//     margin:30,
//     autoplay:true,
// autoplayTimeout:3000,
// autoplayHoverPause:true,
// nav:true,
// dots : false,
// navText: [
//   '<i class="fa fa-angle-left" aria-hidden="true"></i>',
//   '<i class="fa fa-angle-right" aria-hidden="true"></i>'
// ],
//     responsive:{
//         0:{
//             items:1
//         },
//         768:{
//             items:1
//         },
//         1200:{
//             items:1
//         }
//     }
// });






// $("#navbarHome .nav-link").change(function(){
//     console.log(" I am in");
//     $(".nav-item").removeClass(" active ");
//     $(this).parent(".nav-item").addClass(" active");

// });

$(document).ready(function () {

    activeFrontLink()

});


function activeFrontLink(){
    $(".nav-item").each(function () {
        var menu = $(this).find('a').attr('href')

        //console.log(document.URL)
        var url = document.URL
        var urlArray = url.split("/")
        //console.log("All array ",urlArray)
        findParent(urlArray[4])

    })
}

function clearActive() {
    //$(".nav-item").attr({'class':'nav-item'})
    $(".nav-item").removeClass(" active ");
}
function findParent(match) {
    //console.log("match $$$$$$$$$$$ ",match)
    clearActive()
    $(".nav-item").each(function () {
        var menu = $(this).find('a').attr('href');
        
         //console.log("menu ########## ",menu," match $$$$$$$$$$$$$ ",match)
        if(menu == match){
            //console.log("i am in");
            $(this).attr({'class':'nav-item active'})
        }
       
        
        
    })
}



function openTabContent(evt, containerToDisplay) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    $(tabcontent[i]).children().find(".gallaryMainImageContainer").children("img").attr("id"," ");
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(containerToDisplay).style.display = "block";
    //console.log("#"+containerToDisplay);
    $("#"+containerToDisplay).children().find(".gallaryMainImageContainer").children("img").attr("id","bigImageSelector");
    evt.currentTarget.className += " active";
  }



  function openTabContentModal(evt, containerToDisplay) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontentModal");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
 
    document.getElementById(containerToDisplay).style.display = "block";
    //console.log("#"+containerToDisplay);
  
    evt.currentTarget.className += " active";
  }
  

  $(".btn-Custom-radio").click(function(){
    console.log("I am clicked");
 $(".btn-Custom-radio").removeClass(" active ");
 $(this).addClass(" active ");



 });
  

 $(".homeOrOfficeSelector").change(function(){

  if($("#serviceTypeHome").is(':checked')){
    $("#addressContainer").show();
    $("#addressContainer").prop('required',true);

  }else{
    $("#addressContainer").prop('required',false);
    $("#addressContainer").hide();
  }

 });

 $("#addressContainer").hide();


 /*******************Login Form********************* */
                    var placeholderData;
                     $(".formWrapper input,.formWrapper textarea").focusin(function(){
                        $(this).parent().children("label").fadeIn();
                        placeholderData = $(this).attr('placeholder');
                        $(this).attr('placeholder', '');
                        $(this).css({"padding":"20px 15px 10px"});
                      
                     });

                     $(".formWrapper input,.formWrapper textarea").focusout(function(){
                      $(this).parent().children("label").fadeOut();
                      $(this).attr('placeholder', placeholderData);
                      $(this).css({"padding":"15px 15px 15px"});
                      
                    
                   });
/*******************Login Form ends********************* */

/**************************User dashboard Design******************************* */
 var getInnerHtml;
 $(".edit_cancel_btn").click(function(){
   getInnerHtml = $(this).text().toLowerCase();
   if(getInnerHtml == "edit"){
   $(this).text("Cancel");
  event.preventDefault();
  $(this).parent("h3").siblings(".divSelector").children().find("input").prop("disabled",false);
  $(this).parent("h3").siblings(".divSelector").children().find("textarea").prop("disabled",false);
   //$("input").prop("disabled", false);
   $(this).parent("h3").siblings(".divSelector").children().find(".userDashboardInput").css("padding","25px 16px 10 13px");
   $(this).parent("h3").siblings(".divSelector").children().find(".userDashboardSubmit").show();
   $(this).parent("h3").siblings(".divSelector").children().find(".abs_Label").show();

   }
   else{
    $(this).text("Edit");
 
     //$("input").prop("disabled", true);
     $(this).parent("h3").siblings(".divSelector").children().find("input").prop("disabled",true);
     $(this).parent("h3").siblings(".divSelector").children().find("textarea").prop("disabled",true);
     $(this).parent("h3").siblings(".divSelector").children().find(".userDashboardInput").css("padding","16px");
     $(this).parent("h3").siblings(".divSelector").children().find(".userDashboardSubmit").hide();
     $(this).parent("h3").siblings(".divSelector").children().find(".abs_Label").hide();

   }

 })

 $(".myAccountHumberger").click(function(){
  $(this).siblings(".accountWrapper").slideToggle("slow");

 });


 /*************************** ends User Dashboard *****************************************/