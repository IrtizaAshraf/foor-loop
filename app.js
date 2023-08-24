

// function create() {
//       const num = +(document.querySelector('#number').value);      
// for (let tabel = 1; tabel <= 10; tabel++){
//       // const element = array[tabel];
//       num.innerHTML(num + " * " + tabel + " = "   )
// }
// }
// console.log(num);


function create() {
      const num = +(document.querySelector('#number').value);
      const output = document.querySelector('#tabel'); // Assuming you have an HTML element to display the output
      
      output.innerHTML = ""; // Clear previous content
      
      for (let table = 1; table <= 10; table++) {
          const result = num * table;
          output.innerHTML += num + " * " + table + " = " + result + "<br>";
      }
  }
  
  // Call the create function when a button is clicked, for example
  const button = document.querySelector('#btn');
  button.addEventListener('click', create);




 ///question num 2
  

  function create() {
      const num = +(document.querySelector('#number').value);
      const output = document.querySelector('#output'); // Assuming you have a <ul> element to display the list
      
      output.innerHTML = ""; // Clear previous content
      
      for (let table = 1; table <= 10; table++) {
          const result = num * table;
          const listItem = document.createElement('li');
          listItem.textContent = `${num} * ${table} = ${result}`;
          output.appendChild(listItem);
      }
  }
  
  // Call the create function when the button is clicked
  const button = document.querySelector('#generate');
  button.addEventListener('click', create);
  