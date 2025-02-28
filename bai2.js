let a = Number(prompt("moi ban nhap diem mon toan : "));
let b = Number(prompt("moi ban nhap diem mon anh  : "));
let c = Number(prompt("moi ban nhap diem mon van : "));
let d = parseFloat((a+b+c)/3).toFixed(2);
if(d<5){
    alert(d+" yeu");
}
if(d>=5 && d<=6.4){
    alert(d+" trung binh");
}
if(d>=6.5 && d<=7.9){
    alert(d+" kha");
}
if(d>=8){
    alert(d+" gioi");
}