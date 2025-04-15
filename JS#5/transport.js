class TransportnyZasib {
  constructor(marka, model, rikVypusku) {
    if (this.constructor === TransportnyZasib) {
      throw new Error("Неможливо створити об'єкт абстрактного класу");
    }
    this.marka = marka;
    this.model = model;
    this.rikVypusku = rikVypusku;
  }

  отриматиВартістьОбслуговування() {
    throw new Error("Метод 'отриматиВартістьОбслуговування' має бути реалізований у нащадку");
  }

  отриматиІнформацію() {
    return `Марка: ${this.marka}, Модель: ${this.model}, Рік випуску: ${this.rikVypusku}`;
  }

  static поточнийРік() {
    return new Date().getFullYear();
  }
}

class Avtomobil extends TransportnyZasib {
  constructor(marka, model, rikVypusku, kilkistDverey) {
    super(marka, model, rikVypusku);
    this.kilkistDverey = kilkistDverey;
  }

  отриматиІнформацію() {
    return `${super.отриматиІнформацію()}, Кількість дверей: ${this.kilkistDverey}`;
  }

  отриматиВартістьОбслуговування() {
    const currentYear = TransportnyZasib.поточнийРік();
    const age = currentYear - this.rikVypusku;
    return 100 * age + 500;
  }
}

class Mototsikl extends TransportnyZasib {
  constructor(marka, model, rikVypusku, typ) {
    super(marka, model, rikVypusku);
    this.typ = typ;
  }

  отриматиІнформацію() {
    return `${super.отриматиІнформацію()}, Тип: ${this.typ}`;
  }

  отриматиВартістьОбслуговування() {
    const currentYear = TransportnyZasib.поточнийРік();
    const age = currentYear - this.rikVypusku;
    if (this.typ === "спортивний") {
      return 200 * age + 300;
    } else {
      return 100 * age + 200;
    }
  }
}

class Garage {
  constructor() {
    this.transportniZasoby = [];
  }

  додатиТранспортнийЗасіб(transportnyZasib) {
    if (transportnyZasib instanceof TransportnyZasib) {
      this.transportniZasoby.push(transportnyZasib);
    } else {
      console.log("Тільки транспортні засоби можуть бути додані до гаража.");
    }
  }

  отриматиЗагальнуВартістьОбслуговування() {
    return this.transportniZasoby.reduce((total, zasib) => total + zasib.отриматиВартістьОбслуговування(), 0);
  }

  вивестиІнформаціюПроГараж() {
    this.transportniZasoby.forEach(zasib => {
      console.log(zasib.отриматиІнформацію());
    });
  }
}

const avtomobil = new Avtomobil("Toyota", "Camry", 2015, 4);
const mototsikl = new Mototsikl("Kawasaki", "Ninja", 2018, "спортивний");

const garage = new Garage();
garage.додатиТранспортнийЗасіб(avtomobil);
garage.додатиТранспортнийЗасіб(mototsikl);

garage.вивестиІнформаціюПроГараж();
console.log("Загальна вартість обслуговування:", garage.отриматиЗагальнуВартістьОбслуговування());
