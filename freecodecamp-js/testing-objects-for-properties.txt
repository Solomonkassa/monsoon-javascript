function checkObj(obj, checkProp) {
  // Only change code below this line
   let objFlag;
   let objVal;

   objFlag = obj.hasOwnProperty(checkProp);
   objVal = obj[checkProp];
  
  if (objFlag) return objVal
  else return "Not Found"

  // Only change code above this line
}