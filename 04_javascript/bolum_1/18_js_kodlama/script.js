//döngü

// let toplam = 0;

// for (let i = 0; i <= 10; i++) {       //1 den 55 e kadar yazar
//   //kod
//   toplam += i;
//   console.log(toplam);
// }

// for (let i = 0; i <= 10; i++) {          //55 yazar sadece
//   toplam += i;
// }
// console.log(toplam);


let sayilar = [1,4,5,8,4,9];

let toplam = 0;

// for(let i=0; i < sayilar.length; i++){
//     toplam += sayilar[i];
// }

// for(let i in sayilar){
//     toplam += sayilar[i];
// }

for(let sayi of sayilar){
    toplam += sayi;
}

console.log(toplam);

let user = {
    "name" : "furkan kerim",
    "username":"ayhan",
    "password": "12345",
    "email": "furkankerimayhan1@hotmail.com"
};

for(let key in user){
    console.log(key);
    console.log(user[key]);
}