let kusrAdi = "   Komple uygulamalı web geliştirme";   //https://www.w3schools.com/jsref/jsref_includes.asp

let sonuc;

sonuc = kusrAdi.toLowerCase();   //tüm karakterler küçük harfe çevrilir
sonuc = kusrAdi.toUpperCase();   //tüm karakterler büyük harfe çevrilir
sonuc = kusrAdi.length;          //String içerisindeki karakterleri sayar ve kaç karakter olduğunu gösterilir.
sonuc = kusrAdi[1];              //kaçıncı indeksteyse o indeksteki karakteri getilir
sonuc = kusrAdi.slice(0, 6);     //0 ncı indeksten 6 ncı indekse kadar olan karakterleri getirttiriyoruz
sonuc = kusrAdi.slice(10);
sonuc = kusrAdi.slice(-10); 

sonuc = kusrAdi.substring(0, 6);  //0 ncı indeksten 6 ncı indekse kadar olan karakterleri getirttiriyoruz
sonuc = kusrAdi.substring(10);

sonuc = kusrAdi.replace("web", "kursu");    //web yerine kursu yazdırdık
sonuc = kusrAdi.trim();             //baştaki ve sondaki bütün boşlukları siler
sonuc = kusrAdi.trimEnd();          //sondaki boşlukları siler 
sonuc = kusrAdi.trimStart();        //baştaki boşlukları siler

sonuc = kusrAdi.indexOf("Komple")    //kaçıncı indekste olduğunu gösterir
sonuc = kusrAdi.split(" ");          //[ '', '', '', 'Komple', 'uygulamalı', 'web', 'geliştirme' ] bu şekilde ayırır
sonuc = kusrAdi.split(" ")[3];       //dizinin elemanı gelir

console.log(sonuc);
