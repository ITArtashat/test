let images = document.querySelectorAll(".menuDiv img")
let info = document.querySelectorAll(".infoDiv")
let projects = document.querySelectorAll(".section1 div div")
let projectsChild = document.querySelectorAll(".section1 div div span")
let seeMore = document.querySelector(".secondDivSec1 a")
let sect1 = document.querySelector(".section1")
function proj(){

    for (let i = 0; i < projectsChild.length; i++) {
        let elem = projectsChild[i];
        elem.addEventListener("mouseover",function(){
            elem.style.opacity = 1
        })
        elem.addEventListener("mouseout",function(){
            elem.style.opacity = 0 
        })
    }
    for (let i = 0; i < projects.length; i++) {
        let elem = projects[i];
        elem.style.opacity = 0
        
        elem.addEventListener("mouseover",function(){
            projectsChild[i].style.opacity = 1
            elem.style.zIndex = "1" 
            elem.style.transform = "rotate(0deg)"
        })
        elem.addEventListener("mouseout",function(){
            projectsChild[i].style.opacity = 0
            elem.style.zIndex = "0"
            elem.style.transform = "rotate(15deg)"
        })
    }
}
proj()

function projFunc(){
    if(location.reload){
         projects[0].style.display = "flex"
        projects[1].style.display = "flex"
        setTimeout(() => {
           
            projects[1].style.transform = "rotate(15deg)"
            projects[0].style.transform = "rotate(15deg)"
            projects[0].style.opacity = "1"
            projects[1].style.opacity = "1"
           
        }, 200);
    }

    window.onscroll = function () {
    if(Math.round(window.scrollY) >= 50  ){
             projects[2].style.display = "flex"
             projects[3].style.display = "flex"
             setTimeout(() => {
                projects[2].style.transform = "rotate(15deg)"
                projects[3].style.transform = "rotate(15deg)"
                projects[2].style.opacity = "1"
                projects[3].style.opacity = "1"
             }, 100);
         }
         if(Math.round(window.scrollY) >= 400 ){

            projects[4].style.display = "flex"
            projects[5].style.display = "flex"
            seeMore.style.display = "inline-block"
            sect1.style.padding = "30px 30px 30px"
            setTimeout(() => {
                projects[4].style.transform = "rotate(15deg)"
                projects[5].style.transform = "rotate(15deg)"
                projects[4].style.opacity = "1"
                projects[5].style.opacity = "1"
            }, 100);
        }
 };
}
projFunc()




function imgFunc(){
    for (let i = 0; i < images.length; i++) {
        const elem = images[i];
        elem.addEventListener("click",function(e){
            let img = images[0];
            let inf = info[0]
            while(img ){
                if(img.tagName == "IMG" ){
                    img.style.borderBottom = "none"
                    img.style.filter = "blur(1px)"
                }
                img = img.nextSibling
            }
            while(inf){
                if(inf.tagName == "DIV"){
                    inf.style.display = "none"
                    inf.style.filter = "blur 5px"
                }
                inf = inf.nextSibling
            }
            this.style.borderBottom  = "5px solid #5fcf80"
            this.style.filter = "blur(0px)"

            info[i].style.display = "flex"
            info[i].style.transition = "1s"
            info[i].style.filter = "blur(5px)"

            setTimeout(() => {
                info[i].style.transition = "1.5s"
                info[i].style.filter = "blur(0px)"
            }, 0,5);
        })
    }
}
imgFunc()
