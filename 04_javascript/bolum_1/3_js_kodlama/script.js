let ogr1_isim = "ada";
let ogr1_soyad = "bilgi";
let ogr1_dogum = 2012;
let ogr1_matNot1 = 70;
let ogr1_matNot2 = 70;
let ogr1_matNot3 = 80;

let ogr1_ortNot = (ogr1_matNot1 + ogr1_matNot2 + ogr1_matNot3) / 3;
console.log(ogr1_ortNot);

let ogr2_isim = "yiğit";
let ogr2_soyad = "bilgi";
let ogr2_dogum = 2010;
let ogr2_matNot1 = 40;
let ogr2_matNot2 = 40;
let ogr2_matNot3 = 50;

let ogr2_ortNot = (ogr2_matNot1 + ogr2_matNot2 + ogr2_matNot3) / 3;
console.log(ogr2_ortNot);

let suankiYil = new Date().getFullYear();   //bilgisayarın tarihinden güncel alarak işlermi yapar

let ogr1_yas = suankiYil - parseInt(ogr1_dogum);
console.log(ogr1_yas)

let ogr2_yas = suankiYil - parseInt(ogr2_dogum);
console.log(ogr2_yas)

let ogr1_basarilimi = ogr1_ortNot >= 50;
console.log(ogr1_basarilimi);

let ogr2_basarilimi = ogr2_ortNot >= 50;
console.log(ogr2_basarilimi);






