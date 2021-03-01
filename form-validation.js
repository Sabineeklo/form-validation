// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='booking']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        Name: "required",
        datetime: "required",
        phonenumber: "required",
        location: "required",
        department: "required",
        exampleFormControlTextarea1: {
            required: true
          }
      },
      // Specify validation error messages
      messages: {
        Name: "Please enter your firstname",
        datetime: "Please enter the date and time",
        phonenumber: "Please enter your phone number",
        location: "Please enter your location",
        department: "Please enter the department",
        exampleFormControlTextarea1: {
            required: "",
          }
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });