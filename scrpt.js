const qrinput = document.querySelector("#input");   
const qrimg = document.querySelector("#qr-img");
const qrbutton = document.querySelector("#qr-button");
 
console.log(qrinput,qrimg,qrbutton)

qrbutton.addEventListener("click",()=>{
    const input = qrinput.value;

    if (input == "") {
        alert("Please enter a url");
    }else{
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}";
        qrimg.alt = "QR Code for ${inputValue}";
    }
});