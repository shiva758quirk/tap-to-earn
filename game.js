let taps = 0;
let coins = 0;

function tap() {
    taps++;
    coins++;
    document.getElementById('taps').innerText = taps;
    document.getElementById('coins').innerText = coins;
}
