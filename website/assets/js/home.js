import products from "../products/products.json" with { type: "json" };
if (window.location.pathname === `${Config.PATHNAME}/home`) {
  const productsContainer = $("#featured-products-section");

  //variables
  var filteredList = [];

  //methods
  const fetchProducts = () => {
    filteredList = products?.filter((x) => x?.featured === true);
    buildProductsList();
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

  $(document).ready(() => {
    fetchProducts();
  });
}
