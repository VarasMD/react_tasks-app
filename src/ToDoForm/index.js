import React from "react";
import { ToDoContext } from "../ToDoContext";
import "./ToDoForm.css"

function ToDoForm(){
    const [newToDoValue, setNewToDoValue] = React.useState('');
    const { addToDos, setOpenModal } = React.useContext(ToDoContext);
    const onChange = (event) => {
        setNewToDoValue(event.target.value)
    }
    const onCancel = () => {
        setOpenModal(false);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        addToDos(newToDoValue);
        setOpenModal(false);
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Escribir nueva Tarea</label>
            <textarea
                value={newToDoValue}
                placeholder="Cortar la cebolla para el almuerzo"
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}>
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add">
                    Agregar
                </button>
            </div>
        </form>
    )
}

export { ToDoForm };