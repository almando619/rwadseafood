<!DOCTYPE html>
<html lang="en">

<head>
    <?php include_once("components/header-imports.php") ?>
    <title>RWAD :: Home</title>
</head>

<body id="">
    <?php include_once("components/top-bar.php") ?>
    <div class="main-container">
        <!-- home cover -->
        <div id="home-cover">
            <video id="background-video" autoplay loop muted poster="./assets/images/fish1_1.jpg">
                <source src="./assets/videos/video_1.mp4" type="video/mp4">
            </video>
            <div id="video-filter"></div>
            <div class="home-cover-content">
                <img src="./assets/icons/logo.png" alt="">
                <h2>RWAD AL-IBTIKAR CO L.L.C</h2>
                <h3>Seafood Producer</h3>
                <h3>Excellent Services, Quality Products</h3>
            </div>
        </div>

        <!-- about section -->
        <div id="about-section" class="flex-row">
            <div id="left" class="container-50">
                <h2>Our Story</h2>
                <p id="str-home-about-us">
                    Rwad Al-Ibtikar Co. L.L.C stands as a premier manufacturer, exporter, and importer of
                    superior-quality seafood, nestled in the Sultanate of Oman. Our state-of-the-art processing facility,
                    strategically located in the Mabella industrial area, is where our commitment to excellence takes form.
                </p>
                <a href="about">
                    <div class="shader"></div>
                    <div class="text">MORE ABOUT US</div>
                </a>
            </div>
            <div class="container-50" id="right"></div>
        </div>
    </div>
    <?php include_once("components/footer.php") ?>
    <?php include_once("components/script-imports.php") ?>
</body>

</html>