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

        return Dismissible(
          key: Key(item), // each key must be unique
          direction: DismissDirection.endToStart, // swipe from right to left
          background: Container(
            color: Colors.red,
            alignment: Alignment.centerRight,
            padding: EdgeInsets.symmetric(horizontal: 20),
            child: Icon(Icons.delete, color: Colors.white),
          ),
          onDismissed: (direction) {
            setState(() {
              todoList.removeAt(index);
            });

            ScaffoldMessenger.of(
              context,
            ).showSnackBar(SnackBar(content: Text('$item removed')));
          },
          child: Card(
            margin: EdgeInsets.all(10),
            child: ListTile(title: Text(item, style: TextStyle(fontSize: 20))),
          ),
        );
      },
    );
  }
}
