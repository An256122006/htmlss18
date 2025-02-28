let a=Number(prompt("moi bannhap so a"));
let b=Number(prompt("moi ban nhhap so b"));
let c=prompt("moi ban nnhhap phep tinh:");
c=c.trim();
if(c==="+"){
    let tong = a + b;
    alert("tong = "+tong);
}
if(c==="-"){
    let tong = a - b;
    alert("hieu = "+tong);
}
if(c==="."){
    let tong = a * b;
    alert("nhan = "+tong);
}
if(c==="/"){
    let tong = a / b;
    alert("chia = "+tong);
} else{
    alert ("phep tinh khong hop le");
}