;(function(){

    const anchors = document.querySelectorAll('a[href*="#"]'); 

    for (let anchor of anchors) { 
        anchor.addEventListener("click", function(event) { 
            event.preventDefault();  
            const blockID = anchor.getAttribute('href');
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth", 
                block: "start"
            })
        })
    }
    
    let modal = document.getElementById('modal-window');
    let modalBtn = document.getElementById('btn-down'); 
    let closeBtn = document.getElementById('close-btn'); 
    
    modalBtn.addEventListener('click', () => { 
        modal.style.display = 'flex'; 
    })
    closeBtn.addEventListener('click', () => { 
        console.log(1)
        modal.style.display = 'none'; 
    })
    modal.addEventListener('click', (event) => { 
        if(event.target != document.querySelector('#modal-window div')) { 
            modal.style.display = 'none'; 
        }
    })
    
    
    
    let canvas = document.getElementById('canvas-line'); 
    let ctx = canvas.getContext('2d');
    
    let cw = canvas.width;
    let ch = canvas.height;
    
    ctx.strokeStyle = "#E20505";
    ctx.lineJoin = "round";
    ctx.lineWidth = 8;
    // ctx.fillStyle = "#F76C34";
    
    ctx.beginPath(); 
    ctx.moveTo(5,5)
    ctx.lineTo(cw/2 - 20, 5);
    ctx.stroke();
    ctx.lineWidth = 2;
    
    ctx.moveTo(cw/2 - 20, 5);
    ctx.lineTo(cw/2 , ch/1.5);
    
    ctx.lineTo(cw/2 + 20, 5);
    ctx.stroke();
    
    ctx.beginPath(); 
    ctx.lineWidth = 8;
    ctx.moveTo(cw/2 + 20, 5);
    ctx.lineTo(cw, 5);
    
    ctx.stroke();
    
    
    

})();


// let time = document.querySelectorAll('.timer') ; 
// // let duration = 129600;
// let edge = localStorage.setItem('edge' , 129600) ;
// console.log(edge)
// let hour,
//     minute, 
//     second, 
//     hourZmark, 
//     minuteZmark, 
//     secondZmark; 


// function tickTack () {
//     // console.log(duration)
//     // duration--;
//     // edge = localStorage.edge--;
    
//     console.log(localStorage.edge)
//     localStorage.edge--;
//     // edge = localStorage.setItem('edge' , localStorage.edge) ;
//     // edge = localStorage.edge--;
//     // console.log(localStorage.edge)
//     // edge = localStorage.edge * 1;
    
//     hour = Math.floor(localStorage.edge/(60*60)); 
//     minute = Math.floor((localStorage.edge - hour*3600)/60); 
//     second =  Math.floor((localStorage.edge - hour*3600 - minute*60)); 
//     if (second < 10 ) { 
//         secondZmark = 0;
//     }
//     else { 
//         secondZmark = ''
//     }
//     if (minute < 10 ) { 
//         minuteZmark = 0;
//     }
//     else { 
//         minuteZmark = ''
//     }
//     if (hour < 10 ) { 
//         hourZmark = 0;
//     }
//     else { 
//         hourZmark = ''
//     }
//     let timeNow =  hourZmark + hour + ' : ' + minuteZmark + minute + ' : '+ secondZmark + second;
//     // localStorage["currentTime"] = edge;

//     // edge = localStorage.setItem('edge' , duration) ;
//     edge = localStorage.setItem('edge' , localStorage.edge) ;
// console.log(localStorage.edge)
//     for( let i = 0; i<time.length; i++) { 
//         time[i].innerText = timeNow;
//     }

//     if( edge <= 0) { 
//         edge = localStorage.setItem('time' , '129600') ;
//     }
// }


// setInterval(tickTack,1000);