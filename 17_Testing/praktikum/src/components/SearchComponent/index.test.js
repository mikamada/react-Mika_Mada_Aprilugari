import {render, fireEvent} from '@testing-library/react'
import Search from './Search.jsx'

function inputEl(name){
  const util =  render(<Search/>)
  
  const input = util.container.querySelector(`input[name="${name}"]`)
  return input
}

function elButton(type) {
  const util = render(<Search/>)
  const button = util.container.querySelector(`button[type="${type}"]`) 
  return button
}


describe('testing Search component', () => {
  test('input search', () => {
    const value = 'Stephen Hawking has died'
    const input = inputEl("search")
    
    expect(input).toBeInTheDocument()
    fireEvent.change(input, {target: {value}})
    expect(input.value).toBe(value)
  })

  test('button search', () => {
    const value = 'Stephen Hawking has died'
    const button = elButton("button")

    expect(button).toBeInTheDocument()
    fireEvent.click(button, {target: {value}})
    expect(button.value)
  })
})