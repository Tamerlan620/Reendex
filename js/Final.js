// Time


const aa = new Date();
let day = aa.getDay();
let month = aa.getMonth()
let date = aa.getDate();
let year = aa.getFullYear();



if(month===0){
    month = "January"
}
if(month===1){
    month = "February"
}
if(month===2){
    month = "March"
}
if(month===3){
    month = "April"
}
if(month===4){
    month = "May"
}
if(month===5){
    month = "June"
}
if(month===6){
    month = "July"
}
if(month===7){
    month = "August"
}
if(month===8){
    month = "September"
}
if(month===9){
    month = "October"
}
if(month===10){
    month = "Novomber"
}
if(month===10){
    month = "December"
}


if(day === 0){
   
    day = "Sun"
}
if(day === 1){
    day = "Mon";
}
if(day === 2){
    day = "Tue";
}
if(day === 3){
    dayL = "Wed";
}
if(day === 4){
    day = "Thur";
}
if(day === 5){
    day = "Fri";
}
if(day === 6){
    day = "Sat";
}

tarix.innerHTML = day+", "+month+" "+date+", "+year;
yeni_tarix.innerHTML =month+" "+date+", "+year;
yeni_tarix1.innerHTML =month+" "+date+", "+year;
yeni_tarix2.innerHTML =month+" "+date+", "+year;
yeni_tarix3.innerHTML =month+" "+date+", "+year;
yeni_tarix4.innerHTML =month+" "+date+", "+year;
yeni_tarix5.innerHTML =month+" "+date+", "+year;






kalendar_ayil.innerHTML = month+" "+year


let hour = aa.getHours();
let minute = aa.getMinutes();
let second = aa.getSeconds();



function GetTime(){
    let vaxt = new Date()
    let hour = vaxt.getHours();
    let minute = vaxt.getMinutes();
    let second = vaxt.getSeconds();
    
    if(hour<10){
        hour = "0"+hour
        
    }
    if(minute<10){
        minute = "0"+minute
        
    }
    if(second<10){
        second = "0"+second
    }

    var CurrentTime = document.getElementById('zaman')

    CurrentTime.innerHTML = hour+":"+minute+":"+second
}
GetTime()
setInterval(GetTime,1000)




// megamenu slider

var qarac = document.getElementById("images")
// var yazi = document.getElementById("yazis")
var sekiller = ["toplanti.jpg","Computer.jpg","recording.jpg","clock.jpg"]
var yazilar =["WHAT WE DO","HOW WE WORK","WHO WE ARE","MMANAGEMENT"]

var n = 0;

sol.addEventListener("click",function(){
    
    n--;

    if (n===-1){
        n=3;
    }
qarac.setAttribute("style","background-image: url("+sekiller[n]+")")
yazis.innerHTML=yazilar[n]


})

sag.addEventListener("click",function(){
    
    n++;

    if (n===sekiller.length){
        n=0;
    }
qarac.setAttribute("style","background-image: url("+sekiller[n]+")")
yazis.innerHTML=yazilar[n]


})


// Slider2

    sol_icon.addEventListener("click",function(){
        $(".first_slide").removeClass("d-none")
        $(".second_slide").addClass("d-none")
        
        

    })

    sag_icon.addEventListener("click",function(){
        $(".second_slide").removeClass("d-none")
        $(".first_slide").addClass("d-none")
})

// Slider up to down

const caruselslide = document.querySelector(".qara")
const xeber = document.getElementsByClassName("xeberler")

const prewbtn = document.querySelector("#prvbtn")
const nextbtn = document.querySelector("#nxtbtn")

let counter = 1
const size = xeber[0].clientHeight
// alert(xeber.length)

caruselslide.style.transform = "translateY("+ (-size*counter )+"px)"
 
nextbtn.addEventListener("click",()=>{
    if(counter>=xeber.length-1) return
    caruselslide.style.transition = "transform 0.4s ease-in-out"
    counter++;
    caruselslide.style.transform = "translateY("+ (-size*counter )+"px)"
})

prewbtn.addEventListener("click",()=>{
    if(counter<=0) return
    caruselslide.style.transition = "transform 0.4s ease-in-out"
    counter--;
    caruselslide.style.transform = "translateY("+ (-size*counter )+"px)"
})

caruselslide.addEventListener("transitionend",()=>{
if(xeber[counter].id === "lastclone"){
 caruselslide.style.transition = "none"  
 counter = xeber.length-2 
 caruselslide.style.transform = "translateY("+ (-size * counter )+"px)"
}

if(xeber[counter].id === "firstclone"){
    caruselslide.style.transition = "none"  
    counter = xeber.length-counter 
    caruselslide.style.transform = "translateY("+ (-size * counter )+"px)"
   }
})


