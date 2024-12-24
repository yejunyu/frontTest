export interface TodoType {
  id: string;
  text: string;
  complete: boolean;
}
class Todo implements TodoType {
  id: string;
  text: string;
  complete: boolean;
  constructor(id: string, text: string, complete: boolean) {
    this.id = id;
    this.text = text;
    this.complete = complete;
  }
}
export default Todo;
