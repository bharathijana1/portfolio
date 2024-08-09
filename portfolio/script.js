let iname = document.getElementById("iname");
let iemail = document.getElementById("iemail");
let ipno = document.getElementById("ipno");
let itextarea = document.getElementById("itextarea");

let errname = document.getElementById("errname");
let erremail = document.getElementById("erremail");
let errpno = document.getElementById("errpno");
let errmsg = document.getElementById("errmsg");

var formelement = document.getElementById("submitbtn")
formelement.addEventListener('submit',event=>{
    let isvalid = true;

    errname.style.display = "none";
    erremail.style.display = "none";
    errpno.style.display = "none";
    errmsg.style.display = "none";

    if(iname.value == ''){
        errname.style.display = "block";
        isvalid = false
    }
    if(iemail.value == ''){
        erremail.style.display = "block";
        isvalid = false
    }
    if(ipno.value == ''){
        errpno.style.display = "block";
        isvalid = false
    }
    // if(itextarea==''){
    //     errmsg.style.display = "block";
    //     isvalid = false
    // }
    if(!isvalid){
        event.preventDefault();
    }


})


