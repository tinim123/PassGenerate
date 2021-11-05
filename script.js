//önce oluşturulan şifreleri sayar
let count=1;
//Slider default değer
document.getElementById("length").innerHTML = "Uzunluk: ";
//slider uzunluk - hareket
document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Uzunluk: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Uzunluk: 1";
    }
}
//şifre kopyala
function copyPassword(){
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Kopyalama Başarılı");
}
function resetClick(){
    window.location.reload()
}
//şifre oluştur
function generate(){
    //Belirlenen uzunlukta oluşturma
    let complexity = document.getElementById("slider").value;
    //Şifre için gerekli karakterler
    let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!=<>/@#$%^&*()_+";
    let password = "";
    //slider içinde ki değer kadar oluşturma (for ile)
    for(var i = 0; i < complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
    //textbox içerisine şifreyi yerleştirme (gerek olmayabilir)
    document.getElementById("display").value = password;
    //Eskiden oluşturulan alana ekleme, otomatik olarak
    document.getElementById("lastNums").innerHTML += count + ": " + password + "<br />";
    count=count+1;
    
}
