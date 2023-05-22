// 1- Bir sayının 10-50 arasında olup olmadığını kontrol ediniz.
//1-
let sayi = 33
if(sayi >= 10 && sayi <= 50){
    console.log("sayi 10-50 arasındadır")
}else{
    console.log("sayı 10-50 arasında değildir.")
}

// 2- Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz.
 //2-
if(sayi > 0 && sayi % 2 == 1){
    console.log("sayı pozitif tek basamaklıdır")
}

// 3- x, y, z sayılarının büyüklük karşılaştırmasını yapınız.
//3-
let x = 1;
let y = 2;
let z = 3;

if(x > y && x > z){
    console.log("x, y ve z'den büyüktür")
}else if(y > x && y > z){
    console.log("y, x ve z'den büyüktür")
}else if(z > x && z > x){
    console.log("z, x ve y'den büyüktür")
}else{
    console.log("En az iki değişken eşit veya hepsi eşittir.");
}

// 4- 2 vize (40%) ve 1 final(60%) notuna göre hesaplanan ortalama için;
//4-
let vize1 = 50;
let vize2 = 60;
let final = 70;

let ortalama = (((vize1 + vize2) / 2) * 0.4) + (final * 0.6);

// a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.
if(ortalama >= 50){
    console.log("geçti");
}else{
    console.log("kaldı")
}

// b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
if(ortalama >= 50 && final >=50){
    console.log("geçti");   
}else{
    console.log("kaldı")
}

// c- Finalden 70 alındığında ortalama 50' nin altında olsa bile dersten geçilsin.
if(final >= 70 || ortalama >= 50){
    console.log("geçti");   
}else{
    console.log("kaldı")
}