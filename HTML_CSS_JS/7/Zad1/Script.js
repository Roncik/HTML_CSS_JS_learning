window.addEventListener('load', function () {
    var button = document.getElementById('but1');



    var num1;
    var num2;
    var op;
    
    button.addEventListener('click', function()
    {
        num1 = document.getElementById('l1').value
        num2 = document.getElementById('l2').value
        if (document.getElementById("add").checked)
        {
            op = "add"
        }
        else if (document.getElementById("sub").checked)
        {
            op = "sub"
        }
        else if (document.getElementById("mul").checked)
        {
            op = "mul"
        }
        else if (document.getElementById("div").checked)
        {
            op = "div"
        }

        const url = new URL('https://www.lmielewczyk.pl/teaching/current/ug-inf-og-Iy/wstep-do-tech-web/lab/servers/calc.php');
        const params = new URLSearchParams()
        params.append('num1', num1)
        params.append('num2', num2)
        params.append('op', op)
        fetch(url, {method: 'POST', body: params})
        .then(result=>{fetch(url,{method:'GET'})
        .then(result=>{return result.json()})
        .then(data=>{document.getElementById('wynik').innerHTML = "Wynik: " +data['result']})
        })
        
    })
    

    
    
})