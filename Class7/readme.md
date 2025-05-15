- **JavaScript Object (JS)**
  - Part of the JavaScript language
  - Can include functions, methods, and complex logic
  - Allows dynamic operations and data manipulation
  - Example:
    ```js
    const person = {
      name: "John",
      age: 30,
      greet: function () {
        console.log(`Hello, my name is ${this.name}`);
      },
    };
    person.greet(); // Outputs: Hello, my name is John
    ```
- **JSON (JavaScript Object Notation)**
  - Lightweight data interchange format
  - Used for transmitting data between server and client
  - Strict structure with key-value pairs, no functions
  - Only supports strings, numbers, booleans, arrays, objects, and null
  - Example:
    ```json
    {
      "name": "John",
      "age": 30
    }
    ```
