let codeReader = new ZXing.BrowserMultiFormatReader();

window.startQRCodeReading = (dotNetObject) => {
    codeReader.decodeFromInputVideoDevice(undefined, 'video').then((result) => {
        dotNetObject.invokeMethodAsync("QRCodeDetected", result.text);
    }).catch((error) => {
        console.error(error);
    });
};

window.stopQRCodeReading = () => {
    codeReader.reset();
};
