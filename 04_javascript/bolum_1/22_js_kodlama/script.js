var isim = "ahmet";  //global scope
const adres ="sakarya";

adres = "istanbul";

function yazdir(){
    var isim = "ayşe";
    var yas = 20;
    console.log("function scope: ",isim,yas);
}

if(true){
    let cinsiyet = "kadın";
    let isim = "zeynep";
    console.log(isim, cinsiyet);
}

console.log(isim);
yazdir();


// fonksiyonlar kendi scope alanlarını oluştururç
// block içerisinde yeni bir scope oluşamaz. (let, const)

// JavaScript'te var, let ve const anahtar kelimeleri değişkenler oluşturmak için kullanılır. var ES5 öncesi bir anahtar kelime olup, değişkenlerin herhangi bir yerde tanımlanabileceği ve aynı isimde birden fazla değişken tanımlanabileceği anlamına gelir. let ve const ise ES6 ile tanıtılmıştır ve daha katı bir kapsam kurallarına sahiptirler. let ile tanımlanan değişkenler blok kapsamındadır ve tekrar tanımlanamazlar. const ile tanımlanan değişkenler ise sabittir ve tekrar atama yapılamaz.