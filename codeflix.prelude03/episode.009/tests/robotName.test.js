import { expect } from 'chai'
import RobotName from '../src/robotName'

describe(':: robotName', () => {
  let robot

  beforeEach(() => {
    robot = new RobotName()
  })

  it('testing name format', () => {
    expect(robot.name).to.match(/^[A-Z]{2}\d{3}$/)
  })
  it('testing name variable', () => {
    expect(robot.name).equal(robot.name)
  })

  it('testing name generator', () => {
    const differentRobot = new RobotName()
    expect(differentRobot.name).not.equal(robot.name)
  })

  it('testing reset', () => {
    const originalName = robot.name

    robot.regenerateName()
    const newName = robot.name

    expect(newName).to.match(/^[A-Z]{2}\d{3}$/)
    expect(originalName).not.equal(newName)
  })

  it('testing reset', () => {
    const NUMBER_OF_ROBOTS = 10000
    const usedNames = new Set()

    usedNames.add(robot.name)
    for (let i = 0; i < NUMBER_OF_ROBOTS; i++) {
      robot.regenerateName()
      usedNames.add(robot.name)
    }

    expect(usedNames.size).equal(NUMBER_OF_ROBOTS + 1)
  })

  it('comparing new names', () => {
    const name1 = robot.name
    const name2 = new RobotName().name
    const name3 = new RobotName().name
    expect(name1).to.equal(name1)
    expect(name1).to.not.equal(name2)
    expect(name2).to.not.equal(name3)
  })

  it('comparing regenerated names', () => {
    const name1 = robot.name
    robot.regenerateName()
    const name2 = robot.name
    robot.regenerateName()
    const name3 = robot.name
    expect(name1).to.equal(name1)
    expect(name1).to.not.equal(name2)
    expect(name2).to.not.equal(name3)
  })
})
