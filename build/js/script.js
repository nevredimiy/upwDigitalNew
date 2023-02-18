//burger menu
const burger = document.getElementById('burger');
const menu = document.getElementById('header_menu');

const initApp = () => {
  //about burger and lets talk
  const hamburgerBtn = document.getElementById('hamburger-button')
  const mainMenu = document.getElementById('main-menu')
  const basicMenu = document.getElementById('basic-menu')
  const backToMenu = document.getElementById('back-to-menu')
  const body = document.querySelector('body')
  const header = document.querySelector('header')
  const moon = document.getElementById('moon')
  const btnContact = document.getElementById('contact-details')
  const contactForm = document.getElementById('contact-form') 
  const btnContactForm = document.getElementById('button-close') //button-close

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
    moon.classList.toggle('md:hidden')
  }

  const dropMenu = (e) => {
    if (e.target.nextElementSibling == null) {
      mainMenu.classList.toggle('hidden')
      mainMenu.classList.toggle('fixed')
      body.classList.toggle('body-bg')
      header.classList.toggle('md:w-[465px]') 
      header.classList.toggle('md:left-full')
      header.children[0].classList.toggle('md:px-7') 
      moon.classList.toggle('md:hidden')
      hamburgerBtn.classList.toggle('toggle-btn')      
      mainMenu.classList.toggle('md:px-7')       
    } else {
      e.target.nextElementSibling.classList.toggle('left-[200%]')
    }
  }

  const getContactForm = () => {

    if (mainMenu.classList.contains('fixed')) {
      mainMenu.classList.toggle('hidden')
      mainMenu.classList.toggle('fixed')
      body.classList.toggle('body-bg')
      header.classList.toggle('md:w-[465px]') 
      header.classList.toggle('md:left-full')
      header.children[0].classList.toggle('md:px-7') 
      moon.classList.toggle('md:hidden')
      hamburgerBtn.classList.toggle('toggle-btn')
      mainMenu.classList.toggle('md:px-7') 
   }
    contactForm.classList.toggle('left-[200%]')
    body.classList.toggle('body-bg')

  }

  btnContact.addEventListener('click', getContactForm)
  btnContactForm.addEventListener('click', getContactForm)



  hamburgerBtn.addEventListener('click', toggleMenu)
  basicMenu.addEventListener('click', dropMenu)
  backToMenu.addEventListener('click', (e) => {
    e.target.parentElement.classList.toggle('left-[200%]')
  })
  btnContact.addEventListener('click', getContactForm)
  btnContactForm.addEventListener('click', getContactForm)

}

document.addEventListener('DOMContentLoaded', initApp)




//dropmenu for screen min 1280px
// const dropmenu = document.getElementById('dropmenu');
// const dropbtn = dropmenu.previousElementSibling;

// const clickDropMenu = () => {
//   dropmenu.classList.toggle('xl:hidden')
//   dropmenu.classList.toggle('xl:min-h-min')
//  }

// dropbtn.addEventListener('mouseover', clickDropMenu)
// dropbtn.addEventListener('mouseover', clickDropMenu)

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
  const bodyArticleAll = document.querySelectorAll('.body-article')


  titleArticles.forEach(titleArticle => {
    titleArticle.addEventListener('click', () => {
      const bodyArticle = titleArticle.nextElementSibling
        bodyArticle.classList.toggle('max-h-0')
      // Ниже код это в случае если нужно закрывать остальные менюшки
      // if (bodyArticle.classList.contains('max-h-0')) {
      //   bodyArticleAll.forEach(bodyArt => {
      //     if (bodyArt.classList.contains('max-h-0')) {
      //       console.log('is')
      //     } else {
      //       bodyArt.classList.add('max-h-0')
      //     }
      //   })
      //   bodyArticle.classList.remove('max-h-0')
      // } else {
      //   bodyArticleAll.forEach(bodyArt => {
      //     if (bodyArt.classList.contains('max-h-0')) {
      //       console.log('is')
      //     } else {
      //       bodyArt.classList.add('max-h-0')
      //     }
      //   })
      //   bodyArticle.classList.add('max-h-0')
      // }    
    })
  })

//remove menu at scroll down and add menu at scroll up
let lastKnownScrollPosition = 0;
let ticking = false;
let newScrollPosition = 0;
const header = document.querySelector('header')

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
  const mainMenu1 = document.getElementById('mobile-menu')
  if (mainMenu1.classList.contains('hidden')) {
    console.log('is a')
  }

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

  