
import React from 'react'
import Container from './container'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
// import { TouchBackend } from "react-dnd-touch-backend";

export default function App(props) {
	return (
		<div className="App">
			<DndProvider backend={HTML5Backend}>
				<Container  {...props} />
			</DndProvider>
		</div>
	)
}

