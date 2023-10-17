const showMessage = () => {
    const messageInput = document.getElementById("message");
    const message = messageInput.value;
  
    if (message.trim() === "") {
      alert("Inputan tidak boleh kosong");
    } else {
      alert("Pesan: " + message);
      messageInput.value = "";
    }
  };

  const hasil = () => {
    let panjang = parseFloat(document.getElementById("angka1").value);
    let lebar = parseFloat(document.getElementById("angka2").value);
  
    let hasil = panjang * lebar;
    document.getElementById("hasil").value = hasil;
  };

  const EditStyle = () => {
    // Mengambil nilai dari elemen
    let panjangInput = document.getElementById("panjang");
    let lebarInput = document.getElementById("lebar");
    let warna = document.getElementById("warna").value;
  
    // Mengambil nilai panjang dan lebar dengan memastikan dalam rentang yang benar
    let panjang = Math.min(
      Math.max(parseInt(panjangInput.value), parseInt(panjangInput.min)),
      parseInt(panjangInput.max)
    );
    let lebar = Math.min(
      Math.max(parseInt(lebarInput.value), parseInt(lebarInput.min)),
      parseInt(lebarInput.max)
    );
  
    // Memperbarui nilai input dengan nilai yang telah disesuaikan
    panjangInput.value = panjang;
    lebarInput.value = lebar;
  
    // Edit style
    document.getElementById("square").style.width = panjang + "px";
    document.getElementById("square").style.height = lebar + "px";
    document.getElementById("square").style.backgroundColor = warna;
  };

  const ChangeBackground = (color) => {
    let element = document.getElementById("pesan");
    // mengosongkan class pada elemen yang diambil
    element.className = "";
    // memberikan class tipe alert berdasarkan parameter
    if (color === 'bg-blend-soft-light') {
      element.classList.add(color, "text-black", "rounded", "border", "py-2");
    }else{
      element.classList.add(color, "text-white", "rounded", "py-2");
    }
  };

//  Bagian Persegi
function luasPersegi(){
    var p = document.getElementById("sisi").value;
    var hasil = p*p;
    var tampilan = document.getElementById("tampilan")

    tampilan.innerHTML = hasil;
}

function kelilingPersegi(){
    var p = document.getElementById("sisi").value;
    var hasil = 4*p;
    var tampilan = document.getElementById("tampilan")

    tampilan.innerHTML = hasil;
}

//  Bagian Lingkaran
function luasLingkaran(){
    var r = document.getElementById("jari-jari").value;
    var hasil = 3.14 * r*r;
    var tampilan = document.getElementById("tampilan")

    tampilan.innerHTML = hasil;
}

function kelilingLingkaran(){
    var r = document.getElementById("jari-jari").value;
    var hasil = 2 * 3.14 * r;
    var tampilan = document.getElementById("tampilan")

    tampilan.innerHTML = hasil;
}

//  Bagian Persegi Panjang
function luasPersegiPanjang(){
    var p = document.getElementById("panjang").value;
    var l = document.getElementById("lebar").value;
    var hasil = l*p;
    var tampilan = document.getElementById("tampilan")

    tampilan.innerHTML = hasil;
}

function kelilingPersegiPanjang(){
    var p = document.getElementById("panjang").value;
    var l = document.getElementById("lebar").value;
    var hasil = 2*p+2*l;
    var tampilan = document.getElementById("tampilan")

    tampilan.innerHTML = hasil;
}

// Bagian Jajargenjang
function luasJajargenjang(){
    var a = document.getElementById("alas").value;
    var t = document.getElementById("tinggi").value;
    var hasil = a*t;
    var tampilan = document.getElementById("tampilan")

    tampilan.innerHTML = hasil;
}

function kelilingJajargenjang(){
    var s_1 = document.getElementById("sisi_1").value;
    var s_2 = document.getElementById("sisi_2").value;
    var s_3 = document.getElementById("sisi_3").value;
    var s_4 = document.getElementById("sisi_4").value;
    var hasil = s_1*1+s_2*1+s_3*1+s_4*1;
    var tampilan_2 = document.getElementById("tampilan_2")

    tampilan_2.innerHTML = hasil;
}

// Bagian Segitiga
function luasSegitiga(){
    var a = document.getElementById("alas").value;
    var t = document.getElementById("tinggi").value;
    var hasil = a*t/2;
    var tampilan = document.getElementById("tampilan")

    tampilan.innerHTML = hasil;
}

function kelilingSegitiga(){
    var s_1 = document.getElementById("sisi_1").value;
    var s_2 = document.getElementById("sisi_2").value;
    var s_3 = document.getElementById("sisi_3").value;
    var hasil = s_1*1+s_2*1+s_3*1;
    var tampilan_2 = document.getElementById("tampilan_2")

    tampilan_2.innerHTML = hasil;
}