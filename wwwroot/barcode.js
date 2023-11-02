window.readBarcode = (dotNetObject) => {
    Quagga.init({
        inputStream: {
            type: "LiveStream",
            constraints: {
                // カメラの制約を設定します
                width: { ideal: 640 }, // 好ましい幅
                height: { ideal: 480 }, // 好ましい高さ
                facingMode: "environment"
            },
            // area の設定は必要に応じて調整してください
            area: {
                top: "0%",
                right: "0%",
                left: "0%",
                bottom: "0%"
            }
        },
        decoder: {
            readers: ["code_128_reader", "ean_reader"] // 読み取りたいバーコードの種類に合わせて変更
        },
    }, function (err) {
        if (err) {
            console.log(err);
            return;
        }
        Quagga.start();

        // ビデオ要素のスタイルを動的に設定します
        var videoElement = document.querySelector('#interactive video');
        if (videoElement) {
            videoElement.style.width = '320px';
            videoElement.style.height = '240px';
        }
    });

    Quagga.onDetected(function (data) {
        const code = data.codeResult.code;
        dotNetObject.invokeMethodAsync("BarcodeDetected", code);
        Quagga.stop();
    });
};
