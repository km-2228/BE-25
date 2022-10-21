let dataPengajar;
const url = "https://634d2164f5d2cc648e9d4032.mockapi.io/pengajar";

document.addEventListener("DOMContentLoaded", async function () {
	await fetch(url)
		.then((data) => data.text())
		.then((data) => JSON.parse(data))
		.then((data) => (dataPengajar = data));

	let container = document.getElementById("containerAPI");

	dataPengajar.forEach((data) => {
		let card = document.createElement("div");

		if (data.bidangAjar[1] == undefined) {
			data.bidangAjar[1] = "";
		}

		card.innerHTML = `<nav class="navbar navbar-expand-md text-dark flex-column mb-5">
                    <div class="container-fluid p-md-4 d-flex justify-content-around mt-md-3 mb-5">
                        <a class="navbar-brand mb-0" href="#">
                            <img src="${data.avatar}" alt="Logo" width="120"
                                class="d-inline-block align-text-top">
                            <p id="caption-foto"></p>
                        </a>
                        <div id="nama-jurusan">
                            <h5 id="nama">${data.nama}</h5>
                            <p class="mb-0" id="jurusan">${data.pendidikan}</p>
                        </div>
                        <div id="button-navbar">
                            <button type="button" class="btn btn-outline-success" id="submit-pilih-pengajar">Pilih
                                Pengajar</button>
                        </div>
                    </div>
                </nav>
                <main class="mt-md-5">
                    <div id="collapse-container" class="mx-auto">
                        <p>
                            <a class="btn btn-outline-success me-md-3" data-bs-toggle="collapse" href="#multiCollapseExample1"
                                role="button" aria-expanded="true" aria-controls="multiCollapseExample1">Profil
                                diri</a>

                            <button class="btn btn-outline-success me-md-3" type="button" data-bs-toggle="collapse"
                                data-bs-target="#multiCollapseExample2" aria-expanded="false"
                                aria-controls="multiCollapseExample2">Pengalaman</button>

                            <button class="btn btn-outline-success" type="button" data-bs-toggle="collapse"
                                data-bs-target="#multiCollapseExample3" aria-expanded="false"
                                aria-controls="multiCollapseExample3">Ulasan</button>
                        </p>
                        <div class="row mt-md-4 mt-sm-3">
                            <div class="col">
                                <div class="collapse multi-collapse" id="multiCollapseExample3">
                                    <div class="card card-body">
                                        <h6 class="judul">Ulasan</h6>
                                        <p>${data.ulasan}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="collapse multi-collapse" id="multiCollapseExample1">
                                    <div class="card card-body">
                                        <h6 class="judul">Deskripsi diri</h6>
                                        <p>${data.deskripsi}</p>
                                        <h6 class="judul">Edukasi</h6>
                                        <p>${data.edukasi.sma}</p>
                                        <p>${data.edukasi.pt}</p>
                                        <h6 class="judul">Bidang ajar</h6>
                                        <p>${data.bidangAjar[0]}</p>
                                        <p>${data.bidangAjar[1]}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="collapse multi-collapse" id="multiCollapseExample2">
                                    <div class="card card-body">
                                        <h6 class="judul">Pengalaman</h6>
                                        <p>${data.pengalaman[0]}</p>
                                        <p>${data.pengalaman[1]}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>`;

		if (data.id == 1) {
			card.setAttribute("class", "carousel-item active");
		} else {
			card.setAttribute("class", "carousel-item");
		}

		container.appendChild(card);
	});
});
