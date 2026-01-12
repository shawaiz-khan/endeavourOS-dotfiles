import 'package:flutter/material.dart';

class AppRoutes {
  static const String home = '/';

  static Map<String, WidgetBuilder> routes = {
    home: (context) => const HomeScreen(),
  }
}
