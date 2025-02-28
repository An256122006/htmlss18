let a = Number(prompt("moi ban nhap so 5"));
if(a%4==0 && a%100!==0 || a%400==0){
    alert(a+ " la nam nhuan");
}else{
    alert(a + " khong phai la nam nhuan");
}