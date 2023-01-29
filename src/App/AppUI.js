import React from "react";
import { ToDoContext } from "../ToDoContext";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { CreateToDoButton } from "../CreateToDoButton";
import { ToDoForm } from "../ToDoForm";
import { Modal } from "../Modal";
import { ToDosError } from "../ToDosError";
import { ToDosLoading } from "../ToDosLoading";
import { EmptyToDos } from "../EmptyToDos";

function AppUI() {
    const {error, loading, searchedToDo, completeToDos, deleteToDos, openModal, setOpenModal} = React.useContext(ToDoContext);
    return (
        <React.Fragment>

            <ToDoCounter/>

            <ToDoSearch/>

                
                <ToDoList>
                    {error && <ToDosError error={error} />}
                    {loading && <ToDosLoading />}
                    {(!loading && !searchedToDo.length) && <EmptyToDos />}
        
                    {searchedToDo.map(toDo => (
                        <ToDoItem 
                            key={toDo.text} 
                            text={toDo.text} 
                            completed={toDo.completed}
                            onComplete={() => completeToDos(toDo.text)}
                            onDelete={() => deleteToDos(toDo.text)}
                        />
                    ))}
                </ToDoList>
                
                {!!openModal && (
                    <Modal>
                        <ToDoForm/>
                    </Modal>
                )}
                
            <CreateToDoButton
                setOpenModal={ setOpenModal }
            />
      
    </React.Fragment>
    );
}

export { AppUI }