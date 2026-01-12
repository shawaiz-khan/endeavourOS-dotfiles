import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: Text("Home Page"),
          backgroundColor: Colors.blue.shade300,
        ),
        body: Row(
          children: [
            Container(height: 200, color: Colors.blue.shade800),
            Container(height: 200, color: Colors.blue.shade500),
            Container(height: 200, color: Colors.blue.shade200),
          ],
        ),
      ),
    );
  }
}
