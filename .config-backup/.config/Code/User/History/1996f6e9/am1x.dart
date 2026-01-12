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
            padding: const EdgeInsets.all(10),
            child: Column(
              children: [
                Container(
                  height: 200,
                  color: Colors.blue.shade100,
                  margin: EdgeInsets.symmetric(vertical: 5),
                  child: Center(
                    child: Text("Box 1", style: TextStyle(fontSize: 24)),
                  ),
                ),
                Container(
                  height: 200,
                  color: Colors.blue.shade200,
                  margin: EdgeInsets.symmetric(vertical: 5),
                  child: Center(
                    child: Text("Box 2", style: TextStyle(fontSize: 24)),
                  ),
                ),
                Container(
                  height: 200,
                  color: Colors.blue.shade300,
                  margin: EdgeInsets.symmetric(vertical: 5),
                  child: Center(
                    child: Text("Box 3", style: TextStyle(fontSize: 24)),
                  ),
                ),
                Container(
                  height: 200,
                  color: Colors.blue.shade400,
                  margin: EdgeInsets.symmetric(vertical: 5),
                  child: Center(
                    child: Text("Box 4", style: TextStyle(fontSize: 24)),
                  ),
                ),
                Container(
                  height: 200,
                  color: Colors.blue.shade500,
                  margin: EdgeInsets.symmetric(vertical: 5),
                  child: Center(
                    child: Text("Box 5", style: TextStyle(fontSize: 24)),
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
