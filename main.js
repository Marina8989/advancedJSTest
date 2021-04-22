const container = document.querySelector('.container');
const header = document.querySelector('#header');

class Person {
    contructor(name, age) {
      this.name = name;
      this.age = age;
    }

    askName() {
        const h2 = document.createElement('h2');
        h2.innerHTML = `<h2>Hi user! What is your name?</h2>`;
        h2.classList.add('move');
        container.append(h2);
        return container;
    }

    giveName(name) {
        const h3 = document.createElement('h3');
        h3.innerHTML = `<h3>My name is ${name}. Would you like to know my age as well?</h3>`;
        h3.classList.add('move');
        container.append(h3);
        return container;
    }
}




let ben = new Person('Ben', 27);
ben.askName();
ben.giveName('Ben');

let mary = new Person('Mary', 23);
mary.askName();
mary.giveName('Mary');


