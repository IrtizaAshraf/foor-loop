

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
    if (num) {
        output.innerHTML += num + " * " + table + " = " + result + "<br>";
    }
    else {
        output.innerHTML = "  value sahii dall bhai "
    }
}

// Call the create function when a button is clicked, for example
const button = document.querySelector('#btn');
button.addEventListener('click', create);




///question num 2


  function create2() {
      const num = +(document.querySelector('#list').value);
      const output = document.querySelector('#output'); // Assuming you have a <ul> element to display the list

      output.innerHTML = ""; // Clear previous content

      for (let list = 1; list <= 10; list++) {
          const result = num = list;
          const listItem = document.createElement('ul');
          listItem.textContent = `${num} * ${list} = ${result}`;
          output.appendChild(listItem);
      }
  }

  // Call the create function when the button is clicked
  const button1 = document.querySelector('#generate');
  button1.addEventListener('click', create);


  ///solve 

const listValue =  document.querySelector('#list');
const output = document.querySelector('#output');

const arr= []

function create2() {
    arr.push(listValue.value); 
    console.log(arr);

    // Clear previous content

    listValue.value = "";


    output.innerHTML = ''; // You can set the number of list items you want
  
    for (let i = 0; i < arr.length; i++) {
        const listItem = arr[i];
        output.innerHTML += `<br> <li>${listItem}</li> <br> <br>`
        // listItem.textContent = `${listValue} - Item ${i}`;
        // output.appendChild(listItem);
    }
}


const additem = document.querySelector("#list");
const arry = document.querySelector("#output");

const arr1 = [];

function list() {
    arr1.push(additem.value);
    console.log(arr1);
    additem.value = "";

    arry.innerHTML = ""; // Clear the previous list content

    for (let g = 0; g < arr1.length; g++) {
        const item = arr1[g];
        arry.innerHTML += `  <br> <li>${item}</li><br>
        <button>Delete</button>
        <button>Edit</button>`
        ;
    }
}






//SOLUTION

// const fruitInput = document.querySelector("#fruit");
// const fruits = ['banana', 'apple', 'orange', 'mosambi', 'papita', 'nashpati'];
// const h3 = document.querySelector("#head")

// function search() {
//     const fruit = fruitInput.value.toLowerCase();
//     let isAvailable = false;

//     for (let i = 0; i < fruits.length; i++) {
//         if (fruits[i] === fruit) {
//             isAvailable = true;
//             break;
//         }
//     }

//     if (isAvailable) {
//         fruitInput.value = `${fruit} is available`;
//         h3.innerHTML(`${fruit}`)
//     } else {
//         fruitInput.value = `${fruit} is not available`;
//     }
// }








/// CORECCET soULTION THE PROBLEM
const fruitInput = document.querySelector("#fruit");
const fruits = ['banana', 'apple', 'orange', 'mosambi', 'papita', 'nashpati', 'mango', 'peach', 'watermalain'];
const h3 = document.querySelector("#head")
const photo = document.querySelector("p")

function search() {
    const fruit = fruitInput.value.toLowerCase();
    let isAvailable = false;

    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === fruit) {
            isAvailable = true;
            break;
            //    if (image) {
            //     fruits `${banana}`
            //     h3.innerHTML = URL(sccing)

            //    }


        }
    }

    if (isAvailable) {
        fruitInput.value = `Yes, we have ${fruit}!`;
        h3.innerHTML = fruit;
        photo.src = "./acceste/banana-removebg-preview.png"
        if (fruits[g] === fruit) {
            photo.src = "./acceste/banana-removebg-preview.png" 
        }

    } else {
        fruitInput.value = `Sorry, ${fruit} is not available.`;
        h3.innerHTML = "Sorry";
    }
}
