const input = document.getElementById("input");
const button = document.getElementById("button");
const qrcode = document.getElementById("qrcode");

button.addEventListener('click',myfunction);

function myfunction(){
    if(!input.value){
        console.log("ooooo");
    }else{
        fetch('https://qr-code-generator-cxim.vercel.app/',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'link':`${input.value}`})
        })
        .then(res => res.json())
        .then(data => {
            qrcode.innerHTML = `${data.qr}`;
        })
        .catch(err=> console.log(`error: ${err}`));
    }

}



