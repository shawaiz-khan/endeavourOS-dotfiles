import 'package:flutter/material.dart';

class ListViewContainer extends StatelessWidget {
  final List<String> todoList;

  const ListViewContainer({required this.todoList, super.key});

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: todoList.length,
      itemBuilder: (context, index) {
        final item = todoList[index];

        return Card(
          color: Colors.white,
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(5)),
          elevation: 0.5,
          margin: EdgeInsets.all(10),
          child: Padding(
            padding: EdgeInsetsGeometry.all(20),
            child: Text(item, style: TextStyle(fontSize: 20)),
          ),
        );
      },
    );
  }
}
