import 'package:flutter/material.dart';

class DialogBox extends StatelessWidget {
  const DialogBox({super.key});

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text("Add a Task"),
      content: Text("Hello"),
      actions: [
        TextButton(
          onPressed: () => Navigator.of(context).pop(),
          child: [Text("OK"), Text("OK")],
        ),
      ],
    );
  }
}
