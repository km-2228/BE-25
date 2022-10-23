let url = "https://634d2164f5d2cc648e9d4032.mockapi.io/pengajar"
let dataPengajarHTML = document.getElementById("cnth")

const getDataApi = ( )=>{
    let option = {
        method : "GET",
    }
    fetch(url,option)
    .then((response)=> response.json())
    .then((result) => {
        let pengajarData = result
        pengajarData.forEach((item,index) =>{
            dataPengajarHTML.innerHTML +=
            `<div class="card">
            <h5 class="card-header">Pesanan Kamu Berhasil Dibuat</h5>
            <div class="card-body">
              <h5 class="card-text">LES `+item.nama+`</h5>
              <p class="card-text">Tanggal Mulai Les `+item.pendidikan+`</p>
              <p class="card-text">Jam Mulai `+item.deskripsi+`</p>
              <a href="home.html" class="btn btn-primary">Home</a>
            </div>
          </div>`
        })
    })

}
getDataApi()