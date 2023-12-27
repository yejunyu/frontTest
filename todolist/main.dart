import 'package:flutter/material.dart';
import 'package:todolist/todo_list_screen.dart';

void main() {
  // SystemChrome.restoreSystemUIOverlays();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
        debugShowCheckedModeBanner: false,
        title: "todo list",
        home: TodoListScreen());
  }
}
