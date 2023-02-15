//burger menu
const burger = document.getElementById('burger');
const menu = document.getElementById('header_menu');

const initApp = () => {
  const hamburgerBtn = document.getElementById('hamburger-button')
  const mobileMenu = document.getElementById('mobile-menu')
  const mainMenu = document.getElementById('main-menu')
  const backToMenu = document.getElementById('back-to-menu')
  const body = document.querySelector('body')
  const header = document.querySelector('header')
  const letsRed = document.getElementById('lets-talk-red')
  const lets = document.getElementById('lets-talk')
  const moon = document.getElementById('moon')

  const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden')
    mobileMenu.classList.toggle('fixed')
    hamburgerBtn.classList.toggle('toggle-btn')
    
    if (window.matchMedia("(min-width: 819px)").matches) { 
      body.classList.toggle('body-bg')
      header.classList.toggle('md:w-[465px]') 
      header.classList.toggle('md:left-full')
      header.children[0].classList.toggle('md:px-7')      
      letsRed.classList.toggle('hidden')
      letsRed.nextElementSibling.classList.toggle('lets-talk')
      letsRed.nextElementSibling.classList.toggle('without-lets-talk')
      hamburgerBtn.parentElement.classList.toggle('md:pl-9')
      lets.classList.toggle('md:block')
      moon.classList.toggle('hidden')
      mobileMenu.classList.toggle('md:px-7')
      mobileMenu.classList.toggle('md:pt-[3.25rem]') 
    }
  }

  const dropMenu = (e) => {
    if (e.target.nextElementSibling == null) {
      mobileMenu.classList.toggle('hidden')
      mobileMenu.classList.toggle('fixed')
    } else {
      e.target.nextElementSibling.classList.toggle('right-[200%]')
    }
  }

  hamburgerBtn.addEventListener('click', toggleMenu)
  mainMenu.addEventListener('click', dropMenu)
  backToMenu.addEventListener('click', (e) => {
    e.target.parentElement.classList.toggle('right-[200%]')
  })
}

document.addEventListener('DOMContentLoaded', initApp)



//get contact data
const btnContact = document.getElementById('contact-details')
const contactForm = document.getElementById('contact-form') 
const btnContactForm = document.getElementById('button-close') //button-close

const getContactForm = () => {
  contactForm.classList.toggle('right-[200%]')
}

btnContact.addEventListener('click', getContactForm)
btnContactForm.addEventListener('click', getContactForm)

//dropmenu for screnn min 1280px
const dropmenu = document.getElementById('dropmenu');
const dropbtn = dropmenu.previousElementSibling;

const clickDropMenu = () => {
  dropmenu.classList.toggle('xl:hidden')
}

dropbtn.addEventListener('click', clickDropMenu)

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


if(window.matchMedia("(max-width: 819px)").matches) {
  const titleArticles = document.querySelectorAll('.title-article')
  const bodyArticleAll = document.querySelectorAll('.body-article')


  titleArticles.forEach(titleArticle => {
    titleArticle.addEventListener('click', () => {
      const bodyArticle = titleArticle.nextElementSibling

      if (bodyArticle.classList.contains('max-h-0')) {
        bodyArticleAll.forEach(bodyArt => {
          if (bodyArt.classList.contains('max-h-0')) {
            console.log('is')
          } else {
            bodyArt.classList.add('max-h-0')
          }
        })
        bodyArticle.classList.remove('max-h-0')
      } else {
        bodyArticleAll.forEach(bodyArt => {
          if (bodyArt.classList.contains('max-h-0')) {
            console.log('is')
          } else {
            bodyArt.classList.add('max-h-0')
          }
        })
        bodyArticle.classList.add('max-h-0')
      }    
    })
  })
}

let lastKnownScrollPosition = 0;
let ticking = false;
let newScrollPosition = 0;
const header = document.querySelector('header')

function doSomething(scrollPos) {
  if (scrollPos > newScrollPosition) {
    if (header.classList.contains('sticky')) {
      header.classList.remove('sticky')
      header.classList.add('opacity-0')
    } 
  } else {
    if (!header.classList.contains('sticky')) {
      header.classList.add('sticky')
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