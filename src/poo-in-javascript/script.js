// POO com Javascript
class Book {
  // constructor é um metódo para criar atributos,
  // para quando instanciar o objeto dessa classe
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  read() {
    return `Estou lendo ${this.title}`;
  }
}

// Utilizando o conceito de herança
class ITBook extends Book {
  constructor(title, author, pages, technology) {
    super(title, author, pages);
    this.technology = technology;
  }
}

// Utilizando o conceito de encapsulamento (getters e setters)
class Person {
  constructor(name) {
    this._name = name; // é como se a propriedade fosse "privada"
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

var person = new Person("Kevin");
console.log(person.name);
person.name = "Christian";
console.log(person.name);
