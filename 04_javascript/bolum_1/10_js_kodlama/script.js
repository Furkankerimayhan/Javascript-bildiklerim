let url = "https://www.sadikturan.com/";
let kursAdi = "Komple Web Geliştirme Kursu";

let sonuc;
 
// 1- url kaç karakterlidir?
sonuc = url.length;

// 2- kursAdi kaç kelimeden oluşmaktadır?
sonuc = kursAdi.split(" ").length;

// 3- url https ile mi başlıyor?
sonuc = url.startsWith("https");

// 4- kursAdi içerisinde Eğitimi kelimesi var mı?
sonuc = kursAdi.indexOf("Eğitimi");

console.log(sonuc);

// 5- url ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.
console.log(url + kursAdi.replace(/ /gi, "-").toLocaleLowerCase());


kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" ","-");
kursAdi = kursAdi.replace("ş","s").replace("ı","i");

sonuc = `${url}/${kursAdi}`;

console.log(sonuc);