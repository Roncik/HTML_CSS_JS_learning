window.addEventListener('load', function () {
    var napis = document.getElementById('napis');

    var tabela1 = document.getElementById("tabelka1");

    tabela1.rows[0].cells[0].addEventListener("click", function () {
        napis.style.color = 'red';
    });

    tabela1.rows[0].cells[1].addEventListener("click", function () {
        napis.style.color = 'green';
    });

    tabela1.rows[0].cells[2].addEventListener("click", function () {
        napis.style.color = 'blue';
    });

    tabela1.rows[1].cells[0].addEventListener("click", function () {
        napis.style.color = 'yellow';
    });

    tabela1.rows[1].cells[1].addEventListener("click", function () {
        napis.style.color = 'cyan';
    });

    tabela1.rows[1].cells[2].addEventListener("click", function () {
        napis.style.color = 'black';
    });

    var tabela2 = document.getElementById("tabelka2");

    tabela2.rows[0].cells[0].addEventListener("click", function () {
        napis.style.backgroundColor = 'red';
    });

    tabela2.rows[0].cells[1].addEventListener("click", function () {
        napis.style.backgroundColor = 'green';
    });

    tabela2.rows[0].cells[2].addEventListener("click", function () {
        napis.style.backgroundColor = 'blue';
    });

    tabela2.rows[1].cells[0].addEventListener("click", function () {
        napis.style.backgroundColor = 'yellow';
    });

    tabela2.rows[1].cells[1].addEventListener("click", function () {
        napis.style.backgroundColor = 'cyan';
    });

    tabela2.rows[1].cells[2].addEventListener("click", function () {
        napis.style.backgroundColor = 'black';
    });
    
});