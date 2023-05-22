let ogenciler = ["çınar", "yiğit", "ada"];                  //https://www.w3schools.com/jsref/jsref_obj_array.asp

sonuc = ogenciler.length;

//array to string
sonuc = ogenciler.toString();
sonuc = ogenciler.join(" "); //metodunun içine geçirilen parametre, birleştirme işlemi sırasında öğeler arasına eklenen karakter veya dizeyi belirtir.

//eleman silme
sonuc = ogenciler.pop();     //son eleman silinir ve silinen eleman geri döndürülür.
sonuc = ogenciler.shift();   //ilk eleman silinir.

//eleman ekleme 
sonuc = ogenciler.push("sena");   //dizinin sonuna eleman ekler
sonuc = ogenciler.unshift("furkan");   //en başına eklenir

let markalar1 = ["mazda", "toyota"];
let markalar2 = ["opel", "mercedes"];
let markalar3 = ["renault"];

sonuc = markalar1.concat(markalar2);   //dizi elemanlarını birleştirir
sonuc = markalar1.splice(0, 0, markalar2);     //bu şekilde üstteki gibi markalar 1 in üzerine markalar 2 şekilde elemanı birleştirdik bu şekilde ekleme veya silme de yapılabilir.
sonuc = markalar1.splice(0, 1);  //silme


console.log(sonuc);
