import React from "react";
import { useLocalStorage  } from "./useLocalStorage";

const ToDoContext = React.createContext();

function ToDoProvider(props) {
    const { item: toDos, 
        saveItem: saveToDos, 
        loading,
        error
      } = useLocalStorage("TODOS_V1", []);


    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedToDos = toDos.filter(toDo => !!toDo.completed).length;
    const totalToDos = toDos.length;

    let searchedToDo = [];

    if(!searchValue.length >= 1){
    searchedToDo = toDos;
    } else {
    searchedToDo = toDos.filter(toDo => {
        const toDoText = toDo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return toDoText.includes(searchText);
    })
    }

    const addToDos = (text) => {
    const newToDos = [...toDos];
    newToDos.push({
        completed: false,
        text: text
    });
    saveToDos(newToDos);
    }

    const completeToDos = (text) => {
    const todoIndex = toDos.findIndex(toDo => toDo.text === text);
    const newToDos = [...toDos];
    newToDos[todoIndex].completed = true;
    saveToDos(newToDos);
    }

    const deleteToDos = (text) => {
    const toDoIndex = toDos.findIndex(toDo => toDo.text === text);
    const newToDos = [...toDos];
    newToDos.splice(toDoIndex,1);
    saveToDos(newToDos);
    }
    return (
        <ToDoContext.Provider value={{
            loading,
            error,
            totalToDos,
            completedToDos,
            searchValue,
            setSearchValue,
            searchedToDo, 
            addToDos,
            completeToDos,
            deleteToDos,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </ToDoContext.Provider>
    );
}

export { ToDoContext, ToDoProvider }
