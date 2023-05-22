// OOP: Nesne Tabanlı Programlama

function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;

    console.log(this);
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let soru1 = new Soru("Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c");
let soru2 = new Soru("Hangisi .net paket yönetim uygulasıdır?", { a: "Node.js", b: "Nuget", c: "Npm" }, "b");

let sorular = [
    new Soru("Hangisi js paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c")
]


console.log(soru1.cevabiKontrolEt("c"));


//JavaScript'de "prototype", bir nesnenin özelliklerini ve metodlarını diğer nesnelere aktarmak için kullanılan bir mekanizmadır. Her JavaScript nesnesi, bir prototype özelliği içerir ve bu özellik, nesnenin üzerinde tanımlanan özellik ve metodların diğer nesnelere nasıl aktarılacağını belirler.
//JavaScript'te, prototip tabanlı bir dil olduğu için, bir nesnenin özellikleri veya metodlarına erişmek için, önce o nesnenin prototipine bakılması gerekir. Bu sayede, prototip kullanarak, kod tekrarını azaltmak ve daha verimli bir şekilde nesne yönetimi yapmak mümkündür.