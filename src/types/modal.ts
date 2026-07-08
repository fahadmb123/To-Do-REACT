export type ModalProps = {
  closeModal: () => void;
  toDo ? : ToDo;
};


export type ToDo = {
  id : number;
  title : string;
  deadline : string;
  completed : boolean
}


export type ToDoStore = {
  todos : ToDo[];
  toggleCompleted: (id: number) => void;
  setToDos: (toDos: ToDo[]) => void;
  addToDo: (todo:ToDo)=>void;
  delete : (id:number) => void;
  updateTodo : (toDo:ToDo) => void;
}


export type ItemProps = {
    toDo :ToDo
}


export type messageType = {
  success : boolean;
  message : string;
}

export type summaryDetails = {
  totalTask : number;
  completedTask : number;
  pending : number
}