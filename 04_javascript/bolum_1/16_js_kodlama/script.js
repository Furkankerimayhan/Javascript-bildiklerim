//dict, json
let kullaniciA = {
    "ad": "Furkan",
    "soyad": "Ayhan",
    "yas": 27,
    "adres": {
        "sehir": "sakarya",
        "ilce": "adapazarı"
    },
    "hobiler": ["sinema","spor"]
}

let kullaniciB = {
    "ad": "Sena",
    "soyad": "Ayhan",
    "yas": 26,
    "adres": {
        "sehir": "istanbul",
        "ilce": "beylikdüzü"
    },
    "hobiler": ["sinema","spor"]
}

let sonuc;

sonuc = kullaniciA.ad;
sonuc = kullaniciA.soyad;
sonuc = kullaniciA["yas"];
sonuc = kullaniciA.adres.sehir;
sonuc = kullaniciA.adres.ilce;
sonuc = kullaniciA.hobiler[0];

let kullanicilar = [
    kullaniciA,
    kullaniciB
];
sonuc = kullanicilar[1].ad;

let urunler = [
    {
        "urun_adi" : "sakarya a11",
        "urun_fiyat": 5000
    },
    {
        "urun_adi" : "sakarya a13",
        "urun_fiyat": 4000
    }
]

sonuc = urunler[0].urun_adi;

console.log(sonuc);