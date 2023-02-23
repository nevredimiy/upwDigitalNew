//Swiper
var swiper = new Swiper(".swiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});
swiper.slideNext();

// Создаем новый observer (наблюдатель)
let btnElement = document.querySelector('.btn-element')
let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
// Выводим в консоль true (если элемент виден) или false (если нет)
      console.log(entry.isIntersecting);
      
        if (entry.isIntersecting) {
        btnElement.classList.add('sticky') 
      }     
      if (!entry.isIntersecting) {
        btnElement.classList.remove('sticky') 
      }    
      
      
    });
});

// Задаем элемент для наблюдения
let el1 = document.getElementById('element1');
// Прикрепляем его к «наблюдателю»
observer.observe(el1);