$(document).ready(function() {
  $("#ch3form").submit(function(){

    // if no radio buttons are checked for fruits
    if (!$("input[name='fruit']:checked").val()) {
      alert("Please select a fruit");
      // console.log("no fruit checked");
      return false;
    }

    // if no radio buttons are checked for standing
    if (!$("input[name='standing']:checked").val()) {
      alert("Please select a standing");
      // console.log("no standing checked");
      return false;
    }

    // else radio button checked from each category and submit form
    return true;
  });
});
