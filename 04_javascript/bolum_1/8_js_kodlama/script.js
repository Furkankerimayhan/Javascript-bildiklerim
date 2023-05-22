let ad = "furkan";
let soyad = "ayhan";
let yas = 27;
let sehir = "sakarya";

let mesaj = "Benim adım " + ad + ' ve soyadım ' + soyad + '. ' + sehir + '\'de yaşıyorum.' + 'Emekliliğe ' + (65 - yas) + ' yılım kaldı.'   //'\'de yaşıyorum.' cümlesinde ' tırnak bırakmak için ters slah kullandık.

// backtick
mesaj = `Benim adım ${ad} ve soyadım  ${soyad}. ${sehir}'de yaşıyorum. Emekliliğe ${65 - yas} yılım kaldı.`;

// ternary operators
let emeklilik = (65 - yas > 0) ? "Emekliliğe " + (65-yas) +" yıl kaldı." : "Zaten emekli oldunuz";
mesaj = `Benim adım ${ad} ve soyadım  ${soyad}. ${sehir}'de yaşıyorum. ${emeklilik}`;

console.log(mesaj) 