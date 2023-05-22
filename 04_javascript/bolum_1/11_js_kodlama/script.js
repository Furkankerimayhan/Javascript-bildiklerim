let sonuc;

sonuc = 10;
sonuc = "10";
sonuc = Number("10");
sonuc = parseInt("10.6");     //cevap 10 olur ınt olduğu için
sonuc = parseFloat("10.6");   //cevap 10.6 olur float olduğu için
sonuc = parseInt("10a");   //cevap 10 olur
sonuc = parseInt("a10");   //cevap nan olur çevrilmez

sonuc = isNaN("10a");    //burada sayısal bir değer değil mi diye soruyoruz cevap true sayısal değildir

let sayi = 15.135245;

sonuc = sayi.toPrecision(5);   //5 basamaklı bir değer gönderir cevap 15.135
sonuc = sayi.toFixed(5);       //ondalıklı kısmın 5 basamağını alır cevap 15.13524

sonuc = Math.round(2.5);      //yuvarlama işlemi yapar 2.4 2ye daha yakın olduğu için cevap 2 olur 2.5 olursa 3 olur
sonuc = Math.ceil(2.1);       //burada her zaman yukarı yuvarlar cevap 3
sonuc = Math.floor(2.9);       //burada her zaman aşağıya yuvarlar cevap 2
sonuc = Math.sqrt(25);       //karekökünü alır cevap 5
sonuc = Math.pow(2,3);       //2 * 2 * 2 = 8 demek 
sonuc = Math.abs(-10);      //sonuç her zaman pozitif olur
sonuc = Math.min(53,4,1,6,8,5)    //minumum olanı verir cevap 1
sonuc = Math.max(53,4,1,6,8,5)    //maksimum olanı verir cevap 53
sonuc = Math.random();    //rastgele sayı üretir 0 ile 1 arasında
sonuc = Math.random() * 10;    //rastgele sayı üretir 0 ile 10 arasında
sonuc = Math.floor(Math.random() * 10);    //rastgele sayı üretir 0 ile 10 arasında ama yuvarlanmış halini verir
sonuc = Math.floor(Math.random() * 100) + 50;    //rastgele sayı üretir 50 ile 100 arasında ama yuvarlanmış halini verir





console.log(typeof sonuc);
console.log(sonuc);