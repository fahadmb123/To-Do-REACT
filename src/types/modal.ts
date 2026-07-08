export type ModalProps = {
  closeModal: () => void;
};


export type ToDo = {
  id : number;
  title : string;
  deadline : string;
  completed : boolean
}


export type ToDoStore = {
  todos : ToDo[];
  addToDo: (todo:ToDo)=>void
}


export type ItemProps = {
    title : string;
    date : string;
    completed:boolean
}