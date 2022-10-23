    let url = "https://634d2164f5d2cc648e9d4032.mockapi.io/pesan-les"
let dataPesanHTML = document.getElementById("cnth")

const getDataApi = ( )=>{
    let option = {
        method : "GET",
    }
    fetch(url,option)
    .then((response)=> response.json())
    .then((result) => {
        let pesanData =result
        pesanData.forEach((item,index) =>{
            dataPesanHTML.innerHTML +=
            `<div class="card">
            <h5 class="card-header"></h5>
            <div class="card-body">
              <h5 class="card-title">LES `+item.topik+`</h5>
              <a href="detil-pesanan.html" class="btn btn-primary">Detil Pesanan</a>
              <a href="daftar-pengajar.html" class="btn btn-primary">Pilih Pengajar</a>
              <p class="card-tilte">jenjang Pendidikan Saat Ini `+item.jenjang_pendidikan+`</p>
              <p class="card-tilte">Perserta Les `+item.peserta_les+`</p>
              <p class="card-text">Tanggal Mulai Les `+item.tanggal+`</p>
              <p class="card-text">Jam Mulai `+item.mulai+`</p>
              <p class="card-text">Jam Selesai `+item.selesai+`</p>
              <p class="card-text">Detil Topik : `+item.detil_topik+`</p>
              <p class="card-text">Informasi Tambahan : `+item.infotambahan+`</p>
              
              
              
            </div>
          </div>`
        })
    })

}
getDataApi()