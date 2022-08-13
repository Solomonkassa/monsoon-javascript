// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
const valueLookup = {
  alpha: "Adams",
  bravo: "Boston",
  charlie: "Chicago",
  delta: "Denver",
  echo: "Easy",
  foxtrot: "Frank"
};

  result = valueLookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");