/*
1)iki ogrencinin asagidaki bilgilerini degiskenler icerisinde saklayiniz 
  
   ogrenci 1 : 
       isim : ada bilgi 
       dogum tarihi : 2012 
       matematik notlari : 70, 70, 80

    ogrenci 2 : 
         isim : yigit bilgi
         dogum tarihi : 2010 
         matematik notlari : 40, 40, 50

2) ogrencilerin yas bilgilerini degiskende tutunuz 
3)ogrencilerin ders ortlama notunu degiskende saklayiniz 
4)ogrencilerin 50 gecme notuna gore basari durumlarini degiskende saklayiniz.  
*/



     let ogrenci1 = {
      isim : "ada bilgi",
      dogumTarihi : 2012,
      matematikNotlari : [70,70,80]     
     }

     let ogrenci2 = {
        isim : "yigit bilgi",
        dogumTarihi : 2010,
        matematikNotlari:[40,40,50]
     }
    
     //ogrencilerin yasini hesaplama icin 
     let suankiYil = 2026;
     
     let ogrenciyas1 = suankiYil - ogrenci1.dogumTarihi;
     console.log(ogrenciyas1)

    
     let ogrenciyas2 = suankiYil - ogrenci2.dogumTarihi;
     console.log(ogrenciyas2)

    //oncelikle notlari toplamamiz gerekiyor
     let notToplami1 = ogrenci1.matematikNotlari[0] + ogrenci1.matematikNotlari[1] + ogrenci1.matematikNotlari[2];
     let notToplami2 = ogrenci2.matematikNotlari[0] + ogrenci2.matematikNotlari[1] + ogrenci2.matematikNotlari[2];


     //ogrencilerin not ortalamalarini hesaplamak icin 
      let notOrtalamasi1 = notToplami1 / 3;
      let notOrtalamasi2 = notToplami2 / 3;

      console.log("Ada bilgi nin not ortalamasi : " + notOrtalamasi1);
      console.log("yigit bilgi nin not ortalamasi : " + notOrtalamasi2);


      //simdide dersi gecip gecemediklerini kontrol edelim
      let gectiMi1 = ( notOrtalamasi1 >= 50);
      let gectiMi2 = (notOrtalamasi2 >= 50);

      console.log("Ada gecti mi ? " +  gectiMi1 , "\nYigit gecti mi ? " + gectiMi2  );
      

      //guncelleme atacaz