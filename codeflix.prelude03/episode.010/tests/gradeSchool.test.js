import { expect } from 'chai'
import GradeSchool from '../src/GradeSchool'

describe(':: GradeSchool', () => {
  let gradeSchool

  beforeEach(() => {
    gradeSchool = new GradeSchool()
  })

  it('a new school has no students', () => {
    expect(gradeSchool.getAllStudents().size === 0).eql(true)
  })

  it('adding a student', () => {
    gradeSchool.addStudent('John Dorian', 2)
    expect(gradeSchool.getAllStudents()).eql(
      new Map(Object.entries({ 2: ['John Dorian'] }))
    )
  })

  it('adding three students to the same grade', () => {
    gradeSchool.addStudent('Gon', 2)
    gradeSchool.addStudent('Lucy', 2)
    gradeSchool.addStudent('Emma', 2)
    expect(gradeSchool.getAllStudents()).eql(
      new Map(Object.entries({ 2: ['Emma', 'Gon', 'Lucy'] }))
    )
  })

  it('adding students to different grades', () => {
    gradeSchool.addStudent('Ray', 3)
    gradeSchool.addStudent('Ida', 7)
    expect(gradeSchool.getAllStudents()).eql(
      new Map(Object.entries({ 3: ['Ray'], 7: ['Ida'] }))
    )
  })

  it('grade returns the students alphabetically', () => {
    gradeSchool.addStudent('Shoto', 5)
    gradeSchool.addStudent('Ross', 5)
    gradeSchool.addStudent('Joey', 1)
    expect(gradeSchool.getGradeStudents(5)).eql(['Ross', 'Shoto'])
  })

  it('No students in the grade', () => {
    expect(gradeSchool.getGradeStudents(1)).eql([])
  })

  it('Sorted student in grade', () => {
    gradeSchool.addStudent('Jennifer', 4)
    gradeSchool.addStudent('Courtney', 6)
    gradeSchool.addStudent('Monica', 4)
    gradeSchool.addStudent('Kyle', 3)
    expect(gradeSchool.getAllStudents()).eql(
      new Map(
        Object.entries({
          3: ['Kyle'],
          4: ['Jennifer', 'Monica'],
          6: ['Courtney']
        })
      )
    )
  })
})
