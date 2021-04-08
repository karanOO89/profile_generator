const readline = require("readline");

const questions = ["What do you think of Node.js? "];
// ['What is your name? Nicknames are also acceptable :) ']
// ['What activity you like doing?']

let answers = {};
const cmd = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

cmd.question("What is your name? Nicknames are also acceptable :) ", (name) => {
  // let ky = Object.keys(answers)
  // answers[questions[0]] = {opinion}
  // console.log(ky+": "+ answers[questions[0]]);
  cmd.question("Whats an activity you like doing? ", (act) => {
    cmd.question(
      "Which meal is your favourite (eg: dinner, brunch, etc.) ",
      (meal) => {
        cmd.question(
          "Whats your favourite thing to eat for that meal? ",
          (food) => {
            cmd.question(
              "Which sport is your absolute favourite? ",
              (sport) => {
                cmd.question(
                  "What is your superpower? In a few words, tell us what you are amazing at! ",
                  (power) => {
                    console.log("------------------");
                    console.log(
                      `What is your name? Nicknames are also acceptable: ${name} \nWhats an activity you like doing?: ${act}\nWhich meal is your favourite (eg: dinner, brunch, etc.):${meal}\nWhich sport is your absolute favourite?:${sport}\nWhat is your superpower? In a few words, tell us what you are amazing at!:${power}`
                    );
                    cmd.close();
                  }
                );
              }
            );
          }
        );
      }
    );
  });
  // // Which sport is your absolute favourite?
  // // What is your superpower? In a few words, tell us what you are amazing at!
  //  console.log(answers)
  //  cmd.close();
});

// const survey = (questions) => {
// console.log(questions.length);
// if (!questions.length) {
//   return cmd.close();
// } else {
//   for (let ele of questions) {
//     cmd.question(`${ele} `, (answer) => {
//       answers[ele] =  answer;
//       cmd.close();
//     });
//   }
// }
// };

// // survey(questions);
// if{ele }
// console.log(answers);
// }
// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//   rl.question('What is your name? Nicknames are also acceptable :) ', (answer) => {
//     // TODO: Log the answer in a database
//     console.log(`Name: ${answer}`);
//   // What's your name? Nicknames are also acceptable :)
// // What's an activity you like doing?
// // What do you listen to while doing that?
// // Which meal is your favourite (eg: dinner, brunch, etc.)
// // What's your favourite thing to eat for that meal?
// // Which sport is your absolute favourite?
// // What is your superpower? In a few words, tell us what you are amazing at!

//   rl.close();
// });

// rl.question('Whais your name? Nicknames are also acceptable :) ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Name: ${answer}`);
//   // What's your name? Nicknames are also acceptable :)
// // What's an activity you like doing?
// // What do you listen to while doing that?
// // Which meal is your favourite (eg: dinner, brunch, etc.)
// // What's your favourite thing to eat for that meal?
// // Which sport is your absolute favourite?
// // What is your superpower? In a few words, tell us what you are amazing at!

//   rl.close();
// });
