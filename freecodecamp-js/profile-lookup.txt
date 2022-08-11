// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
// Only change code below this line

//Checking whether the name parametre is equal either to the contacts firstName
// or lastName attributes
for(let contact of contacts){
    if(name===contact["firstName"] || name===contact["lastName"]){
        //Here i check if the attrbute prop exist in the object 
        if(contact[prop]){
            return contact[prop];//it return the value of that attribute if it exists
        }else{
            return "No such property" //The string that i return if it doesn't exist
        }
    }
}
return "No such contact"
// Only change code above this line
}

lookUpProfile("Akira", "likes");