class Key {
  constructor(private signature: number) {}
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door = false;
  private tenants: Person[] = [];

  constructor(protected key: Key) {}

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Welcome home!");
    }
  }

  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  public openDoor(myKey: Key): void {
    if (this.key.getSignature() === myKey.getSignature()) {
      this.door = true;
      console.log("Home sweet home!");
    } else {
      console.log("BURGLAR!!!!");
    }
  }
}

const key = new Key(Math.random());

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
