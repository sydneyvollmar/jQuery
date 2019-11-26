$(document).ready(function(){
	$("#useBilling").click(function(){

		// only if box checked to use billing
		if ($("#useBilling").prop('checked')) {

			// copy home to billing textarea
			$("#home").val($("#billing").val());

			// disable billing textarea
			$("#home").prop("disabled", true);
		}

		// if box not checked to use billing, enable typing
		else {
			$("#home").prop("disabled", false);
			$("#home").val("");
		}

	});
});
