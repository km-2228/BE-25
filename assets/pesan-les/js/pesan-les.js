let formPesan = document.getElementById("form-pesan")
document.getElementById("submit").addEventListener("click", function (event){
    event.preventDefault()
    pesanLes()
    formPesan.reset()
    
})

function pesanLes() {
    console.log("clicked")

    let formData = {
        "peserta_les": document.getElementById("pesanles").value,
        "jenjang_pendidikan": document.getElementById("pendidikan").value,
        topik: document.getElementById("topik").value,
        "detil_topik": document.getElementById("detil-topik").value,
        tanggal: document.getElementById("tanggal").value,
        mulai: document.getElementById("jam-mulai").value,
        selesai: document.getElementById("jam-selesai").value,
        infotambahan: document.getElementById("informasi").value,
    }
    console.log(formData)

    async function postData(url = "", data = {}){
        const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data) ,
        })
        return response.json()
    }
    postData(
        "https://634d2164f5d2cc648e9d4032.mockapi.io/pesan-les",formData
    ).then((data) =>{
        console.log(data)
    })
    
}

