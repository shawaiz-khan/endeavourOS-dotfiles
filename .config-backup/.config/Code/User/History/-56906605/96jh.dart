import 'package:flutter/material.dart';

class ListViewContainer extends StatelessWidget {
  final List<String> todoList;

  const ListViewContainer({required this.todoList, super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView.builder(
        itemCount: todoList.length,
        itemBuilder: (context, index) {
          return Card(
            shape: RoundedRectangleBorder(),
            child: Text(todoList[index]));
        },
      ),
    );
  }
}
