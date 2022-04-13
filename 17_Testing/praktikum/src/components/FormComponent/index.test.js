import { render, fireEvent} from '@testing-library/react'
import NameForm from './FormCoding'


function inputEl(name){
  const util =  render(<NameForm/>)
  
  const input = util.container.querySelector(`input[name="${name}"]`)
  return input
}

function inputElBtn(type) {
  const util = render(<NameForm/>)
  const input = util.container.querySelector(`input[type="${type}"]`) 
  return input
}

describe("testing form Coding",() =>{

  test('input nama', () => {
    const value = 'Mika Mada'
    const input = inputEl("nama")
    
    expect(input).toBeInTheDocument()
    fireEvent.change(input, {target: {value}})
    expect(input.value).toBe(value)
  })
  
  test('input email', () => {
    const value = 'mika@gmail.com'
    const input = inputEl("email")
    
    expect(input).toBeInTheDocument()
    fireEvent.change(input, {target: {value}})
    expect(input.value).toBe(value)
  })

  test('input noHandphone', () => {
    const value = '090988880088'
    const input = inputEl("noHandphone")
    
    expect(input).toBeInTheDocument()
    fireEvent.change(input, {target: {value}})
    expect(input.value).toBe(value)
  })

  test('input pendidikan', () => {
    const value = 'Non IT'
    const input = inputEl("pendidikan")
    
    expect(input).toBeInTheDocument()
    fireEvent.change(input, {target: {value}})
    expect(input.value).toBe(value)
  })

  test('input submit', () => {
    const value = 'Mika Mada Aprilugari'
    const input = inputElBtn('submit')

    expect(input).toBeInTheDocument()
    fireEvent.click(input, {target: {value}})
    expect(input.value).toBe(value)
  })
})