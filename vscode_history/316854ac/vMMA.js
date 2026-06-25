// Swiper

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 5,
});

const getAllData = () => {
  fetch("https://api.codingarabic.online/api/books")
    .then((res) => res.json())
    .then((data) => {
      displayData(data.data);
    });
};

getAllData();

const getAllCategories = () => {
  fetch("https://bookstore.eraasoft.pro/api/category")
    .then((res) => res.json())
    .then((data) => {
      displayCategories(data.data.items);
    });
};

getAllCategories();

function displayCategories(categories) {
  categories.forEach((category) => {
    document.querySelector(".swiper-wrapper").innerHTML += `
         <div class="swiper-slide swiper-category ">${category.categoryName}</div>
    `;    category.onclick = () => {
      category.classList.toggle("background")
    }
  });
  let allCategories = document.querySelector(".swiper-wrapper");
  allCategories.addEventListener("click", function (e) {
    if (e.target.classList.contains("swiper-category")) {
      let allCategories = document.querySelectorAll(".swiper-category");
      allCategories.forEach(item => {
        item.classList.remove("background")
        e.target.classList.add("background")
      });
    }
  });
}

const booksContainer = document.querySelector(".books-container");
function displayData(books) {
  books.length > 0
    ? books.forEach((book) => {
        booksContainer.innerHTML += `
    <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card p-3">
  <section class="about-section">
    <h2 class="recomended">Recomended For You</h2>
    <div class=" container-about">
      <div class="row g-3">
        <div class="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
          <div class="book-container d-flex flex-row ">
            <div class="img-book">
              <img src="./images/Poor-Dad.png" alt="Book 1" />
            </div>
            <div class="about-container">
              <div class="about-content">
                <h2>Rich Dad And Poor Dad</h2>
                <p class="name"><span>Author:</span> Robert Kiyosaki</p>
                <p class="discriptions">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies
                  est. Aliquam in justo varius,
                  sagittis neque ut, malesuada leo. Aliquam in justo varius, Aliquam in justo varius,</p>
              </div>
              <div class="review-container d-flex">
                <div class="review">
                  <p class="rate"> <img src="./images/rate.png" alt="rate"><span>(180 Review)</span></p>
                  <div class="d-flex">
                    <p class="rate-dgr">Rate:</p>
                    <span class="rate-dgr-number">4.2</span>
                  </div>
                </div>
                <p class="salary">$30.00</p>
              </div>
              <div class="button-container">
                <button class="primary-btn add-to">Add to Cart<img class="m-2" src="./images/basket.png"
                    alt="basket"></button>
                <button class="primary-btn btn-favorite"><img src="./images/fav.png" alt="favorite"> </button>
              </div>

            </div>
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
          <div class="book-container d-flex flex-row ">
            <div class="img-book">
              <img src="./images/Poor-Dad.png" alt="Book 1" />
            </div>
            <div class="about-container">
              <div class="about-content">
                <h2>Rich Dad And Poor Dad</h2>
                <p class="name"><span>Author:</span> Robert Kiyosaki</p>
                <p class="discriptions">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies
                  est. Aliquam in justo varius,
                  sagittis neque ut, malesuada leo. Aliquam in justo varius, Aliquam in justo varius,</p>
              </div>
              <div class="review-container d-flex">
                <div class="review">
                  <p class="rate"> <img src="./images/rate.png" alt="rate"><span>(180 Review)</span></p>
                  <div class="d-flex">
                    <p class="rate-dgr">Rate:</p>
                    <span class="rate-dgr-number">4.2</span>
                  </div>
                </div>
                <p class="salary">$30.00</p>
              </div>
              <div class="button-container">
                <button class="primary-btn add-to">Add to Cart<img class="m-2" src="./images/basket.png"
                    alt="basket"></button>
                <button class="primary-btn btn-favorite"><img src="./images/fav.png" alt="favorite"> </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
           <div class="book-image">
                <img src=${book.image} class="card-img-top" alt=${book.title}>
            </div>
            <div class="card-body">
                <h5 class="card-title title" >${book.title}</h5>
                <p class="card-text description">
                    ${book.description}
                </p>
                <p class="card-text text-success fw-bold fs-4">
                    ${book.price}
                </p>
                <div class="d-flex">
                    <a href="#" class="main-btn flex-grow-1 text-center">Add To Cart</a>
                </div>
            </div>
        </div>
    </div>
        `;
      })
    : (document.querySelector(".books-container").innerHTML =
        `<h2>No Products</h2>`);
}
