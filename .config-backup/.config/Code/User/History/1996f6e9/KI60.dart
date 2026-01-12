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
        body: Padding(
          padding: const EdgeInsetsGeometry.all(10),
          child: Column(
            children: [
              Expanded(
                child: Container(
                  height: 200,
                  color: Colors.blue.shade800,
                  child: Center(
                    child: Text(
                      "Box 1",
                      style: TextStyle(color: Colors.white),
                      textScaler: TextScaler.linear(5),
                    ),
                  ),
                ),
              ),
              Expanded(
                child: Container(
                  height: 200,
                  color: Colors.blue.shade500,
                  child: Center(
                    child: Text("Box 2", style: TextStyle(color: Colors.white)),
                  ),
                ),
              ),
              Expanded(
                child: Container(
                  height: 200,
                  color: Colors.blue.shade200,
                  child: Center(child: Text("Box 3")),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
