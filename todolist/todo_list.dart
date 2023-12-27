import 'package:flutter/material.dart';

import 'todo.dart';

typedef ToggleTodoCallback = void Function(Todo, bool);

class TodoList extends StatelessWidget {
  final List<Todo> todoList;
  final ToggleTodoCallback onTodoToggle;

  const TodoList(
      {super.key, required this.todoList, required this.onTodoToggle});

  Widget _buildItem(BuildContext context, int index) {
    final todo = todoList[index];

    return CheckboxListTile(
      value: todo.isDone,
      title: Text(todo.title),
      onChanged: (isChecked) {
        onTodoToggle(todo, isChecked!);
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemBuilder: _buildItem,
      itemCount: todoList.length,
    );
  }
}
