const a=[' ','mot', 'hai','ba','bon','nam','sau','bay','tam','chin'];
let b=Number(prompt("moi ban nhap so nguyen bat ky"));
if(b>999){
    let b=Number(prompt("moi ban nhap so nguyen bat ky"));
}else if(b<1000){
    let c = Math.floor(b/100);
    let d = Math.floor(b%100);
    let e = Math.floor(d/10);
    let h = Math.floor(d%10);
    if(b<10){
        alert(a[h]);
    }
    if(b>9 & b<20){
        alert("muoif"+' '+a[h]);
    }
    if(b>19 && b<100){
        alert(a[e]+' ' + "muoi"+' '+a[h]);
    }
    if(b>99 && b<110){
        alert(a[c] +' ' + "tram linh"+ ' '+ a[h] );
    }
    if(b>109 & b<120){
        alert(a[c] +' ' + "tram muoi"+' '+a[h]);
    }
    if(b>119){
        alert(a[e]+' '+'tram'+' '+ a[e]+' '+"muoi"+' '+a[h]);
    }
}