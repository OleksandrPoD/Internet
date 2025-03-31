class TransportnyZasib {
    constructor(marka, model, rikVypusku) {
        this.marka = marka;
        this.model = model;
        this.rikVypusku = rikVypusku;
    }

    otrymatyInformaciyu() {
        return `${this.marka} ${this.model}, ${this.rikVypusku} рік`;
    }

    otrymatyVartistObslugovuvannya() {
        throw new Error("Метод повинен бути реалізований у підкласах");
    }

    static otrymatyPotocnyRik() {
        return new Date().getFullYear();
    }
}

class Avtomobil extends TransportnyZasib {
    constructor(marka, model, rikVypusku, kilkistDverey) {
        super(marka, model, rikVypusku);
        this.kilkistDverey = kilkistDverey;
    }

    otrymatyInformaciyu() {
        return `${super.otrymatyInformaciyu()}, дверей: ${this.kilkistDverey}`;
    }

    otrymatyVartistObslugovuvannya() {
        return (TransportnyZasib.otrymatyPotocnyRik() - this.rikVypusku) * 500;
    }
}

class Motocykl extends TransportnyZasib {
    constructor(marka, model, rikVypusku, typ) {
        super(marka, model, rikVypusku);
        this.typ = typ;
    }

    otrymatyInformaciyu() {
        return `${super.otrymatyInformaciyu()}, тип: ${this.typ}`;
    }

    otrymatyVartistObslugovuvannya() {
        return (TransportnyZasib.otrymatyPotocnyRik() - this.rikVypusku) * 300;
    }
}

class Garazh {
    constructor() {
        this.transportniZasoby = [];
    }

    dodatyTransportnyZasib(transportnyZasib) {
        this.transportniZasoby.push(transportnyZasib);
    }

    otrymatyZagalnuVartistObslugovuvannya() {
        return this.transportniZasoby.reduce((sum, zasib) => sum + zasib.otrymatyVartistObslugovuvannya(), 0);
    }

    vyvestyInformaciyuProGarazh() {
        this.transportniZasoby.forEach(zasib => {
            console.log(zasib.otrymatyInformaciyu());
        });
    }
}

// Приклад використання
const garazh = new Garazh();
const avto = new Avtomobil("Toyota", "Camry", 2018, 4);
const moto = new Motocykl("Yamaha", "R1", 2020, "спортбайк");

garazh.dodatyTransportnyZasib(avto);
garazh.dodatyTransportnyZasib(moto);

garazh.vyvestyInformaciyuProGarazh();
console.log("Загальна вартість обслуговування:", garazh.otrymatyZagalnuVartistObslugovuvannya(), "грн");

