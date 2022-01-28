#!/usr/bin/env node

import chalk from 'chalk'
import inquirer from 'inquirer'
import chalkAnimation from 'chalk-animation'
import figlet from 'figlet'
import gradient from 'gradient-string'
import { createSpinner } from 'nanospinner'

let playerName;

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
      } else {
        spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!` });
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
        message: 'Which of the following keywords is used to define a variable in Javascript?\n',
        choices: [
          'var',
          'let',
          'Both',
          'None of these',
        ],
      });

      return checkAnswer(answers.question_2 === "Both")
}
async function questionThree() {
    const answers = await inquirer.prompt({
        name: 'question_3',
        type: 'list',
        message: 'Which of the following methods can be used to display data in some form using Javascript? \n',
        choices: [
          'document.write()',
          'console.log()',
          'window.alert()',
          'All of these',
        ],
      });

      return checkAnswer(answers.question_3 === "All of these")
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

console.clear();
await entrance()
await askName()
await questionOne()
await questionTwo()
await questionThree()
await questionFour()
winner()