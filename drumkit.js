//A-Boom
const aBoom = document.getElementById("aDrum");
const audioBoom1 = document.getElementById("audioBoom");
//S-Clap
const sBoom = document.getElementById("sDrum");
const audioBoom2 = document.getElementById("audioClap");
//D-Hihat
const dBoom = document.getElementById("dDrum");
const audioBoom3 = document.getElementById("audioHihat");
//F-Kick
const fBoom = document.getElementById("fDrum");
const audioBoom4 = document.getElementById("audioKick");
//G-Openhat
const gBoom = document.getElementById("gDrum");
const audioBoom5 = document.getElementById("audioOpenhat");
//H-Ride
const hBoom = document.getElementById("hDrum");
const audioBoom6 = document.getElementById("audioRide");
//J-Snare
const jBoom = document.getElementById("jDrum");
const audioBoom7 = document.getElementById("audioSnare");
//K-Tink
const kBoom = document.getElementById("kDrum");
const audioBoom8 = document.getElementById("audioTink");
//L-Tom
const lBoom = document.getElementById("lDrum");
const audioBoom9 = document.getElementById("audioTom");


//A-Boom
document.addEventListener("keypress", (event) => {
    if (event.key == "a") {
		audioBoom1.src = "sounds/boom.wav";
	}
});
aBoom.addEventListener("click", (event) => {
	audioBoom1.src = "sounds/boom.wav";
});

//S-Clap
document.addEventListener("keypress", (event) => {
    if (event.key == "s") {
		audioBoom2.src = "sounds/clap.wav";
	}
});
sBoom.addEventListener("click", (event) => {
	audioBoom2.src = "sounds/clap.wav";
});

//D-Hihat
document.addEventListener("keypress", (event) => {
    if (event.key == "d") {
		audioBoom3.src = "sounds/hihat.wav";
	}
});
dBoom.addEventListener("click", (event) => {
	audioBoom3.src = "sounds/hihat.wav";
});


//F-Kick
document.addEventListener("keypress", (event) => {
    if (event.key == "f") {
		audioBoom4.src = "sounds/kick.wav";
	}
});
fBoom.addEventListener("click", (event) => {
	audioBoom4.src = "sounds/kick.wav";
});

//G-Openhat
document.addEventListener("keypress", (event) => {
    if (event.key == "g") {
		audioBoom5.src = "sounds/openhat.wav";
	}
});
gBoom.addEventListener("click", (event) => {
	audioBoom5.src = "sounds/openhat.wav";
});

//H-Ride
document.addEventListener("keypress", (event) => {
    if (event.key == "h") {
		audioBoom6.src = "sounds/ride.wav";
	}
});
hBoom.addEventListener("click", (event) => {
	audioBoom6.src = "sounds/ride.wav";
});

//J-Snare
document.addEventListener("keypress", (event) => {
    if (event.key == "j") {
		audioBoom7.src = "sounds/snare.wav";
	}
});
jBoom.addEventListener("click", (event) => {
	audioBoom7.src = "sounds/snare.wav";
});

//K-Tink
document.addEventListener("keypress", (event) => {
    if (event.key == "k") {
		audioBoom8.src = "sounds/tink.wav";
	}
});
kBoom.addEventListener("click", (event) => {
	audioBoom8.src = "sounds/tink.wav";
});

//L-Tom
document.addEventListener("keypress", (event) => {
    if (event.key == "l") {
		audioBoom9.src = "sounds/tom.wav";
	}
});
lBoom.addEventListener("click", (event) => {
	audioBoom9.src = "sounds/tom.wav";
});



