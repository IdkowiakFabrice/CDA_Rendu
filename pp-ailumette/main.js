const inquirer = require('inquirer')
const _ = require('lodash')

class Ailumette {
    line = 0
    matches = 0
    turn = 1
    board = [
        [' ', ' ', ' ', '|', ' ', ' ', ' '],
        [' ', ' ', '|', '|', '|', ' ', ' '],
        [' ', '|', '|', "|", '|', '|', ' '],
        ['|', '|', '|', '|', '|', '|', '|']
    ]

    questionLine = [{
        type: 'input',
        name: 'line',
        message: "Line:",
    }]

    questionMatches = [{
        type: 'input',
        name: 'matches',
        message: "Matches:",
    }]

    questionRestart = [{
        type: 'input',
        name: 'restart',
        message: "Would you like to play again ? (yes : no):",
    }]

    restartAnswer = null

    constructor() { }
    start() {
        this.printMap()
        console.log('\n' + (this.turn ? 'Your turn:' : 'AI’s turn...'))
        this.round()
    }

    async restart() {
        while (this.restartAnswer === null) {
            const restartAnswer = await this.setRestartChoice()
            if (this.goodEntry(restartAnswer, 'restart')) {
                this.restartAnswer = restartAnswer
            }
        }
        if(this.restartAnswer === 'yes') {
            this.board = [
                [' ', ' ', ' ', '|', ' ', ' ', ' '],
                [' ', ' ', '|', '|', '|', ' ', ' '],
                [' ', '|', '|', "|", '|', '|', ' '],
                ['|', '|', '|', '|', '|', '|', '|']
            ]
            this.restartAnswer = null
            this.start()
        }
    }

    async round() {
        if (this.turn) {
            while (this.line === 0) {
                const line = await this.setLineOrMatches('line')
                if (this.goodEntry(line, 'line')) {
                    this.line = line
                }
            }
            while (this.matches === 0) {
                const matches = await this.setLineOrMatches('matches')
                if (this.goodEntry(matches, 'matches')) {
                    this.matches = matches
                }
            }
            this.updateGame()
        } else {
            this.opponentAIPlays()

        }
    }

    setLineOrMatches(type) {
        return new Promise(resolve => {
            inquirer.prompt(type === 'line' ? this.questionLine : this.questionMatches)
                .then(answer => {
                    resolve(parseInt(type === 'line' ? answer.line : answer.matches))
                })
        })
    }

    setRestartChoice() {
        return new Promise(resolve => {
            inquirer.prompt(this.questionRestart)
                .then(answer => {
                    resolve(answer.restart)
                })
        })
    }

    opponentAIPlays() {
        setTimeout(() => {
            const availableLines = []

            _.each(this.board, (line, i) => {
                if (_.countBy(line)["|"] > 0) {
                    availableLines.push(i + 1)
                }
            })

            this.line = availableLines[Math.floor(Math.random() * availableLines.length)]

            const matchesCount = _.countBy(this.board[this.line - 1])["|"]
            this.matches = Math.floor(Math.random() * (matchesCount > 3 ? 3 : matchesCount) + 1)

            this.updateGame()
        }, 1000);
    }

    goodEntry(value, type) {
        if (type === 'line' || type === 'matches') {
            const matchesCount = type === 'line'
                ? _.countBy(this.board[value - 1])["|"] || 0
                : _.countBy(this.board[this.line - 1])["|"] || 0

            if (value < 0 || typeof value !== 'number') {
                console.log('Error: invalid input (positive number expected)')
                return false
            } else if (type === 'line') {
                if (value === 0 || value > 4) {
                    console.log('Error: this line is out of range')
                    return false
                } else if (matchesCount === 0) {
                    console.log('Error: there’s no more matches here')
                    return false
                }
            } else if (type === 'matches') {
                if (value === 0) {
                    console.log('Error: you have to remove at least one match')
                    return false
                } else if (value > 3) {
                    console.log('Error: the maximum number of matches is 3')
                    return false
                } else if (value > matchesCount) {
                    console.log('Error: not enough matches on this line')
                    return false
                }
            }
        } else if (type === 'restart') {
            value = value.trim().toLowerCase()
            if (value !== 'yes' && value !== 'no') {
                console.log(value)
                console.log('Error: invalid input ("yes" ou "no" expected)')
                return false
            }
        }

        return true
    }

    updateGame() {
        this.board[this.line - 1] = this.board[this.line - 1].fill(' ', (this.board[this.line - 1].lastIndexOf('|') + 1) - this.matches)

        let allMatchesCount = 0
        _.each(this.board, (line) => {
            allMatchesCount += _.countBy(line)["|"] || 0
        })

        console.log(`${this.turn ? 'Player' : 'AI'} removed ${this.matches} ${this.matches > 1 ? 'matches' : 'match'} from line ${this.line}`)

        this.printMap()

        this.line = this.matches = 0

        if (allMatchesCount === 0) {
            console.log('\n' + (this.turn ? 'You lost, too bad..' : 'I lost.. snif.. but I’ll get you next time!!'))
            this.restart()
        } else {
            this.turn = this.turn ? 0 : 1
            console.log('\n' + (this.turn ? 'Your turn:' : 'AI’s turn...'))
            this.round()
        }
    }

    printMap() {
        _.each(this.board, (line) => {
            console.log('*' + line.join('') + '*')
        })
    }
}

const ailumette = new Ailumette()

ailumette.start()
