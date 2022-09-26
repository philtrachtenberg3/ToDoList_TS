/* import { v4 as uuidv4 } from 'uuid';

console.log(uuidv4()) */

const list = document.querySelector<HTMLUListElement>('#list')
const form = document.getElementById('new-task-form') as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>('#new-task-title')

console.log(list)
console.log(form)
console.log(input)