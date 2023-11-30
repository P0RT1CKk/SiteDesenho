document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const colorPicker = document.getElementById("colorPicker");
    const pencilButton = document.getElementById("pencil");
    const eraserButton = document.getElementById("eraser");
    const clearButton = document.getElementById("clearCanvas");

    // Configurando o tamanho do canvas
    canvas.width = 1400;
    canvas.height = 800;

    let isDrawing = false;
    let isErasing = false;

    function startDrawing(e) {
        isDrawing = true;
        draw(e);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();
    }

    function draw(e) {
        if (!isDrawing) return;

        context.lineWidth = 5;
        context.lineCap = "round";

        if (isErasing) {
            context.strokeStyle = "#fff"; // Use a cor do fundo para "apagar"
        } else {
            context.strokeStyle = colorPicker.value;
        }

        context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    // Adicionando eventos de mouse
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mousemove", draw);

    // Adicionando eventos para as ferramentas
    pencilButton.addEventListener("click", function () {
        isErasing = false;
    });

    eraserButton.addEventListener("click", function () {
        isErasing = true;
    });

    // Adicionando evento corrigido para o botão "Apagar Tudo"
    clearButton.addEventListener("click", function () {
        // Limpa todo o conteúdo desenhado no canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
    });

    // Função para ajustar o tamanho da imagem no botão
    function adjustImageSize(buttonId, width, height) {
        const button = document.getElementById(buttonId);
        const image = button.querySelector("img");
        image.style.width = width + "px";
        image.style.height = height + "px";
    }

    // Chame a função para ajustar o tamanho das imagens nos botões desejados
    adjustImageSize("pencil", 30, 30); // Ajuste conforme necessário
    adjustImageSize("eraser", 30, 30); // Ajuste conforme necessário
    adjustImageSize("clearCanvas", 30, 30); // Ajuste conforme necessário
});
