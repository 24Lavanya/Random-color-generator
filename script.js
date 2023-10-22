const colorContainer = document.querySelector('.color-container');

// for (let i = 4; i >= 0; i--)
// {
//     let randHex = Math.floor(Math.random() * 0xffffff).toString(16);
//     box.forEach((index, randHex) => {
//         randHex = `#${randHex.padStart(6, "0")}`
//         box.innerHTML=`<div class="box" style="background-color:${randHex}">COLOR</div>`
//         console.log(randHex)
//     })
// }
let color;
let generateColor = () => {
    colorContainer.innerHTML = '';
    for (let i = 4; i >= 0; i--)
    {
        let randHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randHex = `#${randHex.padStart(6, "0")}`
        console.log(randHex)
        color = document.createElement('li');
        color.classList.add('color');
        color.innerHTML = `<div class="box" style="background-color:${randHex}"></div>
        <div class="hex">${randHex}</div>`;
        colorContainer.appendChild(color);
    }
    
}

