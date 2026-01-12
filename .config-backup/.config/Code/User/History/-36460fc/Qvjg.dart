import 'package:flutter/material.dart';
import 'package:todo_app/routes/app_routes.dart';

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,

      // Color Themes
      theme: ThemeData(
        primaryColor: Colors.blue,
        useMaterial3: true,
        appBarTheme: AppBarTheme(
          backgroundColor: Theme.of(context).primaryColor,
          elevation: 0,
        ),
      ),

      // Routes
      initialRoute: AppRoutes.home,
      routes: AppRoutes.routes,
    );
  }
}
