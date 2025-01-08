window.addEventListener('load', function () {
    var przycisk1 = document.getElementById('1');
    var przycisk2 = document.getElementById('2');
    var przycisk3 = document.getElementById('3');
    var przycisk4 = document.getElementById('4');
    var przycisk5 = document.getElementById('5');

    przycisk1.addEventListener("click", function () {
        przycisk1.innerHTML = "5";
        przycisk2.innerHTML = "2";
        przycisk3.innerHTML = "3";
        przycisk4.innerHTML = "4";
        przycisk5.innerHTML = "1";
    });

    przycisk2.addEventListener("click", function () {
        przycisk1.innerHTML = "1";
        przycisk2.innerHTML = "5";
        przycisk3.innerHTML = "2";
        przycisk4.innerHTML = "3";
        przycisk5.innerHTML = "4";
    });

    przycisk3.addEventListener("click", function () {
        przycisk1.innerHTML = "2";
        przycisk2.innerHTML = "1";
        przycisk3.innerHTML = "5";
        przycisk4.innerHTML = "3";
        przycisk5.innerHTML = "4";
    });

    przycisk4.addEventListener("click", function () {
        przycisk1.innerHTML = "3";
        przycisk2.innerHTML = "1";
        przycisk3.innerHTML = "2";
        przycisk4.innerHTML = "5";
        przycisk5.innerHTML = "4";
    });

    przycisk5.addEventListener("click", function () {
        przycisk1.innerHTML = "4";
        przycisk2.innerHTML = "1";
        przycisk3.innerHTML = "2";
        przycisk4.innerHTML = "3";
        przycisk5.innerHTML = "5";
    });

})