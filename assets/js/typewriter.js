window.addEventListener('DOMContentLoaded', () => {
    const text1 = " Nicolás Miño"; 
    const text2 = "> Disfruto crear cosas, aprender y compartir conocimientos"; 
    
    const typingSpeed = 100; 

    const elem1 = document.getElementById('typewriter-text-1');
    const elem2 = document.getElementById('typewriter-text-2');
    const cursor1 = document.getElementById('cursor-1');
    const cursor2 = document.getElementById('cursor-2');

    let i = 0;
    let j = 0;

    function typeWriter1() {
        if (elem1 && i < text1.length) {
            elem1.innerHTML += text1.charAt(i);
            i++;
            setTimeout(typeWriter1, typingSpeed);
        } else {
          
            setTimeout(() => {
                if(cursor1) cursor1.style.display = 'none';
                if(cursor2) cursor2.style.display = 'inline'; 
                typeWriter2();
            }, 500);
        }
    }

  
    function typeWriter2() {
        if (elem2 && j < text2.length) {
            elem2.innerHTML += text2.charAt(j);
            j++;
            setTimeout(typeWriter2, typingSpeed - 30);
        }
    }

    typeWriter1();
});