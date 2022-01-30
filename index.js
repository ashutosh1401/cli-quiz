#!/usr/bin/env node

import chalk from 'chalk'
import inquirer from 'inquirer'
import chalkAnimation from 'chalk-animation'
import figlet from 'figlet'
import gradient from 'gradient-string'
import { createSpinner } from 'nanospinner'

let playerName;

let correctNo=0;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function entrance() {
    const welcomeTitle = chalkAnimation.rainbow(
        `Welcome to javascript quiz.. \n`
    )

    await sleep()
    welcomeTitle.stop()

    console.log(`
    ${chalk.bgBlue('HOW TO PLAY')} 
    I am a CLI app running on your computer
    If you get any question wrong . Player would be Lmao ded
    So get all the questions right...
  `);
}

async function checkAnswer(isCorrect) {
    const spinner = createSpinner('Checking answer...').start();
    await sleep();

    if (isCorrect) {
        spinner.success({ text: `Nice work ${playerName}. That's a legit answer` });
        correctNo++;
      } else {
        spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!\n You scored ${correctNo}/10` });
        process.exit(1);
      }
}

async function askName() {
    const answers = await inquirer.prompt({
      name: 'player_name',
      type: 'input',
      message: 'What is your name?',
      default() {
        return 'Player';
      },
    });
  
    playerName = answers.player_name;
}


function winner() {
    console.clear();
    figlet(`Congrats , ${playerName} !\n You are Javascript champ`, (err, data) => {
      console.log(gradient.pastel.multiline(data) + '\n');
      
      console.log(
          chalk.green('Time, Tide and JavaScript waits for no one')
      )
      process.exit(0);
    });
}

async function questionOne() {
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'JavaScript is an ______ Language. \n',
        choices: [
          'Object-Oriented',
          'Object-Based',
          'Procedural',
          'None of these',
        ],
      });

      return checkAnswer(answers.question_1 === "Object-Oriented")
}

async function questionTwo() {
    const answers = await inquirer.prompt({
        name: 'question_2',
        type: 'list',
        message: `What will be the output of the following code snippet?\n
        (function(){
          setTimeout(()=> console.log(1),2000);
          console.log(2);
          setTimeout(()=> console.log(3),0);
          console.log(4);
         })();
         `,
        choices: [
          '1 2 3 4',
          '2 3 4 1',
          '2 4 3 1',
          '4 3 2 1',
        ],
      });

      return checkAnswer(answers.question_2 === "2 4 3 1")
}
async function questionThree() {
    const answers = await inquirer.prompt({
        name: 'question_3',
        type: 'list',
        message: `What will be the output of the following code snippet?\n
        var a = Math.max();
        var b = Math.min();
        print(a);
        print(b);`,
        choices: [
          '-Infinity Infinity',
          'Infinity -Infinity',
          'Infinity Infinity',
          '-Infinity -Infinity',
        ],
      });

      return checkAnswer(answers.question_3 === "-Infinity Infinity")
}
async function questionFour() {
    const answers = await inquirer.prompt({
        name: 'question_4',
        type: 'list',
        message: 'The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called? \n',
        choices: [
          'Object Encapsulation',
          'Object Serialization',
          'Object Inheritance',
          'None of these',
        ],
      });

      return checkAnswer(answers.question_4 === "Object Serialization")
}

async function questionFive() {
  const answers = await inquirer.prompt({
    name: 'question_5',
    type: 'list',
    message: `
    What is the output of the following code snippet?\n

    print(NaN === NaN);`,
    choices: [
      'True',
      'False',
      'Undefined',
      'Error',
    ],
  });

  return checkAnswer(answers.question_5 === "False")
}

async function questionSix() {
  const answers = await inquirer.prompt({
    name: 'question_6',
    type: 'list',
    message: `What will be the output of the following code snippet?\n

    var a = "hello";
    var sum = 0;
    for(var i = 0; i < a.length; i++) {
      sum += (a[i] - 'a');
    }
    print(sum);`,
    choices: [
      '47',
      '0',
      'NaN',
      'Error',
    ],
  });

  return checkAnswer(answers.question_6 === "NaN")
}

async function questionSeven() {
  const answers = await inquirer.prompt({
    name:"question_7",
    type: "list",
    message: `What will be the output of the following code snippet?\n
    const set = new Set();
    set.add(5);
    set.add('Hello');
    set.add({ name: 'Scaler' });
    for (let item of set) {
      console.log(item + 6);
    }`,
    choices: [
      '11 NaN NaN',
      '11 NaN [object Object]',
      '11 Hello6 [object Object]6',
      'None of the Above'
    ]
  })

  return checkAnswer(answers.question_7 === "11 Hello6 [object Object]6")
}

async function questionEight() {
  const answers = await inquirer.prompt({
    name:"question_8",
    type: "list",
    message: `What will be the output of the following code snippet?\n
    
    const obj1 = {Name: "Hello", Age: 16};
    const obj2 = {Name: "Hello", Age: 16};
    print(obj1 === obj2);`,
    choices: [
      'Undefined',
      'Error',
      'True',
      'False'
    ]
  })

  return checkAnswer(answers.question_8 === "False")
}

async function questionNine() {
  const answers = await inquirer.prompt({
    name:"question_9",
    type: "list",
    message: `What will be the output of the following code snippet?\n
    console.log(0.1 + 0.2 === 0.3);`,
    choices: [
      'Undefined',
      'False',
      'True',
      'Error'
    ]
  })

  return checkAnswer(answers.question_9 === "False")
}

async function questionTen() {
  const answers = await inquirer.prompt({
    name:"question_10",
    type: "list",
    message: `What will be the output of the following code snippet?\n
    console.log(10 == [10]);
    console.log(10 == [[[[[[[10]]]]]]]);`,
    choices: [
      'True, True',
      'False, True',
      'True, False',
      'False, False'
    ]
  })

  return checkAnswer(answers.question_10 === "True, True")
}

console.clear();
await entrance()
await askName()
await questionOne()
await questionTwo()
await questionThree()
await questionFour()
await questionFive()
await questionSix()
await questionSeven()
await questionEight()
await questionNine()
await questionTen()

winner()