//ex 1 


const push = function () {
    console.log("pushing it!")
}

const pull = function () {
    console.log("pulling it!")
}
const pushPull = (f) => {
    f();

}
pushPull(push) 
pushPull(pull) 

//ex 2

const returnTime = function (time) {
    alert('The current time is: ' + time)
}
const getTime = (fun) => {
    
    fun(new Date());
}
getTime(returnTime)


//ex 3


const logData = (data) => console.log(data)
const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
  };
  
  displayData(alert, logData, "I like to party")

  //exersize 4

  const sum3params = (i,j,k) => i+j+k;
  console.log(sum3params(10,20,30));

  //ex 5



const capitalize = (s) =>  "return "+s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

console.log(capitalize("bOb")) 
console.log(capitalize("TAYLOR"))
console.log(capitalize("feliSHIA")) 

// ex 6 

const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }

 const commentOnWeather = (num) => "it's " + determineWeather(num)

console.log(commentOnWeather(30)) //returns "It's hot"
console.log(commentOnWeather(22)) //returns "It's cold"

//ex 7 

const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
  }
      
  const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
  const makeSound = sound => alert(sound)
      
  explode(shineLight, makeSound, "BOOM")

