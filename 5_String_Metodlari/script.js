//Strings Metodlari 

var kursAdi = "Komple uygulamali javascript kursu";

var sonuc;

sonuc = kursAdi.toLowerCase(); // toLowerCase metodu ile tüm text i kücük yazilmis metne donustururuz
sonuc = kursAdi.toUpperCase(); // toUpperCase metodu ile de buyuk karakterlere donustururuz
sonuc = kursAdi.length; // ile de metnin kac karakterli oldugunu buluruz 0 dan baslar [34 karakterli]
sonuc = kursAdi.slice(0,6); // 0. indeksten 6 ci indekse kadarki text metnini alir
sonuc = kursAdi.repeat(12); // metni tekrar yazdirmak icin 12 kere yazdirmis olduk
sonuc = kursAdi.slice(10); // 11 ci karakterden itibaren yazdirir
sonuc = kursAdi.slice(-10); // sondan 10  karakterden itibaren yazdirir
sonuc = kursAdi.slice(-10,-5); // sondan 11. karakterden sondan 6. karaktere kadar yazdir
sonuc = kursAdi.substring(0,6) //substring de slice ile birebir bir yontemdir
sonuc = kursAdi.replace("kursu","Egitimi"); //replace ise kursu kelimesini egitimi kelimesiyle degistir anlamina gelir
sonuc = kursAdi.trim();//bas ve sondaki bosluklari siler ornegin bir kullanici mail adresinde bosluk girince kullanilir
sonuc = kursAdi.trimStart();//sadece bastaki bosluklari siler
sonuc = kursAdi.trimEnd(); //sadece sondaki bosluklari siler
sonuc = kursAdi.indexOf("Web"); //web in basladigi index numarasini verir
sonuc = kursAdi.split(" "); //texti ayirir kelimlere 
sonuc = kursAdi.split(""); //texti harflare ayirir
sonuc = kursAdi.split("",2) // ilk iki harfi verir
sonuc = kursAdi.split(" " , 2); // ilk iki kelimeyi verir
sonuc = kursAdi.split(" ")[3]; //direk olarak 3. indexteki kelimeyi verir yani 4 u siradaki kelimeyi 


console.log(sonuc)