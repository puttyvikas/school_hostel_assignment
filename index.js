
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
      n++;
      continue;
    }
  }
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


