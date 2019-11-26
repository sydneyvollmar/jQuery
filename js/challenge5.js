// console.log("here")
// var imgs = document.querySelectorAll("img");
// var msg = "Hover over an image below."
// for (let i = 0; i < imgs.length;i++){
// 	imgs[i].onmouseover = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }
//
// 	 imgs[i].onfocus = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }
//
// 	 imgs[i].onmouseleave = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
//
// 	 imgs[i].onblur = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
// }


$(document).ready(function() {

	var origText = $("#image").text();

	$(".preview").hover(function() {

		var currImgUrl = $(this).attr("src");
		var currAlt = $(this).attr("alt");

  	$("#image").css('background-image', 'url(' + currImgUrl + ')');
		$("#image").text(currAlt);

  }, function(){

  	$("#image").css("background-image", "");
		$("#image").text(origText);
	});

	// when previews focused on, for ex. with tab navigation
	$(".preview").focus(function() {
		var currImgUrl = $(this).attr("src");
		var currAlt = $(this).attr("alt");

		$("#image").css('background-image', 'url(' + currImgUrl + ')');
		$("#image").text(currAlt);
	});

	// when previews lose their focus
	$(".preview").blur(function() {
		$("#image").css("background-image", "");
		$("#image").text(origText);
	});


});
