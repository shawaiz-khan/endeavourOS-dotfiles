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
                // Vertical boxes
                for (int i = 1; i <= 5; i++)
                  Container(
                    height: 200,
                    color: Colors.blue[100 * i],
                    margin: EdgeInsets.symmetric(vertical: 5),
                    child: Center(
                      child: Text("Box $i", style: TextStyle(fontSize: 24)),
                    ),
                  ),

                // Horizontal Row
                Row(
                  children: [
                    Expanded(
                      child: Container(
                        height: 200,
                        color: Colors.blue.shade400,
                        margin: EdgeInsets.all(5),
                        child: Center(
                          child: Text("Box 6", style: TextStyle(fontSize: 24)),
                        ),
                      ),
                    ),
                    Expanded(
                      child: Container(
                        height: 200,
                        color: Colors.blue.shade500,
                        margin: EdgeInsets.all(5),
                        child: Center(
                          child: Text("Box 7", style: TextStyle(fontSize: 24)),
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
