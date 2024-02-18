const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');
const btnReset = document.querySelector('.reset');

let hrs=min=sec=ms=0;
let startTimer;

btnStart.addEventListener('click' , ()=>{

    btnStart.classList.add('start-active');
    btnStop.classList.remove('stop-active')
   
 startTimer=setInterval(()=>{
// console.log("hi");
ms++;
if(ms==100){      //This means , The Anonymys function run every 10 ms , so 10*100=1000 the 1000ms=1sec.
    sec++;
            //ms value must be lessthan 100 , so we can write the logic.
    ms=0;   
            //Here , we again set the value 

}

if(sec==60){
    min++;
    sec=0;
}

if(min==60){
    hrs++;
    min=0;
}

updateDisplay();
 },10);   // 10 millisecond
            //10ms*100ms=1sec.
});

btnStop.addEventListener('click' , ()=>{
  
 clearInterval(startTimer);

 btnStart.classList.remove('start-active');
 btnStop.classList.add('stop-active')
      

});

btnReset.addEventListener('click' , ()=>{
    
    hrs=min=sec=ms=0;
    clearInterval(startTimer);
    updateDisplay();
    
    btnStart.classList.remove('start-active');
    btnStop.classList.remove('stop-active')

});

function updateDisplay(){
// Formated Display      

Nhrs=hrs<10?'0'+hrs:hrs;   //The milliseconds values are incremented and concatenate the the srting '0' , so we can declare the new variable as Nhrs , Nmin , Nsec , Nms and assign to the document.querySelector('.hrs')= Nhrs and so on.
Nmin=min<10?'0'+min:min;
Nsec=sec<10?'0'+sec:sec;
Nms=ms<10?'0'+ms:ms;

//output
    document.querySelector('.hrs').innerText=Nhrs;
    document.querySelector('.min').innerText=Nmin;
    document.querySelector('.sec').innerText=Nsec;
    document.querySelector('.ms').innerText=Nms;
}