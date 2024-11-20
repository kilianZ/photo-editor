// import { applyBrightness, applyGrayscale } from './filters.js';
// import { clamp } from './utils.js';

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let originalImage = null; // Store original image data
let currentImage = null; // Store current image data

// Handles Image Upload from 
document.getElementById('imageInput').addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        const img = new Image();
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            console.log("drawing image")
            ctx.drawImage(img, 0, 0);
            originalImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
            currentImage = originalImage;
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
});

document.getElementById('grayscaleButton').addEventListener('click', () => {
    console.log("Grayscale!")
    currentImage = applyGrayscale(currentImage);
    ctx.putImageData(currentImage, 0, 0);
});

document.getElementById('brightnessSlider').addEventListener('input', (event) => {
    const brightness = parseInt(event.target.value, 10);
    currentImage = applyBrightness(originalImage, brightness);
    ctx.putImageData(currentImage, 0, 0);
});

document.getElementById('undoButton').addEventListener('click', () => {
    if (originalImage) {
        ctx.putImageData(originalImage, 0, 0);
        currentImage = originalImage;
    }
});

// buttons 
document.getElementById('buttonID').addEventListener('click', () => {
    // push new filter 
    
})

// slider
document.getElementById('sliderID').addEventListener('input', (event) => {
    //update current filter 
    const val = parseInt(event.target.value, 10);
    imgPreview = applyFilter(current, brightness)
})