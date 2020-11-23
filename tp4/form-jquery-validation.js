
$(function(){
  $("#gps").on('click' ,function(){
    getLocation();
  });
  
 /*****************************/
 
  $("#name").keyup(function() {
  var name = $("#name").val();
  var Length_Name = name.length;
  $("#inputname").text(Length_Name+"car.");
});


/***********************/


$("#firstname").keyup(function() {
  var Lastname = $("#firstname").val();
  var Length_Prenom = Lastname.length;
  $("#inputpre").text(Length_Prenom+"car.");
});




/*validation*/

//////



$("#valider").on("click", function ()
    {


    var
	name = $("#name").val();
        firstname = $("#firstname").val();
        birth = $("#birth").val();
        adresse = $("#adresse").val();
        mail = $("#mail").val();

    contactStore.add(name, firstname, birth, adresse, mail);

   var contactlist = contactStore.getList();
    for(var index in contactlist){
        contactlist[index].name
        document.querySelector("table").innerHTML = document.querySelector("table").innerHTML +
      '<tr><td>' + name + '</td><td>'  + firstname + '</td><td>'+ birth+ '</td><td><a href="https://maps.google.com/maps?q='+ adresse + '">'


      + adresse + '</a></td><td><a href=mailto:>' + mail + '</a></td>';


    }


});

});
	
	