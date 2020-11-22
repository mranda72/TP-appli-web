
$(function(){


    $ ( "#inputdate") .datepicker ({
     altFormat: "yy-mm-dd",
     maxDate: 0,
    
});



$("#myBtn").click(function(){
if($("#inputnom").val()==0 || $("#inputpre").val()==0 || $("#inputdate").val()==0 || $("#inputadd").val()==0 || $("#inputmail").val()==0){
	$(".modal-title").text("Message Modal");
	$(".modal-body").text("Veuillez remplir tout les champs");
	$('#myModal').modal("show");
	
}else{
var name = $("#inputnom").val();
var city = $("#inputadd").val();
$(".modal-title").text("bienvenue");
$(".modal-body").html(`<img src="https://maps.googleapis.com/maps/api/staticmap?markers=${city}&zoom=14&size=200x200 &scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/>`);
	
	  $('#myModal').modal("show");
}  
	});
	
  });
	
	