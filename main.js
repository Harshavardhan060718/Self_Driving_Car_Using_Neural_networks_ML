const canvas = document.getElementById("mycanvas");
canvas.height = window.innerHeight;
canvas.width = 200;

// above is for to get canvas like road like structure 

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width * 0.9);
const car = new Car(100, 100, 30, 50);
car.draw(ctx);

animate();

function animate() {
    car.update();
    canvas.height = window.innerHeight;
    road.draw(ctx);

    car.draw(ctx);



    requestAnimationFrame(animate);
    // gives the illusion we want when car moves

}