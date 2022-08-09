score=0;
cross= true;
audio= new Audio('music.mp3')
audiogo= new Audio('gameover.mp3')
setTimeout(() => {
    audio.play()
}, 2000);
document.onkeydown= function (e){
    console.log("key code is: ",e.keyCode)
    if(e.keyCode==38){
        dino=document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 600);
    }
    if(e.keyCode==39){
        dino=document.querySelector('.dino');
        dinoX=parseInt (window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left= dinoX+110+"px";
    
    }
    if(e.keyCode==37){
        dino=document.querySelector('.dino');
        dinoX=parseInt (window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left= dinoX-110+"px";
    
    }
}
setInterval(() =>{
    dino=document.querySelector('.dino');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');

    dx= parseInt (window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy= parseInt (window.getComputedStyle(dino,null).getPropertyValue('top')) ;

    ox=parseInt (window.getComputedStyle(obstacle,null).getPropertyValue('left')) ;
    oy= parseInt (window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX= Math.abs(dx-ox);
    offsetY= Math.abs(dy-oy);
    if(offsetX<90 && offsetY<50){
        gameOver.style.visibility= 'visible';
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(() => {
           audiogo.pause();
           audio.pause(); 
        }, 3000);
    }
    else if(offsetX<150 && cross){
        score+=1;
        updateScore(score);
        cross= false;
        setTimeout(() => {
            cross= true;
        },1000);
        setTimeout(() => {
            aniDuration= parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration')) ;
            newDuration= aniDuration - 0.09;
            obstacle.style.animationDuration= newDuration+ 's';
            console.log('New animation durationm:', newDuration)
        
        }, 600);
        
    }
},10);

function updateScore(score){
    scoreCount.innerHTML = "Your Score: "+ score
}