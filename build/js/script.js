const burger = document.getElementById('burger');
const menu = document.getElementById('header_menu');

const initApp = () => {
  const hamburgerBtn = document.getElementById('hamburger-button')
  const mobileMenu = document.getElementById('mobile-menu')
  const anсhors = document.querySelectorAll('#main-menu>li>a')
  const mainMenu = document.getElementById('main-menu')
  const backToMenu = document.getElementById('back-to-menu')
  const switchLang = document.getElementById('switch-lang')
  const listLang = document.getElementById('list-lang')
  
  

  const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden')
    mobileMenu.classList.toggle('fixed')
    hamburgerBtn.classList.toggle('toggle-btn')
  }

  const dropMenu = (e) => {
    if (e.target.nextElementSibling == null) {
      mobileMenu.classList.toggle('hidden')
      mobileMenu.classList.toggle('fixed')
    } else {
      e.target.nextElementSibling.classList.toggle('right-full')
    }
  }

  const toggleLang = () => {
    listLang.classList.toggle('hidden')
    listLang.classList.toggle('fixed')
  }

  hamburgerBtn.addEventListener('click', toggleMenu)
  mainMenu.addEventListener('click', dropMenu)
  backToMenu.addEventListener('click', (e) => {
    e.target.parentElement.classList.toggle('right-full')
  })
  switchLang.addEventListener('click', toggleLang)
  listLang.addEventListener('click', toggleLang)
}

document.addEventListener('DOMContentLoaded', initApp)



//const acc = document.getElementsByClassName("accordion");
//var plus = document.getElementsByClassName("plus-minus");


//const acc = document.getElementsByClassName("accordion");
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


// for (let i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.children[0].nextElementSibling.classList.toggle("toggle-plus");
//     this.classList.toggle('text-base-red');

//     /* Toggle between hiding and showing the active panel */
//     const panel = this.nextElementSibling;
//     if (panel.classList.contains('max-h-0')) {
      
//     }
//     panel.classList.toggle('hidden')
//   });
// }


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