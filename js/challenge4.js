$(document).ready(function(){
  // when submiting form check fields filled in
  $("#ch4form").submit(function() {

    // check name textarea
    if ($("#fullname").val() === '') {
      $("#nameerrormsg").show();
      // console.log("no name");
    }
    // returns name error message to hidden if field gets filled
    else {
      $("#nameerrormsg").hide();
    }

    // check street address textarea
    if ($("#streetaddr").val() === '') {
      $("#addrerrormsg").show();
      // console.log("no address");
    }
    // returns address error message to hidden if field gets filled
    else {
      $("#addrerrormsg").hide();
    }

    if ((!($("#streetaddr").val() === '')) && (!($("#fullname").val() === ''))) {
      return true;
    }

    // return true and let form submit if both textareas filled in
    return false;
  });
});
