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
                            <label for="phone">Phone Number (optional)</label>
                            <input type="phone" name="phone" id="phone">
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
                            <label for="address">Address (optional)</label>
                            <input type="address" name="address" id="address">
                        </div>
                    </div>
                    <div class="container-50 p-5">
                        <div class="form-input">
                            <label for="enquiry-type">Enquiry Type</label>
                            <input type="enquiry-type" required name="enquiry-type" id="enquiry-type">
                        </div>
                    </div>
                    <div class="container-100 p-5">
                        <div class="form-input">
                            <label for="enquiry-type">Message</label>
                            <textarea name="message" id="message"></textarea>
                        </div>
                    </div>
                    <div class="container-100  flex-row justify-content-center ">
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
                <iframe class="mb-50 mt-10" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36688.18291615615!2d58.07200756596166!3d23.646875033878608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8de41de1ea537d%3A0xd4bfc9d36553eb51!2sMa&#39;abilah%20Industrial%20Area%2C%20Seeb%2C%20Oman!5e0!3m2!1sen!2stz!4v1702548117720!5m2!1sen!2stz" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <!-- map -->
        </div>
    </div>
    <?php include_once("components/footer.php") ?>
    <?php include_once("components/script-imports.php") ?>
</body>

</html>