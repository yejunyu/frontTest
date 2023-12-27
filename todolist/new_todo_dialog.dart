import 'package:flutter/material.dart';
import 'package:todolist/todo.dart';

class NewTodoDialog extends StatelessWidget {
  final controller = TextEditingController();

  NewTodoDialog({super.key});

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text("New todo"),
      content: TextField(
        controller: controller,
        autofocus: true,
      ),
      actions: <Widget>[
        ElevatedButton(
            onPressed: () {
              Navigator.of(context).pop();
            },
            child: const Text("Cancel")),
        // Now we need to access the value of a TextField to create a Todo To do this we need to create a TextEditingController
        ElevatedButton(
            onPressed: () {
              final todo = Todo(title: controller.text);
              controller.clear();
              Navigator.of(context).pop(todo);
            },
            child: const Text("Add"))
      ],
    );
  }
}
