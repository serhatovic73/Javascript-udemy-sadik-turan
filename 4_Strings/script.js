//Strings
let ad = "Serhat";
let soyad = "Gicer";
let yas = 23;
let sehir = "Sirnak";

let mesaj1 = "Benim Adim " + ad + " ve Soyadim " + soyad + "." + sehir + " \'ta yasiyorum." + " Emekliligime " +(65-yas) + " Yil Kaldi."  ;

//Template Strings
let mesaj2 = `Benim Adim ${ad} ve Soyadim ${soyad}.${sehir} 'ta yasiyorum. Emekliligime ${65-yas} Yil Kaldi.`;

console.log(mesaj1)
console.log(mesaj2) 