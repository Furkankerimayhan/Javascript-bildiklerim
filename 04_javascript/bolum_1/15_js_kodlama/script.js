//// 1- "Elma,Armut,Muz,Çilek" elemanlarına sahip bir dizi oluşturunuz.
let meyveler = ["elma", "armut", "muz", "çilek"];

//2-Dizi kaç elemanlıdır?
console.log(meyveler.length);

//3-Dizinin ilk ve son elemanı nedir?
console.log(meyveler[0],meyveler[3]);
//3/1-
console.log(meyveler[0]);  //elma
console.log(meyveler[meyveler.length - 1]);   //çilek

//4-Elma dizinin bir elemanımıdır?
console.log(meyveler.includes("elma"));

//5-Kiraz meyvesini listenin sonuna ekleyiniz.
console.log(meyveler.push("kiraz"))
console.log(meyveler);

//6-Dizinin son 2 elemanını siliniz.
console.log(meyveler.splice(-2));
console.log(meyveler);

//7-Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.
let ogrenci1 = ["yiğit", "bilgi", 2010, [70,60,80]];
let ogrenci2 = ["ada", "bilgi", 2012, [70,60,80]];
let ogrenci3 = ["ahmet", "bilgi", 2009, [70,60,80]];

let yil = 2023
console.log(yil - ogrenci1[2]);
console.log(yil - ogrenci2[2]);
console.log(yil - ogrenci3[2]);

let ogrenciler = [ogrenci1, ogrenci2, ogrenci3];

let yigit_yas =  new Date().getFullYear() - ogrenciler[0][2];
let ada_yas =  new Date().getFullYear() - ogrenciler[1][2];
let ahmet_yas =  new Date().getFullYear() - ogrenciler[2][2];

let yigit_not = (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3;
let ada_not = (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3;
let ahmet_not = (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3;

console.log(yigit_not.toFixed(1), ada_not.toFixed(1), ahmet_not.toFixed(1));