// Slider up to down



// setinterval




    // converter



    

function Converter(){
    
   
    class Convert{
        async get(url){

            const response =await fetch("https://api.exchangeratesapi.io/latest");
            const deyis = response.json() 

            return deyis
        }

        
    }

    const request = new Convert();


    

request.get('https://api.exchangeratesapi.io/latest')
.then(data => {
    
    
    if(money_from.value ==true && money_to.value==true){
        get_money.value =enter_money.value * data.rates.USD
    }

    if(money_from.value ==false && money_to.value==false){
        get_money.value =enter_money.value / data.rates.USD
    }

    if(money_from.value ==true && money_to.value==false){
        get_money.value =enter_money.value
    }
    if(money_from.value ==false && money_to.value==true){
        get_money.value =enter_money.value
    }
   
    
})
.catch(err => console.log(err));

}

enter_money.addEventListener("change",function(){
    Converter()
})



// slider boz
const orta = document.getElementsByClassName("partners")
let sayim = 0
const uzun = orta[0].clientWidth+30

$(".saga").click(function(){
    sayim++
    if(sayim >orta.length-5){
        sayim =orta.length-5}
    console.log(sayim)
    $("#boz_carusel").animate({"left":(-sayim*uzun)+"px"})
    $("#boz_carusel").css({"transition":".8s"})
})

$(".sola").click(function(){
    sayim--
    if(sayim<0){
        sayim=0
    }
    console.log(sayim*uzun)
    $("#boz_carusel").animate({"left":(-sayim*uzun)+"px"})
    $("#boz_carusel").css({"transition":".8s"})
})


// video slider

const videos = document.getElementsByClassName("video_image")
let to = 0
const olcu = videos[0].clientWidth

$(".to_right").click(function(){
    to++
    if(to >videos.length-5){
        to =videos.length-5}
    console.log(to)
    $(".videolar").animate({"left":(-to*olcu)+"px"})
    
})

$(".to_left").click(function(){
    to--
    if(to<0){
        to=0
    }
    console.log(to*olcu)
    $(".videolar").animate({"left":(-to*olcu)+"px"})
    
})


// resim
 
let art_azal = 1
let resims = document.getElementsByClassName("resim")

$(".rgt2").click(function(){
    art_azal++;
    if(art_azal>resims.length){
        art_azal=resims.length
    }
    console.log($(".resim"+(art_azal-1)))
    $(".resim"+(art_azal-1)).removeClass("d-block")
    $(".resim"+(art_azal-1)).addClass("d-none")
    $(".resim"+art_azal).removeClass("d-none")
    $(".resim"+art_azal).addClass("d-block")
})

$(".lft2").click(function(){
    art_azal--;
    if(art_azal<1){
        art_azal=1
    }
    console.log($(".resim"+(art_azal-1)))
    $(".resim"+(art_azal+1)).removeClass("d-block")
    $(".resim"+(art_azal+1)).addClass("d-none")
    $(".resim"+art_azal).removeClass("d-none")
    $(".resim"+art_azal).addClass("d-block")
})


// Trending section-9

// alert(section9.clientWidth)


const classes = document.getElementsByClassName("slayders")
let art = 0
const qiymet = classes[0].clientWidth+40

$(".rgt3").click(function(){
    art++
    if(art >classes.length-art+1){
        art =classes.length-art+2}
    
    $(".yeni_slayder").animate({"left":(-art*qiymet)+"px"})
    
})

$(".lft3").click(function(){
    art--
   
    if(art<0){
        art=0
    }
    console.log(art)
   
    $(".yeni_slayder").animate({"left":(-art*qiymet)+"px"})
    
})

 // Navbar fixed

 
        var st = 0
 function Chek(){
   
         if ($('html').scrollTop()>=$(".container4").offset().top)
        {
          
          $('.container4').css({"position":"fixed","top":"0","z-index":"9999"});
        }
        
        if ($('html').scrollTop()<165)
        {
     
        $('.container4').css({"position":"static"});
        }

        if($('html').scrollTop()>250){
          $('.container4').css({"transform":"translateY(-100%)","transition":"0.7s"})
      
        }
        if($('html').scrollTop()>250 && $('html').scrollTop()>st){
          $('.container4').css({"transform":"translateY(-100%)","transition":"0.7s"})
          st = $('html').scrollTop()
        }
        if($('html').scrollTop()>250 && $('html').scrollTop()<st){
        $('.container4').css({"transform":"translateY(0%)","transition":"0.4s"})
            st = $('html').scrollTop()
        }

      

    
       
      }   

    Chek();
    
    $(window).scroll(function(){
        Chek();
    })

    // Navbar fixed end

    




