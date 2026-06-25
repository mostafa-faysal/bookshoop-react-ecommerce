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
    `;
    category.onclick = () => {
      category.classList.toggle("background");
    };
  });
  let allCategories = document.querySelector(".swiper-wrapper");
  allCategories.addEventListener("click", function (e) {
    if (e.target.classList.contains("swiper-category")) {
      let allCategories = document.querySelectorAll(".swiper-category");
      allCategories.forEach((item) => {
        item.classList.remove("background");
        e.target.classList.add("background");
      });
    }
  });
}

// const booksContainer = document.querySelector(".books-container");
// function displayData(books) {
//   books.length > 0
//     ? books.forEach((book) => {
//         booksContainer.innerHTML += `
//     <div class="card d-flex flex-row" >
  <div class="img-container">

    <img src="./images/Poor-Dad.png " class="card-img-top" alt="...">
  </div>
  <div class="card-body d-flex">
    <div class="side-card-left col-8">
      <h5 class="card-title">Rich Dad And Poor Dad</h5>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius,
         sagittis neque ut, malesuada leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.</p>
                         <div class="review">
                  <p class="rate"> <img src="./images/rate.png" alt="rate"><span>(180 Review)</span></p>
                  <div class="d-flex row">
                    <p class="rate-dgr ">Rate: <span class="rate-dgr-number col-6">4.2</span></p>
                  </div>
                                      <p class="rate-dgr col-12 d-flex justify-content-between mt-3">Author: <span class="rate-dgr-number col-6">year</span>   </p>
                                        <p class="rate-dgr col-12 d-flex justify-content-between">Robert T. Kiyosaki: <span class="rate-dgr-number col-6">1997</span>   </p>
                </div> 
    </div>
    <div class="side-card-right col-4 d-flex flex-column align-items-end justify-content-end">
      <p class="salary"> $40.00</p>
      <div class="btn-grope">
        <button class="add-to-card">Add To Cart <i class="fa-solid fa-cart-shopping"></i> </button>
        <button class="btn-favourit"><i class="fa-regular fa-heart"></i></button>
      </div>

    </div>
  </div>
</div>
//         `;
//       })
//     : (document.querySelector(".books-container").innerHTML =
//         `<h2>No Products</h2>`);
// }