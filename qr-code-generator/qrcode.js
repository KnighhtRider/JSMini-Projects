const qrInput = document.getElementById('qr-input');
const qrImg = document.getElementById('qr-img');
const qrBtn = document.getElementById('qr-btn');

qrBtn.addEventListener('click', () => {

  const inputValue = qrInput.value;
  console.log(inputValue);

  if(!inputValue) {
    alert('Please enter a valid URL');
    return;
  } else {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    qrImg.alt =  `QR code for ${inputValue}`;

  }

})