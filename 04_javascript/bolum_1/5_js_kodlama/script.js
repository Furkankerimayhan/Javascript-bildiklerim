//Mantıksal Operatörler
if (3 > 2) {
  console.log("Merhaba");
}
// 3, 2'den büyükse yazdırır.

let username = "furkan";
let password = "1234";


if (username == "furkan") {
    if(password == "1234"){
        console.log("Uygulamaya giriş yapıldı");
    }else{
        console.log("parola yanlış")
    }
  
} //burada yukarıda girilen isLoggedin bilgisi true ise kod çalışır false ise bilgi yazdırılmaz
else {
  console.log("kullanıcı adı yanlış");
} //burada ise yukarıdaki bilgi false ise yanlış bir bilgi ise buradaki bilgi yazdırılır.

// if (!isLoggedin){
//     console.log("merhaba");
// }
