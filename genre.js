let msg=document.querySelector("#heading");
let displaymsg=document.querySelector("#see-more-msg");

const showmessage = () => {
    displaymsg.innerText=" - SEE MORE - ";
    };
    
    msg.addEventListener("click",showmessage);