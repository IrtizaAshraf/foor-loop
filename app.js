

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
    else{
        output.innerHTML = "  value sahii dall bhai "
    }
}

// Call the create function when a button is clicked, for example
const button = document.querySelector('#btn');
button.addEventListener('click', create);




///question num 2


//   function create2() {
//       const num = +(document.querySelector('#list').value);
//       const output = document.querySelector('#output'); // Assuming you have a <ul> element to display the list

//       output.innerHTML = ""; // Clear previous content

//       for (let list = 1; list <= 10; list++) {
//           const result = num = list;
//           const listItem = document.createElement('ul');
//           listItem.textContent = `${num} * ${list} = ${result}`;
//           output.appendChild(listItem);
//       }
//   }

//   // Call the create function when the button is clicked
//   const button1 = document.querySelector('#generate');
//   button1.addEventListener('click', create);



function create2() {
    const listValue = + document.querySelector('#list').value;
    const output = document.querySelector('#output');

    // Clear previous content
    output.innerHTML = listValue;
   

    const itemCount = 5; // You can set the number of list items you want

    for (let i = 1; i <= 10; i++) {
        const listItem = document.createElement('p');
        listItem.textContent = `${listValue} - Item ${i}`;
        output.appendChild(listItem);
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
        h3.innerHTML  = fruit;

    } else {
        fruitInput.value = `Sorry, ${fruit} is not available.`;
        h3.innerHTML = "Sorry";
    }
}
