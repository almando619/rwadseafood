import products from "../products/products.json" with { type: "json" };

if (window.location.pathname === `${Config.PATHNAME}/products`) {
  const searchParams = new URLSearchParams(window.location.search);

  const categoryAll = $("#category-all");
  const categoryLargePelagics = $("#category-large-pelagics");
  const categorySmallPelagics = $("#category-small-pelagics");
  const categoryDemersal = $("#category-demersal");
  const categorySharks = $("#category-sharks");
  const categoryCrustaceans = $("#category-crustaceans");

  const inputSearch = $("#input-product-search");
  const productsContainer = $(".products-container");
  const btnClearSearch = $("#icon-clear-input");

  //variables

  var category;
  var filteredList = [];
  var searchQuery = false;

  //event listeners
  const addCategoryItemsClickListeners = () => {
    const _categories = [
      "all",
      "large-pelagics",
      "small-pelagics",
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

  inputSearch.on("keyup", (e) => {
    let val = e?.target?.value;
    searchQuery = !val?.trim() === "";
    fetchProducts();
  });

  btnClearSearch.click(() => {
    inputSearch?.val("");
    fetchProducts();
  });

  //methods
  const unselectAllCategories = () => {
    inputSearch?.val("");
    categoryAll.removeClass("active-category");
    categoryLargePelagics.removeClass("active-category");
    categorySmallPelagics.removeClass("active-category");
    categoryDemersal.removeClass("active-category");
    categorySharks.removeClass("active-category");
    categoryCrustaceans.removeClass("active-category");
  };

  const fetchProducts = () => {
    if (category === "all") {
      if (searchParams) {
        filteredList = products.filter(
          (x) =>
            x?.name?.["en"]
              ?.toLowerCase()
              ?.includes(inputSearch?.val()?.toLowerCase()) ||
            x?.species
              ?.toLowerCase()
              ?.includes(inputSearch?.val()?.toLowerCase())
        );
      } else {
        filteredList = products;
      }
    } else {
      if (searchParams) {
        filteredList = products.filter(
          (x) =>
            x.category === category &&
            (x?.name?.["en"]
              ?.toLowerCase()
              ?.includes(inputSearch?.val()?.toLowerCase()) ||
              x?.species
                ?.toLowerCase()
                ?.includes(inputSearch?.val()?.toLowerCase()))
        );
      } else {
        filteredList = products.filter((x) => x.category === category);
      }
    }
    buildProductsList();
  };

  const selectCategory = (cat) => {
    unselectAllCategories();
    category = cat;
    $(`#category-${cat}`).addClass("active-category");
    fetchProducts();
  };

  const buildProductsList = () => {
    productsContainer.html("");
    let html = ``;
    if (filteredList?.length === 0) {
      html = `
         <div style="height:200px" class="flex-row align-items-center justify-content-center text-muted" >🐠Oops, Nothing found. 👀</div>
      `;
    }
    filteredList.forEach((product) => {
      html = `${html}
      <div class="product-item" id="product-item-${product?.id}">
          <div class="img-container">
              <img src="${product?.image}" alt="${product?.name?.en}">
          </div>
          <div class="name">
          ${product?.name?.en}
            <div class="species">Species : ${product?.species}</div>
          </div>
          <div class="size-grades">
              <div class="title">
                  Size Grades
              </div>
              ${(() => {
                let _temp = ``;
                product?.grades?.forEach((grade) => {
                  _temp = `${_temp}
                   <div class="value">
                      <div class="bullet"></div>
                      ${grade}
                    </div>
                  `;
                });
                return _temp;
              })()}
          </div>
          <div class="value-added">
              <div class="title">
                  Value Added
              </div>
              <div class="value">
                  ${(() => {
                    let _temp = ``;
                    product?.value?.forEach((val, index) => {
                      _temp = `${_temp}${val}${
                        index !== product?.value?.length - 1 ? ", " : ""
                      }`;
                    });
                    return _temp;
                  })()}
              </div>
          </div>
      </div>
      `;
    });

    productsContainer.html(html);
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
