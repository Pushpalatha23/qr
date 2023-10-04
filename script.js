document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('text-input');
    const generateButton = document.getElementById('generate-button');
    const qrcodeContainer = document.getElementById('qrcode');

    generateButton.addEventListener('click', function () {
        const inputValue = textInput.value.trim();

        if (inputValue !== '') {
            // Create a QRCode instance
            const qrcode = new QRCode(qrcodeContainer, {
                text: inputValue,
                width: 128,
                height: 128,
            });
        } else {
            alert('Generated successfully');
        }
    });
});