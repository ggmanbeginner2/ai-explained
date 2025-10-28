document.addEventListener('DOMContentLoaded', () => {
    fetch('index_menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu').innerHTML = data;
            console.log('Menu geladen!'); // check
        })
        .catch(err => console.error('Menu kon niet geladen worden:', err));
});


// Easter egg click-teller
document.addEventListener("DOMContentLoaded", function () {
    const egg = document.getElementById("easter-egg");
    let clickCount = 0;

    egg.addEventListener("click", function () {
        clickCount++;
        if (clickCount === 5) {
            window.open("https://github.com/ggmanbeginner2", "_blank");
            clickCount = 0; // reset teller
        }
    });
});
