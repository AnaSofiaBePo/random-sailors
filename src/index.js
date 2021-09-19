const sailorScouts = [
"Sailor Moon",
"Sailor Mercury",
"Sailor Mars",
"Sailor Jupiter", 
"Sailor Venus",
"Sailor Saturn",
"Sailor Uranus",
"Sailor Neptune",
"Sailor Pluto",
"Sailor Chibi Moon",
"Sailor Start Fighter",
"Sailor Start Maker",
"Sailor Start Healer"
];

const randomsS = ()=>{
    const message = sailorScouts[Math.floor(Math.random()*sailorScouts.length)];
    console.log(message);
}

module.exports = { randomsS };

