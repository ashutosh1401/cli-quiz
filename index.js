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
        message: `What will be the output of the following code snippet?\n`,
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

console.clear();
await entrance()
await askName()
await questionOne()
await questionTwo()
await questionThree()
await questionFour()
await questionFive()
winner()