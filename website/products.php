<!DOCTYPE html>
<html lang="en">

<head>
    <?php include_once("components/header-imports.php") ?>
    <title>RWAD :: Products</title>
</head>

<body id="">
    <?php include_once("components/top-bar.php") ?>
    <div class="main-container">
        <div id="products-cover">
            <h1 class="text-align-center">Our Products</h1>
        </div>

        <!-- categories container -->
        <div class="app-padding categories-container flex-row justify-content-center">
            <div class="product-category-chip" id="category-all">
                All
            </div>
            <div class="product-category-chip" id="category-large-pelagics">
                Large pelagics
            </div>
            <div class="product-category-chip" id="category-small-pelagics">
                Small pelagics
            </div>
            <div class="product-category-chip" id="category-demersal">
                Demersal
            </div>
            <div class="product-category-chip" id="category-sharks">
                Sharks & Rays
            </div>
            <div class="product-category-chip" id="category-crustaceans">
                Crustaceans
            </div>
        </div>
        <!-- categories container -->

        <!-- search container -->
        <div class="product-search-container flex-row justify-content-center mt-30 mb-20">
            <div class="icon-wrapper">
                <i class="fas fa-search"></i>
            </div>
            <div class="input-wrapper">
                <input type="text" id="input-product-search" placeholder="Search product by name">
                <div class="clear-input" id="icon-clear-input">
                    <i class="fas fa-times"></i>
                </div>
            </div>

        </div>
        <!-- search container -->

        <!-- products container -->
        <div class="products-container app-padding mb-100"></div>
        <!-- products container -->

        <!-- product catalog -->
        <div id="product-catalog" class="flex-row mt-100 mb-100">
            <div id="left" class="container-50">
                <h2>Get The Product Catalog</h2>
                <p id="str-home-about-us" class="text-align-center">
                    Need the PDF version of our products catalog for offline browsing?
                    Provide us your email and we'll be happy to send it in no time!
                </p>
                <div id="get-catalog-form" class="app-form full-width catalog-form mt-20 mb-20 flex-column">

                    <input type="email" name="user-email" id="user-email" placeholder="youremail@domain.ext" />
                    <div class="flex-row justify-content-center mt-10">
                        <button id="btn-get-catalog">GET CATALOG</button>
                    </div>
                </div>
            </div>
            <div class="container-50" id="right"></div>
        </div>
        <!-- product catalog -->

    </div>
    <?php include_once("components/footer.php") ?>
    <?php include_once("components/script-imports.php") ?>
</body>

</html>