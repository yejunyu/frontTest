import 'package:flutter/material.dart';
import 'package:todolist/todo_list.dart';

import 'new_todo_dialog.dart';
import 'todo.dart';

class TodoListScreen extends StatefulWidget {
  const TodoListScreen({super.key});

  @override
  State<TodoListScreen> createState() => _TodoListScreenState();
}

class _TodoListScreenState extends State<TodoListScreen> {
  List<Todo> todoList = [];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("todo list"),
      ),
      body: TodoList(
        todoList: todoList,
        onTodoToggle: _toggleTodo,
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _addTodoList,
        child: const Icon(Icons.add),
      ),
    );
  }

  _toggleTodo(Todo todo, bool isChecked) {
    setState(() {
      todo.isDone = isChecked;
    });
  }

  _addTodoList() async {
    final todo = await showDialog<Todo>(
        context: context,
        builder: (BuildContext cxt) {
          return NewTodoDialog();
        });
    if (todo != null) {
      setState(() {
        todoList.add(todo);
      });
    }
  }
}
