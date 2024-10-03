const labelNominal = document.querySelectorAll('.nominal');
const priceSection = document.querySelectorAll('.form-input__price-section');
const priceDiv = document.querySelectorAll('.form-input__price');

labelNominal.forEach(el => {
    el.addEventListener('click', function() {
        let price = this.getAttribute('data-price');

        priceSection.forEach(ps => { ps.style.display = 'block'; })

        priceDiv.forEach(pd => { pd.innerHTML = price })
    })
});

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userId = form.elements.user_id.value;
    const userName = form.elements.user_name.value;
    const inputNominal = form.elements.item_qty.value;
    const paymentMethod = form.elements.payment_method.value;

    // Menyimpan data di localStorage untuk ditampilkan di halaman invoice.html
    localStorage.setItem('userId', userId);
    localStorage.setItem('userName', userName);
    localStorage.setItem('inputNominal', inputNominal);
    localStorage.setItem('paymentMethod', paymentMethod);

    // Mengirim data ke API
    fetch('http://localhost:3000/api/topup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: userId,
            userName: userName,
            inputNominal: inputNominal,
            paymentMethod: paymentMethod
        })
    })
    .then(response => {
        if (response.ok) {
            window.location.href = '../pricing/invocie.html';
        } else {
            alert('Failed to send data to the server.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while sending data.');
    });
});
