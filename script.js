/* paste the JavaScript code from the 'Generated Code' section of the CYF Blocks editor here */
var namesList;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


namesList = [];


document.getElementById('button').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  namesList.push(getNumberOrString(document.getElementById('inputName').value));
  let new_li = document.createElement('li');
  new_li.innerText = namesList.slice(-1)[0];

  element_list.appendChild(new_li);

});

document.getElementById('facilitator').addEventListener('click', (event) => {
  let element_random = document.getElementById('random');
  element_random.innerText = randomMember(namesList);

});
getNumberOrString(document.getElementById('text').value);
