let a = Number(prompt("moi ban nhap canh thu 1 : "));
let b = Number(prompt("moi ban nhap canh thu 2  : "));
let c = Number(prompt("moi ban nhap canh thu 3 : "));
if (a + b > c || a + c > b || b + c > a) {
    if (a === b && a === c) {
        alert("la tam giac deu");
    } else if (a == b || b === c || a === c) {
        alert('la tam giac can');
    } else if (a * a + b * b === c * c ||
        a * a + c * c === b * b ||
        b * b + c * c === a * a) {
        alert("lam tam giac vuong");
    } else {
        alert("la tam giac thuong");
    }
}else{
    alert("khong phai tam giac");
}