if (
  window.location.pathname === `${Config.PATHNAME}/home` ||
  window.location.pathname === `${Config.PATHNAME}/products`
) {
  /* product catalog */
  const buttonGetCatalog = $("#btn-get-catalog");
  const inputEmail = $("#user-email-catalog");
  const feedbackContainer = $("#catalog-feedback-container");

  //listeners
  buttonGetCatalog.click(() => {
    if (validateCatalogForm()) {
      getCatalog();
    }
  });

  const validateCatalogForm = () => {
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

    return true;
  };

  const getCatalog = () => {
    var formData = new FormData();
    formData.append("email", cleanInput(inputEmail.val().trim()));
    formData.append("token", "HadksljlHKASdj123SDLAJFD!133");

    var req = $.ajax({
      url: "./api/sendProductCatalog.php",
      method: "POST",
      dataType: "json",
      cache: false,
      contentType: false,
      processData: false,
      data: formData,
      beforeSend: () => {
        buttonGetCatalog.attr("disabled", "true");
        buttonGetCatalog.html("LOADING...");
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
            buttonGetCatalog.removeAttr("disabled");
            buttonGetCatalog.html("GET CATALOG");
            buttonGetCatalog.css("display", "none");
            //clear form
            inputEmail.val("");
            break;
          case "error":
            feedbackContainer.addClass("text-error");
            feedbackContainer.html(`${responseJSON?.data}`);
            buttonGetCatalog.removeAttr("disabled");
            buttonGetCatalog.html("GET CATALOG");
            break;
          default:
            feedbackContainer.addClass("text-error");
            feedbackContainer.html(`An error occurred, something went wrong.`);
            buttonGetCatalog.removeAttr("disabled");
            buttonGetCatalog.html("GET CATALOG");
        }
      } catch (e) {
        feedbackContainer.addClass("text-error");
        feedbackContainer.html(`An error occurred, something went wrong.`);
        buttonGetCatalog.removeAttr("disabled");
        buttonGetCatalog.html("GET CATALOG");
      }
    });

    req.fail((error, textStatus) => {
      feedbackContainer.addClass("text-error");
      console.log("***************", error);
      feedbackContainer.html(`An error occurred, something went wrong.`);
      buttonGetCatalog.removeAttr("disabled");
      buttonGetCatalog.html("GET CATALOG ");
    });
  };

  /* product catalog */
}
