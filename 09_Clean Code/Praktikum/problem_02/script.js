// class parent
class Kendaraan {
   constructor(totalRoda, kecepatanPerJam) {
       this.totalRoda = totalRoda;
       this.kecepatanPerJam = kecepatanPerJam;
   }
}

// class child dari class Kendaraan 
class Mobil extends Kendaraan {
    constructor(merk, totalRoda, kecepatanPerJam) {
        super(totalRoda, kecepatanPerJam);
        this.merk = merk;
    }
    tambahKecepatan(kecepatanBaru){
        return this.kecepatanPerJam += kecepatanBaru;
    }

    kurangiKecepatan(kecepatanBaru){
        return this.kecepatanPerJam -= kecepatanBaru;
    }
}

let mobilCepat = new Mobil('Honda', 4, 20);
mobilCepat.tambahKecepatan(20);
console.log(mobilCepat)

let mobilLamban = new Mobil('Toyota', 4, 30);
mobilLamban.kurangiKecepatan(10);
console.log(mobilLamban)


