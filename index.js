const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
  "/"];
let passOne = document.getElementById("password1-el")
let passTwo = document.getElementById("password2-el")

function generatePasswords() {
  let passwordOne = makePassword()
  let passwordTwo = makePassword()

  passOne.textContent = passwordOne

    passTwo.textContent= passwordTwo
}

  
function makePassword() {
  let times = 15
  let length = characters.length
  let password = []
  for ( let i = 0; i < times; i++ ) {

    let x = Math.floor(Math.random() * length) 
    password.push(characters[x]) 
    
  }
  password = password.toString()
  console.log(password)
  return password
}