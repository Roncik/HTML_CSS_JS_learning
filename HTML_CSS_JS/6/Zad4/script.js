window.addEventListener('load', function () {
    var przycisk = document.getElementById('przycisk');
    var lista = document.getElementById('lista');



    przycisk.addEventListener('click', function () {
        let pobrany_produkt = prompt("Podaj produkt");
        var li = document.createElement("li");
        li.innerHTML = pobrany_produkt;
        lista.appendChild(li);
    })

    
})