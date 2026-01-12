import 'package:flutter/material.dart';
import 'package:todo_app/hive/todo_box.dart';
import '../widgets/dialog_box.dart';
import '../widgets/list_view_container.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    const String user = "Shawaiz";
    final box = todoBox;

    return Scaffold(
      backgroundColor: Colors.white,

      appBar: AppBar(
        title: const Text("Greetings, $user!"),
        leading: IconButton(onPressed: () {}, icon: Icon(Icons.menu)),
      ),

      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            "Todo List",
            style: TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.bold,
              backgroundColor: Colors.blue,
            ),
            textAlign: TextAlign.start,
          ),
          Expanded(child: ListViewContainer(todoList: box.values.toList())),
        ],
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
