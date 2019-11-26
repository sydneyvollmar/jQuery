$(document).ready(function(){
  // when submiting form check fields filled in
  $("#ch4form").submit(function() {

    // check name textarea
    if ($("#fullname").val() === '') {
      $("#nameerrormsg").show();
      // console.log("no name");
      return false;
    }
    // returns name error message to hidden if field gets filled
    else {
      $("#nameerrormsg").hide();
    }

    // check street address textarea
    if ($("#streetaddr").val() === '') {
      $("#addrerrormsg").show();
      // console.log("no address");
      return false;
    }
    // returns address error message to hidden if field gets filled
    else {
      $("#addrerrormsg").hide();
    }

    // return true and let form submit if both textareas filled in
    return true;
  });
});
