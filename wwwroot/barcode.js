window.readBarcode = (dotNetObject) => {
    Quagga.init({
        inputStream: {
            type: "LiveStream",
            constraints: {
                width: { min: 200 },
                height: { min: 150 },
                facingMode: "environment"
            },
            height: {
                min: 100, // 最小高さ
                max: 300  // 最大高さ
            },
            area: {
                top: "0%",
                right: "0%",
                left: "0%",
                bottom: "0%"
            }
        },
        decoder: {
            readers: ["code_128_reader", "ean_reader"] // この部分は読み取りたいバーコードの種類に合わせて変更可能
        },
    }, function (err) {
        if (err) {
            console.log(err);
            return;
        }
        Quagga.start();
    });

    Quagga.onDetected(function (data) {
        const code = data.codeResult.code;
        dotNetObject.invokeMethodAsync("BarcodeDetected", code);
        Quagga.stop();
    });
};
