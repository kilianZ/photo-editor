function applyGrayscale(imageData) {
    const data = new Uint8ClampedArray(imageData.data); // Clone image data
    for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = data[i + 1] = data[i + 2] = avg; // Set RGB to average
    }
    return new ImageData(data, imageData.width, imageData.height);
}

function applyBrightness(imageData, brightness) {
    const data = new Uint8ClampedArray(imageData.data); // Clone image data
    for (let i = 0; i < data.length; i += 4) {
        data[i] = clamp(data[i] + brightness); // Red
        data[i + 1] = clamp(data[i + 1] + brightness); // Green
        data[i + 2] = clamp(data[i + 2] + brightness); // Blue
    }
    return new ImageData(data, imageData.width, imageData.height);
}

// filter function 
function filter(imageData, value){
    const data = new Uint8ClamperArray(imageData.data);
    for (let i = 0; i < data.length; i += 4){

    }
}

// User pressed a filter button which specifies a filter 
// The filter is applied to the image, to display the preview image 
// 