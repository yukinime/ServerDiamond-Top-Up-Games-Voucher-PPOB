var dm = document.getElementById('dm');
var j = document.getElementById('jmlarray').value;


function pilih($id) {
	// live harga
	var harganya = document.getElementById('harganya');
	

	for (var i = 1; i <= j; i++) {
		
		document.getElementById('dm'+i).classList.remove('is-valid');
		document.getElementById('dm'+i).classList.remove('is-invalid');
		
	}


	var x = document.getElementById('dm'+$id);
	x.classList.add('is-valid');



var bodo = document.getElementById('jml'+$id);
var kuncir = document.getElementById('kuncir'+$id);

console.log(kuncir);

	var y = document.getElementById('dipilih');
	var v = document.getElementById('dmharga');
	y.value = bodo.value;
	v.value = kuncir.value;

	harganya.innerHTML = bodo.value;
	document.getElementById('kuncir').innerHTML = kuncir.value;


}

