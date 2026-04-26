// Degisken türleri 

var urunAdi = 'Iphone 15'; //string
var urunFiyat = "7000";    //string tek veya cift tirnak arasinda hicbir fark yoktur.

var urunFiyat2 = 400;      //number veri türü 

console.log(typeof urunAdi);  //typeof sayesinde veri türünü ogrenebiliriz
console.log(typeof urunFiyat);
console.log(typeof urunFiyat2); 

var sayi1 = 10;
var sayi2 = 20;

console.log(sayi1 + sayi2);

var ad = "sadik";
var soyad = "turan";

console.log(ad + " " +soyad);

ad  = "cinar";//sonradan degistirilebilir

console.log(ad + " " + soyad); 

var sinavNotu = 50;
var basariliMi = (sinavNotu >= 50 ); //egerki 50 ye esit buyuk ise true dondur kucuk ise false degerini dondur

console.log(typeof basariliMi);   //boolean bir deger
console.log(basariliMi);