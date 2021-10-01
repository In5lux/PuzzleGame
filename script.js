let field = document.querySelector('.wrapper');
let cells =field.querySelectorAll('.cell');
let start = document.querySelector('#start');
let zeroCell = field.querySelector('.zero-cell');
let order = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let cellColor = '#e3ffb9';
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
function inAscOrder(arr) {
    for (let i=0; i<arr.length-1;i++){
        if (arr[i]>arr[i+1]) return false;
    }
    return true;
}

start.addEventListener('click',()=>{
    field.innerHTML='';
    start.textContent='Начать заново';
    shuffle(order);
    for (let i=0;i<order.length;i++){
        cells[i].style.backgroundColor=cellColor;
        field.appendChild(cells[order[i]]);
    };
    cells.forEach(elem=>{

        elem.addEventListener('click',()=>{
            let top = elem.offsetTop;
            let left = elem.offsetLeft;
            let zeroTop = zeroCell.offsetTop;
            let zeroLeft = zeroCell.offsetLeft;
            if (((top===zeroTop && left-zeroLeft===60)
                ||(top===zeroTop && left-zeroLeft===-60))
                ||((left===zeroLeft && top-zeroTop===60)
                    ||(left===zeroLeft && top-zeroTop===-60))){
                let zeroIndex = order.indexOf(15);
                let cellIndex  = order.indexOf(elem.id-1);
                order[zeroIndex]=elem.id-1;
                order[cellIndex]=15;
                for (let i=0;i<order.length;i++){
                    cells[i].style.backgroundColor=cellColor;
                    field.appendChild(cells[order[i]]);
                };
                if (inAscOrder(order)){
                    cells.forEach(item=>{
                        item.style.backgroundColor='peachpuff'
                    });
                }
            }
        })
    })
})