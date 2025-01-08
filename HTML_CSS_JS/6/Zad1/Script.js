window.addEventListener('load', function () {
    var obraz = document.getElementById('obraz');


    obraz.addEventListener('mouseover', function () {
        obraz.src = 'obrazek2.png';
    });

    obraz.addEventListener('mouseout', function () {
        obraz.src = 'obrazek1.png';
    });
});