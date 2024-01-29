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
                <h4>Seafood Processor</h4>
                <h4 class="mt-30">FROM OUR OCEANS TO YOUR TABLE</h4>
            </div>
        </div>

        <!-- about section -->
        <div class="app-padding mt-50 mb-20">
            <h2 class="text-align-center">Who We Are</h2>
        </div>

        <div id="about-section" class="flex-row">
            <div id="left" class="container-50">
                <h2>Our Story</h2>
                <p id="str-home-about-us">
                    Rwad Al-Ibtikar Co. L.L.C stands as a premier manufacturer, exporter, and importer of
                    superior-quality seafood, nestled in the Sultanate of Oman. Our state-of-the-art processing facility,
                    strategically located in the Mabella industrial area, is where our commitment to excellence takes form.
                </p>
                <a href="about" class="app-link-button">
                    <div class="shader"></div>
                    <div class="text">MORE ABOUT US</div>
                </a>
            </div>
            <div class="container-50" id="right"></div>
        </div>
        <!-- about section -->

        <!-- product categories -->
        <div class="app-padding mt-50 mb-20">
            <h2 class="text-align-center">Product Categories</h2>
        </div>

        <div id="product-categories-container" class="app-padding">
            <a href="products?category=large-pelagics" class="category-item">
                <div>
                    <img src="./assets/images/category_large_pelagics.jpg" alt="fish">
                    <div class="shader"></div>
                    <div class="title">Large Pelagics</div>
                </div>
            </a>
            <a href="products?category=small-pelagics" class="category-item">
                <div>
                    <img src="./assets/images/category_small_pelagics.jpg" alt="fish">
                    <div class="shader"></div>
                    <div class="title">Small Pelagics</div>
                </div>
            </a>
            <a href="products?category=demersal" class="category-item">
                <div>
                    <img src="./assets/images/category_demersal.jpg" alt="fish">
                    <div class="shader"></div>
                    <div class="title">Demersal</div>
                </div>
            </a>
            <a href="products?category=sharks" class="category-item">
                <div>
                    <img src="./assets/images/category_sharks.jpg" alt="fish">
                    <div class="shader"></div>
                    <div class="title">Sharks & Rays</div>
                </div>
            </a>
            <a href="products?category=crustaceans" class="category-item">
                <div>
                    <img src="./assets/images/category_crustaceans.jpg" alt="fish">
                    <div class="shader"></div>
                    <div class="title">Crustaceans</div>
                </div>
            </a>
        </div>
        <!-- product categories -->

        <!--  -->
        <div id="about-section-2" class="flex-row mt-100">
            <div class="container-50" id="left"></div>
            <div id="right" class="container-50">
                <h2>A Bounty of Fresh Seafood</h2>
                <p id="str-home-about-us">
                    Discover an array of premium seafood delicacies, sourced predominantly from the pristine waters of Oman.
                    From Grey Mullet to Trevally, Marlin to Tuna, our diverse selection is available fresh, frozen, or
                    expertly processed to meet your culinary preferences.
                </p>
                <a href="products" class="app-link-button">
                    <div class="shader"></div>
                    <div class="text"> <i class="fas fa-fish mr-5"></i>SEE PRODUCTS</div>
                </a>
            </div>
        </div>
        <!--  -->

        <!-- featured products -->
        <div class="app-padding mt-50 mb-20">
            <h2 class="text-align-center">Featured Products</h2>
        </div>

        <div id="featured-products-section" class="mb-100"></div>
        <!-- featured products -->

    </div>
    <?php include_once("components/footer.php") ?>
    <?php include_once("components/script-imports.php") ?>
</body>

</html>