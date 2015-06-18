$(document).ready(function(){

	toastr.options = {
  				"closeButton": true,
  				"debug": false,
  				"newestOnTop": false,
  				"progressBar": false,
  				"positionClass": "toast-top-right",
  				"preventDuplicates": false,
  				"onclick": null,
  				"showDuration": "300",
  				"hideDuration": "1000",
  				"timeOut": "5000",
  				"extendedTimeOut": "1000",
  				"showEasing": "swing",
  				"hideEasing": "linear",
  				"showMethod": "fadeIn",
  				"hideMethod": "fadeOut"
			}
	function validate()
	{

		var x = document.forms["sell-form"]["book-name"].value;
   		if (x == null || x == "") {
   			
        	toastr["error"]("Book Name must be Filled", "Error")
    	}

    	x = document.forms["sell-form"]["branch"].value;
   		if (x == "Select" ) {
   			
        	toastr["error"]("Branch must be Selected", "Error")
    	}

    	x = document.forms["sell-form"]["sem"].value;
   		if (x == "Select" ) {
   			
        	toastr["error"]("Semester must be Selected", "Error")
    	}

    	x = document.forms["sell-form"]["sub"].value;
   		if (x == "Select" ) {
   			
        	toastr["error"]("Subject must be Selected", "Error")
    	}

    	x = document.forms["sell-form"]["mrp"].value;
   		if (x == null || x == "") {
   			
        	toastr["error"]("MRP Name must be Filled", "Error")
    	}

    	x = document.forms["sell-form"]["sp"].value;
   		if (x == null || x == "") {
   			
        	toastr["error"]("Selling Price Name must be Filled", "Error")
    	}

    
	}

	$('#button').click(function(){
		validate();
		return false;
	});

  $('img').click(function(){
    $('.cart-list').animate({left:'35vw'});
  })




});