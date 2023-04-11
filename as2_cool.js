let coolnessIncrement = 100 / 6 //Score the user's coolness out of 100 (we'll round later)
let coolnessScore = 0
let questionNum = 1
let reachedFinal = false

function setup() {
    let sketch = createCanvas(700, 500);
    sketch.parent("mycanvas");
    background(200, 150, 255);
}

function draw() {
noStroke()

if (questionNum === 1) {
  background(200, 150, 255);
  question1()
}

  if (questionNum === 2) {
    background(200, 150, 255);
  question2()
}

  if (questionNum === 3) {
    background(200, 150, 255);
  question3()
}

  if (questionNum === 4) {
    background(200, 150, 255);
  question4()
}

  if (questionNum === 5) {
    background(200, 150, 255);
  question5()
}

  if (questionNum === 6) {
    background(200, 150, 255);
  question6()
}

  if (questionNum === 7 && reachedFinal === false) {
    reachedFinal = true
    background(200, 150, 255);
  result()
}
}

function question1() {
  
  textSize(17)
  textFont('Arial', 15);
  text("1/6: Have you ever played a game in the Rhythm Heaven series by Nintendo? y/n", 50, 100)

}

function question2() {
    textSize(17)
  textFont('Arial', 15);
  text("2/6: Have you ever completed the Pokedex in any Pokemon game? y/n", 50, 100)

}

function question3() {
      textSize(17)
  textFont('Arial', 15);
  text("3/6: Have you heard of the programming language Lua? y/n", 50, 100)
}

function question4() {
        textSize(17)
  textFont('Arial', 15);
  text("4/6: Do you like Nintendo? y/n", 50, 100)
}

function question5() {
          textSize(17)
  textFont('Arial', 15);
  text("5/6: Are you a fan of the glorious food known as popcorn? y/n", 50, 100)
}

function question6() {
            textSize(17)
  textFont('Arial', 15);
  text("6/6: Should pineapple be on pizza? y/n", 50, 100)
}

function result() {
    textSize(22)
  textFont('Arial', 15);
  text("Calculating results...", 50, 100)
  const finalScore = Math.floor(coolnessScore)
  
setTimeout(() => {
  textSize(24) 
  text("Your final score is...", 50, 150)

   setTimeout(() => {
  textSize(26) 
  text(`${finalScore}%!`, 50, 200)
        setTimeout(() => {
          textSize(28) 
          let message = ""

                    if (finalScore == 0) {
            message = "Booo! You suck!"
          }

          if (finalScore == 16) {
            message = "You're not that cool...\nSorry..."
          }
           if (finalScore == 33) {
            message = "You're kinda cool."
          }

              if (finalScore == 50) {
            message = "You're decently cool!"
          }       
              if (finalScore == 66) {
            message = "You're pretty cool!\nMaybe we'd get along?"
          }        

              if (finalScore == 83) {
            message = "You're very cool!\nI'd love to be your friend"
          }       
              if (finalScore == 100) {
            message = "You're PERFECTLY cool!\nYOU'RE AS COOL AS YOU CAN BE!"
          }             
            text(message, 50, 250)
  }, 2000)

     
  }, 2000)
  }, 2000)

 

  
}



function keyPressed() {
  console.log(key)

  if (questionNum === 1 && key === 'y')  {

    coolnessScore += coolnessIncrement
    questionNum = 2
    
  } else if (questionNum === 1 && key === 'n')  {

    questionNum = 2
    
  } else if (questionNum === 2 && key === 'y')  {
 coolnessScore += coolnessIncrement
    questionNum = 3
    
  }else if (questionNum === 2 && key === 'n')  {

    questionNum = 3
    
  }else if (questionNum === 3 && key === 'y')  {
 coolnessScore += coolnessIncrement
    questionNum = 4
    
  } else if (questionNum === 3 && key === 'n')  {

    questionNum = 4
    
  }

   else if (questionNum === 4 && key === 'y')  {
 coolnessScore += coolnessIncrement
    questionNum = 5
    
  }

     else if (questionNum === 4 && key === 'n')  {

    questionNum = 5
    
  }     else if (questionNum === 5 && key === 'y')  {
 coolnessScore += coolnessIncrement
    questionNum = 6
    
  }     else if (questionNum === 5 && key === 'n')  {

    questionNum = 6
    
  }    else if (questionNum === 6 && key === 'y')  {
 coolnessScore += coolnessIncrement
    questionNum = 7
    
  }     else if (questionNum === 6 && key === 'n')  {

    questionNum = 7 }
    


   
}

