const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


canvas.width = 400;
canvas.height = 320;

let x = 20; 
const radius = 10; 
const speed = 2; 
let direction = 1; 


function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    ctx.beginPath();
    ctx.arc(x, canvas.height / 2, radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}


function animate() {
    drawCircle();
    
    x += speed * direction
    
    if (x + radius > canvas.width || x - radius < 0) {
        direction *= -1; 
    }
    
    requestAnimationFrame(animate); 
}

animate(); 
