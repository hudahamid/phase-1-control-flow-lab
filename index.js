function scuberGreetingForFeet(someValue){
  // Write your code here!
  if(someValue<400){
    let str='This one is on me!';
    return str
  }
  else if(someValue>400 &&someValue<2000){
    let str='That will be twenty bucks.';
    return str
  }
  else if(someValue>2000 &&someValue<2500){
    let str='I will gladly take your thirty bucks.';
    return str
  }
  else{
    let str='No can do.';
    return str
  }

}

function ternaryCheckCity(someValue){
  // Write your code here!
  if(someValue==="NYC"){
    let str='Ok, sounds good.';
    return str
  }
  else{
    let str='No go.';
    return str
  }
 
}

function switchOnCharmFromTip(someValue){
  // Write your code here!
  switch(someValue){
    case "generous":
      let str='Thank you so much.';
      return str;

      case "not":
        let str1='Thank you.';
        return str1;

        break;

        default:
         let str2='Bye.';
        return str2
      
  }
}

scuberGreetingForFeet(199)
ternaryCheckCity( "NYC")
switchOnCharmFromTip("not")