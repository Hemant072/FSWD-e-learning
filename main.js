$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(document).ready(function() {
  // Toggle menu on small screens
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });
});


$(document).ready(function() {
  // Validate contact form on submit
  $("#contact-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      message: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      name: {
        required: "Please enter your name",
        minlength: "Your name must consist of at least 2 characters"
      },
      email: {
        required: "Please enter your email address",
        email: "Please enter a valid email address"
      },
      message: {
        required: "Please enter your message",
        minlength: "Your message must consist of at least 10 characters"
      }
    },
    submitHandler: function(form) {
      // Send form data using AJAX
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function(response) {
          // Show success message
          $(".form-message").html("<div class='success-message'>Thank you for your message. We will get back to you soon.</div>");
          // Clear form fields
          $("#contact-form")[0].reset();
        },
        error: function() {
          // Show error message
          $(".form-message").html("<div class='error-message'>Oops! There was a problem submitting your form. Please try again.</div>");
        }
      });
    }
  });
});

