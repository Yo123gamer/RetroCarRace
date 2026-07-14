
const c=document.getElementById('c'),x=c.getContext('2d');
let car={x:180,y:600,w:40,h:70},e={x:180,y:-80,w:40,h:70},score=0;
document.getElementById('fs').onclick=()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen();
onkeydown=e2=>{if(e2.key==='ArrowLeft')car.x-=20;if(e2.key==='ArrowRight')car.x+=20;}
function drawCar(o,col){x.fillStyle=col;x.fillRect(o.x,o.y,o.w,o.h);}
function loop(){
x.fillStyle="#444";x.fillRect(0,0,400,700);
x.strokeStyle="#fff";x.setLineDash([20,20]);x.beginPath();x.moveTo(200,0);x.lineTo(200,700);x.stroke();
drawCar(car,"cyan");drawCar(e,"red");
e.y+=6;if(e.y>700){e.y=-80;e.x=20+Math.random()*340;score++;}
if(car.x<0)car.x=0;if(car.x>360)car.x=360;
if(car.x<e.x+e.w&&car.x+car.w>e.x&&car.y<e.y+e.h&&car.y+car.h>e.y){alert("Game Over! Score: "+score);score=0;e.y=-80;}
x.fillStyle="#fff";x.fillText("Score: "+score,10,20);
requestAnimationFrame(loop)}
loop();
