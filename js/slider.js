// Slider up to down

const caruselmove = document.querySelector(".slider_interval")
const slayd = document.getElementsByClassName("karsing")



let m = 1
const artim = slayd[0].clientHeight
// alert(xeber.length)

caruselmove.style.transform = "translateY("+ (-artim*m )+"px)"
 
function Carusel_move(){

    if(m>=slayd.length-1) return
    caruselmove.style.transition = "transform 0.7s ease-in-out"
    m++;
    caruselmove.style.transform = "translateY("+ (-artim*m )+"px)"
}

setInterval(Carusel_move,4000)





caruselmove.addEventListener("transitionstart",()=>{
if(slayd[m].id === "son_div"){
 caruselmove.style.transition = "none"  
 m = slayd.length  
 caruselmove.style.transform = "translateY("+ (-artim * m )+"px)"
}

if(slayd[m].id === "ilk_div"){
    caruselmove.style.transition = "none"  
    m = slayd.length-m 
    caruselmove.style.transform = "translateY("+ (-artim * m )+"px)"
   }
})



// function Cheker(){


// var bottom = $(".basliq").position().bottom


// console.log(bottom)
//     let a = 2720+"px"
// if ($('html').scrollTop()>$(".red_line").offset().top)
//  {

//       $('.basliq').css({"position":"fixed","bottom":"0","width":"63%"});
      
     
//    }
//    if(bottom=0){
       
//     $('.basliq').css({"position":"absolute","bottom":"0","width":"63%"});
//    }

// //    if($(".slider_fixed").offset().top>a){
// //     let a = 2720+"px"
// //     $('.basliq').css({"position":"static","width":"68%"})
// //    }
  
// }

// Cheker();

// $(window).scroll(function(){
//     Cheker();
// })
// 2828.375
var st = 0
console.log($(".basliq").position().top)
 function Cheker(){
   
    if ($('html').scrollTop()>$(".red_line").offset().top)
        {
    
          $('.basliq').css({"position":"fixed","bottom":"0","width":"63%"});
          
         
        }
        // if ($('html').scrollTop()<$(".red_line").offset().top)
        // {
    
        //   $('.basliq').css({"position":"absolute","top":"70px","width":"68%"});
          
         
        // }
        
        if ($('html').scrollTop()>3290)
        {
     
        $('.basliq').css({"position":"absolute","bottom":"0","width":"68%"});
        }


       

        // if($('html').scrollTop()>250){
        //   $('.container4').css({"transform":"translateY(-100%)","transition":"0.7s"})
      
        // }
        // if($('html').scrollTop()>250 && $('html').scrollTop()>st){
        //   $('.container4').css({"transform":"translateY(-100%)","transition":"0.7s"})
        //   st = $('html').scrollTop()
        // }
        // if($('html').scrollTop()>250 && $('html').scrollTop()<st){
        // $('.container4').css({"transform":"translateY(0%)","transition":"0.4s"})
        //     st = $('html').scrollTop()
        }

//         Cheker();

// $(window).scroll(function(){
//     Cheker();
// })