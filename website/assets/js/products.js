if (window.location.pathname === `${Config.PATHNAME}/products`) {
  const searchParams = new URLSearchParams(window.location.search);

  const categoryAll = $("#category-all");
  const categoryLargePellagics = $("#category-large-pellagics");
  const categorySmallPellagics = $("#category-small-pellagics");
  const categoryDemersal = $("#category-demersal");
  const categorySharks = $("#category-sharks");
  const categoryCrustaceans = $("#category-crustaceans");

  var category;

  //methods
  const unselectAllCategories = () => {
    $("#category-all").removeClass("active-category");
    $("#category-large-pellagics").removeClass("active-category");
    $("#category-small-pellagics").removeClass("active-category");
    $("#category-demersal").removeClass("active-category");
    $("#category-sharks").removeClass("active-category");
    $("#category-crustaceans").removeClass("active-category");
  };

  const selectCategory = (cat) => {
    unselectAllCategories();
    category = cat;
    $(`#category-${cat}`).addClass("active-category");
  };

  const addCategoryItemsClickListeners = () => {
    const _categories = [
      "all",
      "large-pellagics",
      "small-pellagics",
      "demersal",
      "sharks",
      "crustaceans",
    ];
    _categories?.forEach((_cat) => {
      $(`#category-${_cat}`).click(() => {
        selectCategory(_cat);
      });
    });
  };

  //set initial active category
  $(document).ready(() => {
    //add event listeners
    addCategoryItemsClickListeners();
    selectCategory(
      !searchParams.has("category") ? "all" : searchParams.get("category")
    );
  });
}
