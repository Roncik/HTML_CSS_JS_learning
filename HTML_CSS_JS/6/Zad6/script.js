window.addEventListener('load', function () {
    var Naglowek_A = document.getElementById('A');
    var Naglowek_B = document.getElementById('B');
    var Naglowek_C = document.getElementById('C');
    var Naglowek_D = document.getElementById('D');

    var pa = document.getElementById('Ap');
    var pb = document.getElementById('Bp');
    var pc = document.getElementById('Cp');
    var pd = document.getElementById('Dp');

    var Adiv = document.getElementById('Adiv');
    var Bdiv = document.getElementById('Bdiv');
    var Cdiv = document.getElementById('Cdiv');
    var Ddiv = document.getElementById('Ddiv');

    var A_schowany = false;
    var B_schowany = false;
    var C_schowany = false;
    var D_schowany = false;


    //A
    Naglowek_A.addEventListener('click', function () {
        A_schowany = !A_schowany;
        if (A_schowany) {
            pa.style.display = "none";
            Adiv.style.height = 20;
        }
        else if (!A_schowany) {
            pa.style.display = "block";
            Adiv.style.height = 100;
        }
            
    })

    Naglowek_A.addEventListener('mouseover', function () {
        if (A_schowany) {
            pa.style.display = "block";
            Adiv.style.height = 100;
        }
    })

    Naglowek_A.addEventListener('mouseout', function () {
        if (A_schowany) {
            pa.style.display = "none";
            Adiv.style.height = 20;
        }
    })
    //B
    Naglowek_B.addEventListener('click', function () {
        B_schowany = !B_schowany;
        if (B_schowany) {
            pb.style.display = "none";
            Bdiv.style.height = 20;
        }
        else if (!B_schowany) {
            pb.style.display = "block";
            Bdiv.style.height = 100;
        }

    })

    Naglowek_B.addEventListener('mouseover', function () {
        if (B_schowany) {
            pb.style.display = "block";
            Bdiv.style.height = 100;
        }
    })

    Naglowek_B.addEventListener('mouseout', function () {
        if (B_schowany) {
            pb.style.display = "none";
            Bdiv.style.height = 20;
        }
    })
    //C
    Naglowek_C.addEventListener('click', function () {
        C_schowany = !C_schowany;
        if (C_schowany) {
            pc.style.display = "none";
            Cdiv.style.height = 20;
        }
        else if (!C_schowany) {
            pc.style.display = "block";
            Cdiv.style.height = 100;
        }

    })

    Naglowek_C.addEventListener('mouseover', function () {
        if (C_schowany) {
            pc.style.display = "block";
            Cdiv.style.height = 100;
        }
    })

    Naglowek_C.addEventListener('mouseout', function () {
        if (C_schowany) {
            pc.style.display = "none";
            Cdiv.style.height = 20;
        }
    })
    //D
    Naglowek_D.addEventListener('click', function () {
        D_schowany = !D_schowany;
        if (D_schowany) {
            pd.style.display = "none";
            Ddiv.style.height = 20;
        }
        else if (!D_schowany) {
            pd.style.display = "block";
            Ddiv.style.height = 100;
        }

    })

    Naglowek_D.addEventListener('mouseover', function () {
        if (D_schowany) {
            pd.style.display = "block";
            Ddiv.style.height = 100;
        }
    })

    Naglowek_D.addEventListener('mouseout', function () {
        if (D_schowany) {
            pd.style.display = "none";
            Ddiv.style.height = 20;
        }
    })
    

    
    
})