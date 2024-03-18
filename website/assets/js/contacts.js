if (window.location.pathname === `${Config.PATHNAME}/contacts`) {
  const inputFirstName = $("#first-name");
  const inputLastName = $("#last-name");
  const inputPhone = $("#phone");
  const inputEmail = $("#email");
  const inputAddress = $("#address");
  const inputEnquiryType = $("#enquiry-type");
  const inputMessage = $("#message");
  const feedbackContainer = $("#feedback-container");
  const buttonSubmit = $("#button-submit");

  //listeners
  buttonSubmit.click(() => {
    if (validateForm()) {
      postMessage();
    }
  });

  //methods
  const validateForm = () => {
    if (isEmpty({ value: inputFirstName.val() })) {
      alert("Please provide first name");
      return false;
    }
    if (isEmpty({ value: inputLastName.val() })) {
      alert("Please provide last name");
      return false;
    }
    if (isEmpty({ value: inputEmail.val() })) {
      alert("Please provide email address");
      return false;
    }
    let emailRe =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRe.test(inputEmail.val())) {
      alert("Email address provided is invalid");
      return false;
    }
    if (isEmpty({ value: inputMessage.val() })) {
      alert("Please your message");
      return false;
    }
    return true;
  };

  const clearForms = () => {
    inputFirstName.val("");
    inputLastName.val("");
    inputEmail.val("");
    inputPhone.val("");
    inputAddress.val("");
    inputMessage.val("");
  };

  //api calls
  const postMessage = () => {
    alert("here");
    var formData = new FormData();
    formData.append("firstName", cleanInput(inputFirstName.val().trim()));
    formData.append("lastName", cleanInput(inputLastName.val().trim()));
    formData.append("message", cleanInput(inputMessage.val().trim()));
    formData.append("email", cleanInput(inputEmail.val().trim()));
    formData.append("phone", cleanInput(inputPhone.val().trim()));
    formData.append("address", cleanInput(inputAddress.val().trim()));
    formData.append(
      "enquiryType",
      cleanInput(inputEnquiryType.find(":selected").val())
    );
    formData.append("token", "3123tREARJajdhdQWajZZE");

    console.log("***********", formData);

    var req = $.ajax({
      url: "./api/sendEnquiry.php",
      method: "POST",
      dataType: "json",
      cache: false,
      contentType: false,
      processData: false,
      data: formData,
      beforeSend: () => {
        buttonSubmit.attr("disabled", "true");
        buttonSubmit.html("LOADING...");
        feedbackContainer.removeClass("text-error");
        feedbackContainer.removeClass("text-success");
        feedbackContainer.html("");
      },
    });

    req.done((data) => {
      try {
        const responseJSON = { ...data };
        switch (responseJSON.message) {
          case "success":
            feedbackContainer.addClass("text-success");
            feedbackContainer.html(`${responseJSON?.data}`);
            buttonSubmit.removeAttr("disabled");
            buttonSubmit.html("SUBMIT");
            buttonSubmit.css("display", "none");
            clearForms();
            break;
          case "error":
            feedbackContainer.addClass("text-error");
            feedbackContainer.html(`${responseJSON?.data}`);
            buttonSubmit.removeAttr("disabled");
            buttonSubmit.html("SUBMIT");
            break;
          default:
            feedbackContainer.addClass("text-error");
            feedbackContainer.html(`An error occurred, something went wrong.`);
            buttonSubmit.removeAttr("disabled");
            buttonSubmit.html("SUBMIT");
        }
      } catch (e) {
        feedbackContainer.addClass("text-error");
        feedbackContainer.html(`An error occurred, something went wrong.`);
        buttonSubmit.removeAttr("disabled");
        buttonSubmit.html("SUBMIT");
      }
    });

    req.fail((error, textStatus) => {
      feedbackContainer.addClass("text-error");
      console.log("***************", error);
      feedbackContainer.html(`An error occurred, something went wrong.`);
      buttonSubmit.removeAttr("disabled");
      buttonSubmit.html("SUBMIT");
    });
  };
}
