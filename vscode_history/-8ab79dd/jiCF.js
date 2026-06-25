let logOutBtns = document.querySelectorAll(".logout");

logOutBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    if (typeof Cookies !== 'undefined') {
      Cookies.remove("token");
    }
    window.location.assign("after-login.html");
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const splideEl = document.querySelector('.splide');
  if (splideEl) {
    const splide = new Splide('.splide', {
      type: 'loop',
      arrows: false,
      focus: 'center',
      perPage: 7,
      autoScroll: {
        speed: 1,
      },
      breakpoints: {
        992: {
          perPage: 5,
        },
        768: {
          perPage: 3,
        },
        576: {
          perPage: 2,
        },
        365: {
          perPage: 1,
        }
      }
    });

    splide.mount(window.splide.Extensions);
  }
});

(function () {
  const track = document.getElementById("flashSaleTrack");
  const prevBtn = document.getElementById("flashSalePrev");
  const nextBtn = document.getElementById("flashSaleNext");

  if (!track) return;

  // عدد الكارتات الظاهرة حسب عرض الشاشة
  // >= 1000px  ← 2 كارت
  // < 1000px   ← 1 كارت
  function getVisibleCount() {
    return window.innerWidth >= 1000 ? 2 : 1;
  }

  let currentIndex = 0;

  function getCards() {
    return Array.from(track.querySelectorAll(".card-swiper"));
  }

  function updateSwiper() {
    const cards = getCards();
    if (cards.length === 0) return;

    const visible = getVisibleCount();
    const total = cards.length;
    const maxIndex = Math.max(0, total - visible);

    // Clamp
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    if (currentIndex < 0) currentIndex = 0;

    // عرض كارت واحد + الـ gap
    const gap = parseInt(getComputedStyle(track).gap) || 24;
    const cardWidth = cards[0].offsetWidth + gap;

    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    // تعطيل الأزرار عند الحدود إذا كانت موجودة
    if (prevBtn) prevBtn.disabled = currentIndex === 0;
    if (nextBtn) nextBtn.disabled = currentIndex >= maxIndex;
  }

  // إعداد الـ track
  track.style.transition = "transform 0.35s ease";
  track.style.willChange = "transform";
  // أضف مستمعي النقر لأزرار Prev/Next إن وُجدت
  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      currentIndex = Math.max(currentIndex - 1, 0);
      updateSwiper();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      const cards = getCards();
      const visible = getVisibleCount();
      const maxIndex = Math.max(0, cards.length - visible);
      currentIndex = Math.min(currentIndex + 1, maxIndex);
      updateSwiper();
    });
  }

  // إعادة حساب عند تغيير حجم الشاشة
  window.addEventListener("resize", function () {
    currentIndex = 0;
    updateSwiper();
  });

  // تشغيل أول مرة بعد ما الصفحة تتحمل كاملاً
  window.addEventListener("load", updateSwiper);
  updateSwiper();
})();
