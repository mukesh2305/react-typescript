import React, { useState } from 'react';
import './App.css';
import InputFields from './components/InputFields';
import { Todo } from './model'
import TodoList from './components/TodoList';
// import Header from './Header';
// let hii: any;
// let name: string;
// let age: number | string;
// age = 5;
// age = '4';

// let isStudent: boolean;
// let hobbies: string[];
// // Tuples
// let role: [number, string];
// let personName: unknown; // instade of any use unknown 

// // let printName: Function;
// let printName: (name: string) => void; // insteaded of void use never
// // never = does not return anything
// // void = return undefined
// let printAge: (age: number) => never; // not return anything

// printName = (name: string): void => {
// 	console.log(name);
// }

// // function printName(name: string): void {
// // 	console.log(name);
// // }

// printName('Hello');
// // Object 
// // type Person = {
// // 	name: string;
// // 	age?: number;
// // }

// // let person: Person = {
// // 	name: 'Max',
// // }

// // Interface 
// interface Person {
// 	name: string;
// 	age?: number;
// }

// // in this we can se both X and Y Property -------------
// type X = {
// 	a: string;
// 	b: number;
// }

// // type Y = X & {
// // 	c: string;
// // 	d: number;
// // }
// let y: Y = {
// 	a: 'a',
// 	b: 1,
// 	c: 'c',
// 	d: 2
// }
// let lostsOfPerson: Person[];
// // interface extends
// interface Person1 {
// 	name: string;
// 	age?: number;
// }

// interface Guy extends Person1 {
// 	profession: string;
// }

// // we can use type with interface
// type Y = Person1 & {
// 	name: string;
// }
// // we can use interface with type 
// interface man extends X {
// 	name: string,
// 	age: number
// }
const App: React.FC = () => {
	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<Todo[]>([]);

	const handleAdd = (e: React.FormEvent) => {
		e.preventDefault();
		if (todo) {
			setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
			setTodo("");
		}
	}
	console.log(todos)

	return (
		<div className='App'>
			<span className='heading'>Taskify</span>
			<InputFields todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
			<TodoList todos={todos} setTodos={setTodos} />
			{/* {todos.map(todo => {
				return (
					<li>{todo.todo}</li>
				)
			}
			)} */}
		</div>
		// <div className="App">
		// 	<Header title='Hello World' color='red' />
		// </div>
	);
}

export default App;
