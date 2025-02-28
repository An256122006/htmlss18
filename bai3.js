let a = prompt("moi ban nhap chuoi can nhap:");
a=a.trim();
if (a==="ADMIN"){
    let b = prompt("moi ban nhap PassWord: ");
    b=b.trim();
    if(b==="TheMaster"){
        alert("Welcome.");
    }else if(b===null){
        alert("Cancelled.");
    }else{
        alert(" Wrong password.");
    }
} else{
    alert("I Don’t know you");
}