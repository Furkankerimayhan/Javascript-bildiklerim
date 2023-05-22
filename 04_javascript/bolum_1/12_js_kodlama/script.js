let simdi = new Date();    //şimdiki tarih - saat bilgisi

//get methods
sonuc = simdi;
sonuc = simdi.getDate();   //sadece günü verir cevap 22
sonuc = simdi.getDay();    //0 = pazar 6 = cumartesi  5 = cuma o günün rakamını verir
sonuc = simdi.getFullYear();   //yıl bilgisi
sonuc = simdi.getHours();    //saat bilgisini verir
sonuc = simdi.getTime();      //şuan ki saat bilgisini milisecond türünden veriyor

//set methods
//simdi.setFullYear(2025);    //2025 üzerinden tarihi veriyor
simdi.setMonth(12);       //burada da ay bilgisini değiştilir 0 = ocak 12 =kasım dır
simdi.setDate(15);        //gün bilgisini değiştiririz


sonuc = simdi;

let dogumTarihi = new Date(1996, 12, 1);

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear(); 

let milisecond = simdi -dogumTarihi;
let saniye = milisecond / 1000;  //saniye
let dakika = saniye / 60;
let saat = dakika / 60;
let gun = saat / 24;

sonuc = gun;

console.log(sonuc);
console.log(typeof sonuc);


