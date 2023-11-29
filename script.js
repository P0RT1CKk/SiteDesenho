let drawingBoard = document.getElementById('drawing-board');
let colorPicker = document.getElementById('color-picker');
let eraser = document.getElementById('eraser');

drawingBoard.addEventListener('mousemove', function(e) {
    if(e.buttons !== 1) return;
    let div = document.createElement('div');
    div.style.backgroundColor = eraser.clicked ? 'white' : colorPicker.value;
    div.style.position = 'absolute';
    div.style.left = e.pageX + 'px';
    div.style.top = e.pageY + 'px';
    div.style.width = '5px';
    div.style.height = '5px';
    document.body.appendChild(div);
});

eraser.addEventListener('click', function() {
    eraser.clicked = !eraser.clicked;
});