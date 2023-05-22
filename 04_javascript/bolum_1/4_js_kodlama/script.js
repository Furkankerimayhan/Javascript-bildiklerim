let sonuc;
let a = 10, b = 20, c = 30;

// 1-Aritmetik Operatörleri
sonuc = a + b;
sonuc = a - b;
sonuc = a * b;
sonuc = a / b;
sonuc = a % b;
sonuc = a++;  // a + 1   burada a nın üstüne 1 ekler ama a yı istediğimizde eklenmiş sonucu verir
sonuc = ++a;  // a  +1   burada ise yine 1 ekler ve sonucu direkt verir.
sonuc = a--;
sonuc = --a;

// 2-Atama Operatörleri
sonuc = a;
sonuc += a  //sonuc = sonuc + a
sonuc -= a  //sonuc = sonuc - a
sonuc *= a  //sonuc = sonuc * a
sonuc /= a  //sonuc = sonuc / a
sonuc %= a  //sonuc = sonuc % a

// 2-Karşılaştırma Operatörleri
sonuc = (a == b)   // a b ye eşit mi?
sonuc = (a != b)   // a b ye eşit değil mi?
sonuc = (3 === "3")   // değer kontrolü yapar  cevap false
sonuc = (a > b)
sonuc = (a < b)
sonuc = (a <= b)



console.log(sonuc);
// console.log(a);
