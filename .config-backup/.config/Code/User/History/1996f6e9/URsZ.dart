import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: Text("Home Page"),
          backgroundColor: Colors.blue.shade300,
        ),
        body: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsetsGeometry.all(10),
            child: Column(
              children: [
                Expanded(
                  child: Container(
                    height: 200,
                    color: Colors.blue.shade100,
                    child: Center(
                      child: Text("Box 1", textScaler: TextScaler.linear(5)),
                    ),
                  ),
                ),
                Expanded(
                  child: Container(
                    height: 200,
                    color: Colors.blue.shade200,
                    child: Center(
                      child: Text("Box 2", textScaler: TextScaler.linear(5)),
                    ),
                  ),
                ),
                Expanded(
                  child: Container(
                    height: 200,
                    color: Colors.blue.shade300,
                    child: Center(
                      child: Text("Box 3", textScaler: TextScaler.linear(5)),
                    ),
                  ),
                ),
                Expanded(
                  child: Container(
                    height: 200,
                    color: Colors.blue.shade400,
                    child: Center(
                      child: Text("Box 4", textScaler: TextScaler.linear(5)),
                    ),
                  ),
                ),
                Expanded(
                  child: Container(
                    height: 200,
                    color: Colors.blue.shade500,
                    child: Center(
                      child: Text("Box 5", textScaler: TextScaler.linear(5)),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
