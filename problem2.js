//Problem 2 : Check whether a string is palindrome or not.


  let str = "abcba";
  let new_str = "";
  for(let i=str.length-1; i>=0; i--){
  new_str += str[i];
  }
  if(new_str == string){
  console.log("Given String is a plaidrome");
  } else {
         console.log("Given string is not a palindrome");
  }
    