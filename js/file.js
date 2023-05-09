document.getElementById("showcart").style.display = "none";

var giohang = new Array();
function themvaogiohang(x) {
    var boxsp = x.parentElement.children;
    var gia = boxsp[1].children[0].innerText;
    var tensp = boxsp[2].innerText;
    var soluong = boxsp[3].value;
    var sp = new Array(gia,tensp,soluong);

    giohang.push(sp);

    console.log(giohang);
    showcountsp();
}

function showcountsp() {
    document.getElementById("countsp").innerHTML = giohang.length;
}
function showcart() {
    var x = document.getElementById("showcart");
    if(x.style.display == "block"){
        x.style.display = "none"
    }else{
        x.style.display = "block";
    }
}