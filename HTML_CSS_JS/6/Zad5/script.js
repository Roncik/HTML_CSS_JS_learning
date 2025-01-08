window.addEventListener('load', function () {
    var przycisk = document.getElementById('przycisk');
    var suma = document.getElementById('Suma');
    var srednia = document.getElementById('Srednia');

    var liczby = [];
    var sum = 0;
    var avg = 0;
    suma.innerHTML = "Suma: " + sum;
    srednia.innerHTML = "Srednia: " + avg;

    przycisk.addEventListener('click', function () {
        var wybrana_liczba = parseInt(window.prompt("Podaj liczbe"));
        if (isNaN(wybrana_liczba)) {
            alert("To nie jest liczba!");
        }
        else {
            liczby.push(wybrana_liczba);
        }

        sum = 0;
        avg = 0;
        for (var i = 0; i < liczby.length; i++) {
            sum += liczby[i];
        }

        for (var i = 0; i < liczby.length; i++) {
            avg = sum / liczby.length;
        }
        suma.innerHTML = "Suma: " + sum;
        srednia.innerHTML = "Srednia: " + avg;
    })

    

    
    
})