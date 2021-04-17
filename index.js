
const prompt = require("prompt-async");
 
async function schoolHostelAssignment() {
  prompt.start();

  let { n } = await prompt.get(["n"]); // get the number of students
  const students = [];
  for(let i=0; i<n; i++) {
    const result = await prompt.get(["id", "class", "food"]); // get id, class and food from input
    
    const errors = checkErrors(result);
    if(errors.length !== 0) {
      errors.forEach(error => console.log(error));
      n++; // if the error occurs increase n till the success
      continue;
    }

    const isRegistered = pushToInput(students, result);
    if(!isRegistered) {
      console.log('Student already registered...please try with another id');
      n++
    } else {
      console.log('Student Registered successfully!', result);
    }
    console.log('Currently registered students ==>', students);
  }
  
  // log final output
  console.log('BV :', printOutput(students, 'B', 'V'));
  console.log('AV :', printOutput(students, 'A', 'V'));
  console.log('BNV :', printOutput(students, 'B', 'NV'));
  console.log('ANV :', printOutput(students, 'A', 'NV'));
}

schoolHostelAssignment();

// check for valid input
function checkErrors(obj) {
  let errors = [];
  if(obj.id.toString().length !== 4) errors.push('id must be 4 digits');
  if(obj.class !== 'A' && obj.class !== 'B') errors.push('invalid class');
  if(obj.food !== 'V' && obj.food !== 'NV') errors.push('invalid food preference');
  return errors;
}

// check student and add
function pushToInput(input, obj) {
  const index = input.findIndex((item) => item.id === obj.id);
  if(index === -1) {
    input.push(obj);
    return true;
  } else {
    return false;
  }
}

// filter frinal output
function printOutput(input, a, b) {
  return input.filter(item => item.class === a && item.food === b).map(item2 => item2.id);
}

