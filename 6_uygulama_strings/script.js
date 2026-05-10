//String Uygulamalari

let url = "https://www.serhatgicer.com";
let kursAdi = "Komple web gelistirme kursu";

//1 - url kac karakterlidir?
console.log("url nin uzunlugu : " + url.length + " karakterlidir");

//2 - kursAdi kac kelimeden olusmaktadir?
console.log(kursAdi.split(" ").length);

//3 - url https ile mi basliyor?
console.log(url.startsWith('https'));

//4 - kursAdi icerisinde web kelimesi var mi?
if(kursAdi.search("web")){
 console.log("True");
}
else{
    console.log("False");
}
//5 - url ve kursAdi degiskenlerini kullanarak asagidaki string bilgiyi olusturunuz.
console.log(url + "/" + kursAdi.toLowerCase().replace(/\s+/g , ""));
// https://www.serhatgicer.com/komple-web-gelistirme-kursu
