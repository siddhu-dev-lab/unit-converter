const feet = document.getElementById('feet');
const inch = document.getElementById('inch');

    feet.addEventListener('input', () => {
        let f = feet.value;
        let i = f*12;

        inch.value = i;
    });

    inch.addEventListener('input', ()=> {
        let i = inch.value;
        let f = i/12;

        if(!Number.isInteger(f)){
            f = f.toFixed(2)
        }

        feet.value = f;
    });
