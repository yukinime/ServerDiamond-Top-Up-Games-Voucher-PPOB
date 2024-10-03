const labelNominal = document.querySelectorAll('.nominal');
const priceSection = document.querySelectorAll('.form-input__price-section');
const priceDiv = document.querySelectorAll('.form-input__price');

labelNominal.forEach(el => {
    el.addEventListener('click', function() {
        let price = this.getAttribute('data-price');

        priceSection.forEach(ps => { ps.style.display = 'block'; })

        priceDiv.forEach(pd=>{ pd.innerHTML = price })
    })
});

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const linkProfil = form.elements.user_id.value;
    const statusAkun = form.elements.user_name.value;
    const inputJumlah = form.elements.item_qty.value;
    const paymentMethod = form.elements.payment_method.value;

    localStorage.setItem('userId', linkProfil);
    localStorage.setItem('userName', statusAkun);
    localStorage.setItem('inputNominal', inputJumlah);
    localStorage.setItem('paymentMethod', paymentMethod);
   
    window.location.href = '../pricing/invocie.html';
})