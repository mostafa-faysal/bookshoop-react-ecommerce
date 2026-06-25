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

// const booksContainer = document.querySelector(".books-container");
// function displayData(books) {
//   books.length > 0
//     ? books.forEach((book) => {
//         booksContainer.innerHTML += `
//     // <div class="col-lg-4 col-md-6 col-sm-12">
//     //     <div class="card p-3">

//     //        <div class="book-image">
//     //             <img src=${book.image} class="card-img-top" alt=${book.title}>
//     //         </div>
//     //         <div class="card-body">
//     //             <h5 class="card-title title" >${book.title}</h5>
//     //             <p class="card-text description">
//     //                 ${book.description}
//     //             </p>
//     //             <p class="card-text text-success fw-bold fs-4">
//     //                 ${book.price}
//     //             </p>
//     //             <div class="d-flex">
//     //                 <a href="#" class="main-btn flex-grow-1 text-center">Add To Cart</a>
//     //             </div>
//     //         </div>
//     //     </div>
//     // </div>
//         `;
//       })
//     : (document.querySelector(".books-container").innerHTML =
//         `<h2>No Products</h2>`);
// }
const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
  const header = accordion.querySelector('.accordion-header');
  const content = accordion.querySelector('.accordion-content');
  const icon = accordion.querySelector('.accordion-icon');

  header.addEventListener('click', function() {
    content.classList.toggle('active');
    icon.classList.toggle('active');
  });
});