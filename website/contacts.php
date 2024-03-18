<!DOCTYPE html>
<html lang="en">

<head>
    <?php include_once("components/header-imports.php") ?>
    <title>RWAD :: Contacts</title>
</head>

<body id="">
    <?php include_once("components/top-bar.php") ?>
    <div class="main-container">
        <div id="contacts-cover">
            <h1 class="text-align-center">Contact Us</h1>
        </div>
        <div class="flex-row app-padding">
            <!-- form -->
            <div class="container-50 p-50">
                <h4 class="mb-20">Need to order our products, ask a question or simply say hi? Don't hesitate to message us!</h4>
                <div class="app-form flex-row mb-50">
                    <div class="container-100">
                        <div id="contact-img">
                            <img src="./assets/icons/contact_us.png" alt="">
                        </div>
                    </div>
                    <div class="container-50 p-5">
                        <div class="form-input">
                            <label for="first-name">First Name *</label>
                            <input type="text" required name="first-name" id="first-name">
                        </div>
                    </div>
                    <div class="container-50 p-5">
                        <div class="form-input">
                            <label for="last-name">Last Name *</label>
                            <input type="text" required name="last-name" id="last-name">
                        </div>
                    </div>
                    <div class="container-50 p-5">
                        <div class="form-input">
                            <label for="email">Email *</label>
                            <input type="email" required name="email" id="email">
                        </div>
                    </div>
                    <div class="container-50 p-5">
                        <div class="form-input">
                            <label for="phone">Phone Number (optional)</label>
                            <input type="phone" name="phone" id="phone">
                        </div>
                    </div>
                    <div class="container-50 p-5">
                        <div class="form-input">
                            <label for="address">Address (optional)</label>
                            <input type="address" name="address" id="address">
                        </div>
                    </div>
                    <div class="container-50 p-5">
                        <div class="form-input">
                            <label for="enquiry-type">Enquiry Type</label>
                            <select name=enquiry-type id="enquiry-type">
                                <option value="order">Order a product</option>
                                <option value="question">Ask question</option>
                                <option value="complaint">Complaint</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div class="container-100 p-5">
                        <div class="form-input">
                            <label for="message">Message</label>
                            <textarea name="message" id="message"></textarea>
                        </div>
                    </div>
                    <div class="container-100  flex-column align-items-center justify-content-center ">
                        <div id="feedback-container"></div>
                        <button id="button-submit">
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
            <!-- form -->

            <!-- map -->
            <div class="container-50 p-50">
                <h3>Where to find us</h3>
                <iframe class="mb-50 mt-10" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d728.699860557837!2d58.09967066100349!3d23.652743376189303!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8de5145c55972b%3A0x34f2ec87fedd7335!2sFish%20factory!5e0!3m2!1sen!2stz!4v1702561324922!5m2!1sen!2stz" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <!-- map -->
        </div>
    </div>
    <?php include_once("components/footer.php") ?>
    <?php include_once("components/script-imports.php") ?>
</body>

</html>