window.addEventListener('load', function () {
    var button = document.getElementById('wyslij')

    button.addEventListener('click', function()
    {
        var imie = document.getElementById('imie').value
        var nazwisko = document.getElementById('nazwisko').value
        var telefon = document.getElementById('telefon').value
        var email = document.getElementById('email').value
        var kierunekstudiow = document.getElementById('kierunekstudiow').value
        var preferowanykontakt;
        if (document.getElementById('pre_telefon').checked)
        {
            preferowanykontakt = "telefon"
        }
        else if(document.getElementById('pre_email').checked)
        {
            preferowanykontakt = "email"
        }

        var niepelnosprawnosc; //tu skonczylem
        if (document.getElementById('pre_telefon').checked)
        {
            preferowanykontakt = "telefon"
        }
        else if(document.getElementById('pre_email').checked)
        {
            preferowanykontakt = "email"
        }
        var imie = document.getElementById('imie').value
    })

    })
    

    
    
})