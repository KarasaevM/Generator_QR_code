const wrapper = document.querySelector('.wrapper'),
	qrInput = document.querySelector('.form input'),
	generateBtn = wrapper.querySelector('.form button'),
	qrImg = wrapper.querySelector('.qr_code img');

let preValue;

generateBtn.addEventListener('click', () => {
	let qrValue = qrInput.value.trim();
	if (!qrValue || preValue === qrValue) return;
	preValue = qrValue;
	generateBtn.textContent = 'Generating QR Code...';
	qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
	qrImg.addEventListener('load', () => {
		wrapper.classList.add('active');
		generateBtn.textContent = 'Generate QR code';
	});
});

qrInput.addEventListener('keyup', () => {
	if (!qrInput.value.trim()) {
		wrapper.classList.remove('active');
		preValue = '';
	}
});
