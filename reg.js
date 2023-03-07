<script>
$(document).ready(function() {
  
  $('#registration-form').submit(function(event) {
    
    event.preventDefault();

   
    var lettersOnlyRegex = /^[A-Za-z]+$/;
    var mobilePhoneRegex = /^5\d{7}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var nicRegex = /^([A-Za-z])\d{6}([1-2]\d|0[1-9])(0[1-9]|[1-2]\d|3[0-1])\d{3}$/;
    var passportRegex = /^P[A-Za-z0-9]{7}$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    
    var isValid = true;
    $('input').each(function() {
      var input = $(this);
      var value = input.val();
      var name = input.attr('name');

     
      if (value === '') {
        showError(input, name + ' cannot be empty');
        isValid = false;
        return false;
      }

      
      if (name === 'firstname' || name === 'lastname') {
        if (!lettersOnlyRegex.test(value)) {
          showError(input, name + ' should contain only letters');
          isValid = false;
          return false;
        }
      }
	  
	  $(function() {
    var cities = ["Port Louis", "Rose Hill", "Quatre Bornes", "Curepipe", "Vacoas", "Phoenix", "Beau Bassin", "Triolet", "Mahebourg", "Goodlands"];
    $("#city").autocomplete({
        source: cities
    });
});
		var mobileNumber = $("#mobile").val();

		if (/^5\d{7}$/.test(mobileNumber)) {
			
		} else {
			
		}
		var email = $("#email").val();

		if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			
		} else {

		}
		var dob = $("#dob").val();

		if (moment(dob, "DD/MM/YYYY").isValid()) {
			var age = moment().diff(moment(dob, "DD/MM/YYYY"), "years");
			if (age >= 18) {
				
			} else {
				
			}
		} else {
			
		}
				$(document).ready(function() {
		  $('#nationality').change(function() {
			if($(this).val() == "Mauritian") {
			  $('#nationality-specify').hide();
			} else {
			  $('#nationality-specify').show();
			}
		  });
		});
		function validateNIC() {
		  var nic = $('#nic').val();
		  var lastname = $('#lastname').val();
		  var dobPart = nic.substring(0, 6);
		  var dob = moment(dobPart, "YYMMDD"); // moment.js library used for date validation

		  if(nic.length != 14 || nic[0] != lastname[0] || !dob.isValid()) {
			$('#nic-error').text("Please enter a valid NIC number.");
			return false;
		  } else {
			$('#nic-error').text("");
			return true;
		  }
        }
		function validatePassport() {
		  var passport = $('#passport').val();

		  if(passport.length != 8 || passport[0] != 'P') {
			$('#passport-error').text("Please enter a valid Passport number.");
			return false;
		  } else {
			$('#passport-error').text("");
			return true;
		  }
		}
		function validatePassword() {
		  var password = $('#password').val();

		  if(password.length < 8 || /\s/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password)) {
			$('#password-error').text("Please enter a valid password.");
			return false;
		  } else {
			$('#password-error').text("");
			return true;
		  }
		}
		function validateConfirmPassword() {
          var password = $('#password').val();
		  var confirmPassword = $('#confirm-password').val();

		  if(password != confirmPassword) {
			$('#confirm-password-error').text("Passwords do not match.");
			return false;
		  } else {
			$('#confirm-password-error').text("");
			return true;
		  }
		}
		$(document).ready(function() {
		  $('#reset-btn').click(function() {
			alert("Are you sure you want to reset the form?");
		  });
		});
		
		$(document).ready(function() {
  $('form').submit(function(event) {
    // Prevent form submission
    event.preventDefault();
    
    // Validate form fields
    var errorFound = false;
    
    // Validate City field
    var city = $('#city').val();
    if (city === '') {
      $('#city_error').text('Please enter a city.').show();
      errorFound = true;
    } else {
      $('#city_error').hide();
    }
    
    // Validate Mobile field
    var mobile = $('#mobile').val();
    if (/^[5]\d{7}$/.test(mobile) === false) {
      $('#mobile_error').text('Please enter a valid mobile number starting with 5 and containing 8 digits.').show();
      errorFound = true;
    } else {
      $('#mobile_error').hide();
    }
    
    // Validate Email field
    var email = $('#email').val();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) === false) {
      $('#email_error').text('Please enter a valid email address.').show();
      errorFound = true;
    } else {
      $('#email_error').hide();
    }
    
    // Validate DOB field
    var dob = $('#dob').val();
    var age = moment().diff(moment(dob, 'YYYY-MM-DD'), 'years');
    if (age < 18) {
      $('#dob_error').text('You must be 18 years or older to register.').show();
      errorFound = true;
    } else {
      $('#dob_error').hide();
    }
    
    // Validate NIC field
    var nic = $('#nic').val();
    var dobPart = nic.substring(0, 6);
    var lastname = $('#lastname').val();
    var lastnameInitial = lastname.substring(0, 1);
    if (nic.length !== 14 || nic.substring(0, 1) !== lastnameInitial || moment(dobPart, 'YYMMDD').isValid() === false) {
      $('#nic_error').text('Please enter a valid NIC number.').show();
      errorFound = true;
    } else {
      $('#nic_error').hide();
    }
    
    // Validate Passport field
    var passport = $('#passport').val();
    if (/^[P]\w{7}$/.test(passport) === false) {
      $('#passport_error').text('Please enter a valid passport number starting with the letter P and containing 8 characters.').show();
      errorFound = true;
    } else {
      $('#passport_error').hide();
    }
    
    // Validate Password field
    var password = $('#password').val();
    var confirmPassword = $('#confirm_password').val();
    if (password.length < 8 || /\s/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password)) {
      $('#password_error').text('Please enter a valid password with at least 8 characters, no spaces, an uppercase letter, and a number.').show();
      errorFound = true;
    } else {
      $('#password_error').hide();
    }
    
    // Validate Confirm Password field
    if (password !== confirmPassword) {
      $('#confirm_password_error').text('Passwords do not match.').show();
      errorFound = true;
    } else {
      $('#confirm_password_error').hide();
    }
    
			$(document).ready(function() {
		  
		  $('#registration-form').on('submit', function(event) {
			
			if (!$('#terms-and-conditions').is(':checked')) {
			 
			  alert('Please agree to the terms and conditions.');
			  // Prevent form submission
			  event.preventDefault();
			}
		  });
		});
		
	





</script> 