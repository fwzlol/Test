let arr = [0,0,0,0,0,0,0,0,0,0];

for (let i=0 ; i<200 ; i++) {
    let x = Math.floor( (Math.random() * 100) + 1);
    if (0<x && x<=10) arr[0]++;
    if (10<x && x<=20) arr[1]++;
    if (20<x && x<=30) arr[2]++;
    if (30<x && x<=40) arr[3]++;
    if (40<x && x<=50) arr[4]++;
    if (50<x && x<=60) arr[5]++;
    if (60<x && x<=70) arr[6]++;
    if (70<x && x<=80) arr[7]++;
    if (80<x && x<=90) arr[8]++;
    if (90<x && x<=100) arr[9]++;
}

for (let i=0 ; i<arr.length ; i++) {

    let num = (i+1) * 10
    let numlength = '';

    console.log(`${num}`)
    for (let j=0 ; j<arr[i] ; j++) {
        numlength += 'o';
    }
    console.log(numlength)
}

const container = document.getElementById('petRegion');
const meowMp3 = new Audio('https://cdn.freesound.org/previews/583/583381_7805242-lq.mp3');
container.addEventListener('mousedown', function(){
    container.classList.add('hold-click');
    meowMp3.play();
})
container.addEventListener('mouseup', function() {
    container.classList.remove('hold-click');
})
container.addEventListener('mouseleave', function() {
    container.classList.remove('hold-click');
})