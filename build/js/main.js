const mainMenu = document.getElementById('main-menu')
const body = document.querySelector('body')
const header = document.querySelector('header')
const basicMenu = document.getElementById('basic-menu')
const burger = document.getElementById('burger');
const menu = document.getElementById('header_menu');
const hamburgerBtn = document.getElementById('hamburger-button')
const backToMenu = document.getElementById('back-to-menu')
const dark = document.getElementById('dark')
const btnContact = document.getElementById('contact-details')
const contactForm = document.getElementById('contact-form') 
const btnContactForm = document.getElementById('button-close') //button-close
const dropMenu = document.getElementById('dropmenu')
const discusProject = document.getElementById('discuss-project')

const toggleMenu = () => {
    mainMenu.classList.toggle('hidden')
    mainMenu.classList.toggle('show-mobile-menu')
    hamburgerBtn.classList.toggle('toggle-btn')
    basicMenu.classList.toggle('min-h-[500px]')
    body.classList.toggle('body-bg')
    header.classList.toggle('md:w-[465px]') 
    header.classList.toggle('md:left-full')
    header.children[0].classList.toggle('md:px-7')  
    hamburgerBtn.parentElement.classList.toggle('md:pl-9')
    dark.classList.toggle('md:hidden')
    dropMenu.classList.toggle('md:w-[465px]')
}

//Когда клbкаем по анкору/ссылке в мобильном меню, то закрываем его
const showDropMenu = (e) => {
    if (e.target.nextElementSibling == null) {
        mainMenu.classList.toggle('hidden')
        mainMenu.classList.toggle('show-mobile-menu')
        hamburgerBtn.classList.toggle('toggle-btn') 
        basicMenu.classList.toggle('min-h-[500px]')
        body.classList.toggle('body-bg')
        header.classList.toggle('md:w-[465px]') 
        header.classList.toggle('md:left-full')
        header.children[0].classList.toggle('md:px-7') 
        hamburgerBtn.parentElement.classList.toggle('md:pl-9')
        dark.classList.toggle('md:hidden')
        dropMenu.classList.toggle('md:w-[465px]')
    } else {
        e.target.nextElementSibling.classList.toggle('left-[200%]')
    }
}
basicMenu.addEventListener('click', showDropMenu)

//Скрываем мобильное меню, если оно открыто при изминении ширины body > 1279px
const hiddenMobileMenu = () => {
  if (window.innerWidth > 1279) {
      if (mainMenu.classList.contains('show-mobile-menu') && body.classList.contains('body-bg')) {
          hamburgerBtn.classList.toggle('toggle-btn')
          mainMenu.classList.remove('show-mobile-menu')
          mainMenu.classList.add('hidden')
          body.classList.remove('body-bg')
          header.classList.remove('md:w-[465px]') 
          header.classList.remove('md:left-full')
          header.children[0].classList.remove('md:px-7')  
          basicMenu.classList.remove('min-h-[500px]')
          dropMenu.classList.remove('md:w-[465px]')
          dark.classList.toggle('md:hidden')
      }
  }
};
window.addEventListener("resize", hiddenMobileMenu)

//let`s talk
const getContactForm = () => {
    if (mainMenu.classList.contains('show-mobile-menu')) {
       hamburgerBtn.classList.toggle('toggle-btn')
          mainMenu.classList.remove('show-mobile-menu')
          mainMenu.classList.add('hidden')
          body.classList.remove('body-bg')
          header.classList.remove('md:w-[465px]') 
          header.classList.remove('md:left-full')
          header.children[0].classList.remove('md:px-7')  
          basicMenu.classList.remove('min-h-[500px]')
          dropMenu.classList.remove('md:w-[465px]')
          dark.classList.toggle('md:hidden')
    }
    contactForm.classList.toggle('left-[200%]')
    body.classList.toggle('body-bg')
}

btnContact.addEventListener('click', getContactForm)
btnContactForm.addEventListener('click', getContactForm)
discusProject.addEventListener('click', getContactForm)
hamburgerBtn.addEventListener('click', toggleMenu)
backToMenu.addEventListener('click', (e) => {
    e.target.parentElement.classList.toggle('left-[200%]')
})
//btnContact.addEventListener('click', getContactForm)
//btnContactForm.addEventListener('click', getContactForm)

//ACCORDION
const acc = document.querySelectorAll(".accordion")
const bodyAccAll = document.querySelectorAll(".body-accordion")

acc.forEach(accordion => {
  accordion.addEventListener("click", () => {
    
    if (!accordion.classList.contains("text-base-red")) {
      bodyAccAll.forEach(bodyAcc => {
        if (!bodyAcc.classList.contains("max-h-0")) {
          bodyAcc.classList.add("max-h-0")
          bodyAcc.previousElementSibling.classList.remove("text-base-red")
          bodyAcc.previousElementSibling.children[1].classList.remove("toggle-plus");
        }
      })
    } 
    const bodyAссCurrent = accordion.nextElementSibling
    accordion.children[1].classList.toggle("toggle-plus"); //при клике +/-
    accordion.classList.toggle("text-base-red"); //при клике цвет заголовка красный/черный
    bodyAссCurrent.classList.toggle("max-h-0")      
  })
})

const titleArticles = document.querySelectorAll('.title-article')
//const bodyArticleAll = document.querySelectorAll('.body-article')

titleArticles.forEach(titleArticle => {
titleArticle.addEventListener('click', () => {
    const bodyArticle = titleArticle.nextElementSibling
    bodyArticle.classList.toggle('max-h-0')
})
})


//remove menu at scroll down and add menu at scroll up
let lastKnownScrollPosition = 0;
let ticking = false;
let newScrollPosition = 0;

function doSomething(scrollPos) {
  if (scrollPos > newScrollPosition) {
    if (header.classList.contains('top-0')) {
      header.classList.remove('top-0')
      header.classList.add('opacity-0')
    } 
  } else {
    if (!header.classList.contains('top-0')) {
      header.classList.add('top-0')
      header.classList.remove('opacity-0')
    }
  }
  newScrollPosition = scrollPos
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});

//cookies 
const cookiesAcceptBtn = document.getElementById('cookies-accept-btn')
const cookiesWindow = document.getElementById('cookies-window')

cookiesAcceptBtn.addEventListener('click', () => {
  cookiesWindow.classList.remove('flex')
  cookiesWindow.classList.add('hidden')
  localStorage.setItem('cookiesAccepted', 'yes')
})

setTimeout(() => {
  let cookiesAccepted = localStorage.getItem('cookiesAccepted')
  if (cookiesAccepted != 'yes') {
    cookiesWindow.classList.remove('hidden')
    cookiesWindow.classList.add('flex')    
  }
}, 2000)

//Dark templates

const html = document.querySelector('html')
const moon = document.getElementById('moon')
const sun = document.getElementById('sun')

const switchTemplate = () => {
  html.classList.toggle('dark')  
  sun.classList.toggle('hidden')
  moon.classList.toggle('hidden')
}

dark.addEventListener('click', switchTemplate)

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

var swiper = new Swiper(".swiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});
swiper.slideNext();