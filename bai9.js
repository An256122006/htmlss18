let a = Number(prompt("moi ban nhap gio : "));
if(a<0 && a>24){
    let a = Number(prompt("moi ban nhap lai gio : "));
}
let b = Number(prompt("moi ban nhap phut : "));
if(b<0 && b>60){
    let b = Number(prompt("moi ban nhap lai phut : "));
}
let c = Number(prompt("moi ban nhap giay : "));
if(c<0 && c>60){
    let c = Number(prompt("moi ban nhap lai gaiy: "));
}
if(a>12){
    if(b===60 && c===60){
        a==a+1;
        b=0;
        c=0;
    }
    alert(a%12+":"+b+":"+c);
}else{
    alert(a+":"+b+":"+c);
}