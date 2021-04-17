
const prompt = require("prompt-async");
 
async function schoolHostelAssignment() {
    prompt.start();
 
    let { n } = await prompt.get(["n"]); // get the number of students
    const result = await prompt.get(["id", "class", "food"]); // get id, class and food from input
    console.log(n, result);
    
}
 
schoolHostelAssignment();

