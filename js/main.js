



$(document).on("click",".serviceHeading",function(){
   
    $(".serviceContent").addClass(" toggled ");
    $(".serviceHeading").addClass(" toggledHeading ");
    $(this).siblings(".serviceContent").removeClass(" toggled ");
    $(this).removeClass(" toggledHeading ");
    $(".toggledHeading").removeClass(" active ");
    $(".toggled").slideUp();
    $(this).siblings(".serviceContent").slideToggle();
    $(this).toggleClass(" active ")
})



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



  function showProfile() {
      console.log("I am called");
    $("#profileModal").modal("show");
    $("#profileModal").appendTo("body");
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


   $(".btn-Custom-radio").click(function(){
    console.log("I am clicked");
 $(".btn-Custom-radio").removeClass(" active ");
 $(this).addClass(" active ");



 });
  

 


 $(document).on("click",".toggle-profile-mobile", function(){
 
  $(".profileSections").toggleClass(" showHideProfileSections ");
 })



  $(".cart").on("click", function() {
    $("#shopping-cart").slideToggle('slow');
  });
  $(".login_sign_up").click(function(){
    $(this).parent().siblings(".login_signup_container").slideToggle('slow');
  })




$(document).mouseup(function (e) {
  var popup = $("#shopping-cart");
  if (!$(".cart").is(e.target) && !$(".cart-icon_nav").is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
   
      popup.fadeOut('slow');
      
  }
});

$(".info-circle-content-cart-btn").hover(function(){
  $(this).parents(".info-div-cart-page").siblings(".information-container-cart-page").show("slow");
},function(){
  $(this).parents(".info-div-cart-page").siblings(".information-container-cart-page").hide("slow");
});


var quantity;
$(".increaseQuantity").click(function(){
 quantity =  $(this).siblings(".quantity").children(".quantity_productDescription").val();
 quantity = parseInt(quantity) + 1;
 $(this).siblings(".quantity").children(".quantity_productDescription").val(quantity);
});

$(".decreaseQuantity").click(function(){
  quantity =  $(this).siblings(".quantity").children(".quantity_productDescription").val();
  quantity = parseInt(quantity) - 1;
  if(quantity < 1){
    return false;
  }else{
    $(this).siblings(".quantity").children(".quantity_productDescription").val(quantity);
  }
 
 });

 $(".shipping-column-btn").click(function(){
$(".address_bar_product_description").slideToggle('slow');
 });

 $(document).mouseup(function (e) {
  popup = $(".address_bar_product_description");
  if (!$(".shipping-column-btn").is(e.target)  && !$(".shipping-column-btn i").is(e.target)   &&  !popup.is(e.target) && popup.has(e.target).length == 0) {
   
      popup.fadeOut('slow');
      
  }
});



$(".cart-btn-toggler").click(function(){
  $("#cart-container-444").slideToggle();
})


$(document).mouseup(function (e) {
  popup = $("#cart-container-444");
  if (!$(".cart-btn-toggler, .cart-btn-toggler span, .cart-btn-toggler i").is(e.target)  &&  !popup.is(e.target) && popup.has(e.target).length == 0) {
   
      popup.fadeOut('slow');
      
  }
});



$("#profile-toggler-header").click(function(){
  $("#profile-header-container").slideToggle();
})


$(document).mouseup(function (e) {
  popup = $("#profile-header-container");
  if (!$("#profile-toggler-header, #profile-toggler-header span, #profile-toggler-header i").is(e.target)  &&  !popup.is(e.target) && popup.has(e.target).length == 0) {
   
      popup.fadeOut('slow');
      
  }
});