function splitscroll()
{
const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    duration:"3000",
    triggerElement:".header",
    triggerHook:0
})
.setPin(".header")
.addTo(controller)
}
splitscroll();



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

let sections = document.querySelectorAll('section div');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height){

            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };
    });

    //sticky header

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    
    // remove toggle icon and navbar when click navbar link scroll
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};
