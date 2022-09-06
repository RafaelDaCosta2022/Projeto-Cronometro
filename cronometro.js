let cron
let h = 0;
let m = 0;
let s = 0


function doisdigitos(digito){
  if (digito < 10){
    return('0'+digito)
}else{
    return(digito)
}  


}

function inicio(){
   if (inicio === true){
    return 0
   }else{
    return cron = setInterval( timer , 100)
   }
  
  
    
  cron = setInterval( timer , 100)
}

function parar(){
    clearInterval(cron)
    
}

function zerar(){    
     h = 0
     m = 0
     s = 0

    clearInterval(cron)
    document.querySelector('#cro').innerText = '00:00:00'  
    
}
function timer (){
    s++
    if(s == 60){
         m++
        s = 0
       
        if(m == 60){
             h++
            m = 0
           
        }
    }
    
   
    
   
    

    document.querySelector('#cro').innerHTML =doisdigitos(h)+':'+doisdigitos(m)+':'+doisdigitos(s)
}

