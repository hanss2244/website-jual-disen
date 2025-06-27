let desainList = [];

function uploadDesain() {
  const fileInput = document.getElementById('uploadFile');
  const deskripsi = document.querySelector('textarea').value;
  const status = document.getElementById('status').value;
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const desain = {
        gambar: e.target.result,
        deskripsi,
        status
      };
      desainList.push(desain);
      renderGallery();
    };
    reader.readAsDataURL(file);
  }
}
function renderGallery() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';

  desainList.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${item.gambar}" alt="Desain ${index + 1}" />
      <div class="card-content">
        <p>${item.deskripsi}</p>
        <p class="${item.status === 'sold' ? 'sold' : 'available'}">
          ${item.status === 'sold' ? 'Sudah Dijual' : 'Belum Dijual'}
        </p>
        <a class="whatsapp-btn" href="https://wa.me/6285810188169?text=Halo,%20saya%20tertarik%20dengan%20desain%20Anda%20nomor%20${index + 1}" target="_blank">Order via WhatsApp</a>

        
        <div style="margin-top:1rem;">
          <button onclick="toggleStatus(${index})" style="margin-right: 0.5rem;">Ubah Status</button>
          <button onclick="hapusDesain(${index})" style="background: #d9534f; color: white;">Hapus</button>
        </div>
      </div>
    `;
    gallery.appendChild(card);
  });
}
function toggleStatus(index) {
  if (desainList[index].status === 'sold') {
    desainList[index].status = 'available';
  } else {
    desainList[index].status = 'sold';
  }
  renderGallery();
}

function hapusDesain(index) {
  if (confirm("Yakin ingin menghapus desain ini?")) {
    desainList.splice(index, 1);
    renderGallery();
  }
}

function loginAdmin() {
  const password = document.getElementById("adminPassword").value;
  if (password === "admin123") { // Ganti dengan password kamu sendiri
    document.getElementById("uploadSection").style.display = "block";
    document.getElementById("loginBox").style.display = "none";
  } else {
    alert("Password salah!");
  }
}

function toggleStatus(index) {
  if (desainList[index].status === 'sold') {
    desainList[index].status = 'available';
  } else {
    desainList[index].status = 'sold';
  }
  renderGallery();
}

