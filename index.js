const canvas = document.querySelector('canvas');
let score = document.querySelector('h2').innerHTML;
// let time = document.querySelector('timer').innerHTML;

let points = 0;

// let timeleft = 60;
// let donwtime = setInterval(function () {
//     timeleft--;
//     time = timeleft
//     if (timeleft <= 0)
//         clearInterval(donwtime);
// }, 1000);



let T = 60;

function onTimer() {
    document.getElementById("timer").innerHTML = T;
    T--;
    if (T < 0) {
        alert("game over! Your score is " + points);
    } else {
        setTimeout(onTimer, 1000);
    }
}


canvas.width = innerWidth;
canvas.height = innerHeight;

// let x = Math.random() * innerWidth;
// let y = Math.random() * innerHeight;
// let dx = (Math.random() - 0.5) * 20;
// let dy = (Math.random() - 0.5) * 20;
// let radius = 30;


let c = canvas.getContext('2d');

// console.log(canvas);



//circles 

// for (var i = 0; i < 9; i++) {
//     let x = Math.random() * window.innerHeight;
//     let y = Math.random() * window.innerWidth;


//     c.strokeStyle = 'blue';
//     c.fillStyle = "red";
//     c.stroke();

let mouse = {
    x: undefined,
    y: undefined
};

let maxRadius = 10;
let minRadius = 1;

let colorArray = [
    '#h4hfhh',
    '#EF4182',
    '#8A7CCB',
    "#42B3D0",
    '#DFF517',
];






window.addEventListener('mousemove',
    function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
        // console.log(event);


    });

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});



function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    // this.minRadius = minRadius
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function () {

        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 3, false);
        c.strokeStyle = 'blue';
        c.fillStyle = colorArray[Math.floor(Math.random() * colorArray.length)];
        c.stroke();
        c.fill();

    };
    this.update = function () {
        //set up bounderies 
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + radius > innerHeight || this.y - radius < 0) {
            this.dy = -this.dy;
        }
        this.x -= this.dx;
        this.y -= this.dy;

        //if statement can be used to change difficulty, increase raidus, increase difficulty
        if (this.radius > 50) {
            points++;
            //adds up score while  mouse hovers over "electrons", increase quantum excitation of the higgs field
            let x = document.getElementById("score").innerHTML = points;
            points = x;
            console.log(points);
        }
        if (mouse.x - this.x < 80 && mouse.x - this.x > -80 && mouse.y - this.y < 80 && mouse.y > -80) {
            this.radius += 1;

            if (this.radius < maxRadius) {
                this.radius += radius;
            }

        } else if (this.radius > 2) {
            this.radius -= 1;
        }
        this.draw();
    };



}


let circleArray = [];
for (var i = 0; i < 30; i++) {
    let radius = Math.random() * 3 + 1;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() + 2.0) * 18;
    let dy = (Math.random() + 2.0) * 18;

    circleArray.push(new Circle(x, y, dx, dy, radius));

    // let circle = new Circle(200, 200, 3, 3, 30);
}






// function init() {
//     for (var i = 0; i < 5; i++) {
//         let radius = Math.random() * 3 + 1;
//         let x = Math.random() * (innerWidth - radius * 2) + radius;
//         let y = Math.random() * (innerHeight - radius * 2) + radius;
//         let dx = (Math.random() - 0.5) * 4;
//         let dy = (Math.random() - 0.5) * 5;

//         circleArray.push(new Circle(x, y, dx, dy, radius));

//         // let circle = new Circle(200, 200, 3, 3, 30);
//     }






function animate() {


    requestAnimationFrame(animate);
    //refresh 
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
    // c.beginPath();
    // //create circle
    // c.arc(x, y, radius, 0, Math.PI * 8, false);

    // c.fillStroke = "#FF0000";
    // c.fillStyle = "#FF0000";
    // c.stroke();


    //initialize final x,y variables

}




// animate();



// window.addEventListener('mousedown', function () {
//     function pointsAdder() {
//         points++;

//         if (this.event = circleArray) {
//             console.log(event)
//         } else {
//             console.log("circle missed!")
//         }
//     }


//     pointsAdder();
//     console.log('you clicked');

//     console.log(points);

// });

document.getElementById('startGame').onclick = function () {
    // alert("You have been invited to the CERN particle accelerator to test your unifing theory of existence. Capture a hydrogen atom and destablize it by colliding it into other atoms and collapse the space-time-continuum!. ")
    // alert(" The wavelength of an objects matter-wave decreases when the momentum of the object increases! The more massive the object, the smaller the wavelength of its matter-wave");
    // alert("Matter waves are a central part of the theory of quantum mechanics, being an example of wave–particle duality. All matter can exhibit wave-like behavior. For example, a beam of electrons can be diffracted just like a beam of light or a water wave.");
    // alert("Soo... Lets put our theory to the test! Hover your mouse over the atoms as quickly and consistently as possible to earn maximum points and open a wormhole!!  ");
    // alert("Be careful to not trigger a nuclear reaction!")
    animate();
    onTimer();
};