import chalk from 'chalk'
import inquirer from 'inquirer'
import chalkAnimation from 'chalk-animation'
import figlet from 'figlet'
import { createSpinner } from 'nanospinner'

let playerName;

const sleep = (ms = 2000) => {
    new Promise((r) => {
        setTimeout(r,ms)
    })
}

async function entrance() {
    const welcomeTitle = chalkAnimation.neon(
        `Welcome to javascript quiz`
    )
}