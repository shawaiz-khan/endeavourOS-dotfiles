import 'package:flutter/material.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'package:todo_app/hive/todo_box.dart';
import '../widgets/dialog_box.dart';
import '../widgets/list_view_container.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final box = todoBox;

    return Scaffold(
      backgroundColor: Colors.white,

      appBar: AppBar(title: const Text("Greetings, User!")),

      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 0, vertical: 0),
        child: ValueListenableBuilder(
          valueListenable: box.listenable(),
          builder: (context, Box<String> box, _) {
            final todoList = box.values.toList();
            return ListViewContainer(todoList: todoList);
          },
        ),
      ),

      floatingActionButton: FloatingActionButton(
        onPressed: () async {
          final newTask = await showDialog<String>(
            context: context,
            builder: (context) => const DialogBox(),
          );

          if (newTask != null && newTask.isNotEmpty) {
            box.add(newTask); // Hive persists automatically
          }
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}
