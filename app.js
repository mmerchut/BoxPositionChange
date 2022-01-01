const box = document.querySelector('.box')
let x = 0;
let y = 0;

boxMove = (event) => {
    switch (event.which) {
        case 38:
        x -= 5
        box.style.marginTop = `${x}px`;
        // console.log(x)
        break;
        case 37:
        y -= 5
        box.style.marginLeft = `${y}px`;
        // console.log(y)
        break;
        case 39:
        y += 5
        box.style.marginLeft = `${y}px`;
        // console.log(y)
        break;    
        case 40:
        x += 5
        box.style.marginTop = `${x}px`;
        // console.log(x)
        break;
    }
}

document.addEventListener('keydown', boxMove)