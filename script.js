// JavaScript Code
const canvas = document.getElementById('background-animation');
const ctx = canvas.getContext('2d'); // Fixed capitalization
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = []; // Renamed from "particle" to avoid conflicts

// Particle Class
function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.size = Math.random() * 2 + 1; // Random size between 1 and 3
  this.speedX = Math.random() * 3 - 1.5; // Speed between -1.5 and 1.5
  this.speedY = Math.random() * 3 - 1.5;
}

// Update Method
Particle.prototype.update = function () {
  this.x += this.speedX; // Update horizontal position
  this.y += this.speedY; // Update vertical position
  if (this.size > 0.2) this.size -= 0.1; // Gradually reduce size
};

// Draw Method
Particle.prototype.draw = function () {
  ctx.fillStyle = 'white'; // Particle color
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); // Circle shape
  ctx.fill();
};

// Create Particles at Mouse Position
function initParticles(event) {
  for (let i = 0; i < 5; i++) {
    particles.push(new Particle(event.x, event.y)); // Create new particles
  }
}

// Handle and Draw Particles
function handleParticles() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
    if (particles[i].size <= 0.3) { // Remove particles that have "disappeared"
      particles.splice(i, 1);
      i--; // Adjust index after removing an element
    }
  }
}

// Animation Loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
  handleParticles(); // Update and draw particles
  requestAnimationFrame(animate); // Continue the animation loop
}


document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start');
  
    startButton.addEventListener('click', () => {
      // Show an alert
      alert('Get ready to start the quiz!');
      
      // Navigate to the next page
      window.location.href = 'quiz.html'; // Replace 'quiz.html' with the actual URL of your quiz page.
    });
  });
  
// Start Animation
animate();


  

