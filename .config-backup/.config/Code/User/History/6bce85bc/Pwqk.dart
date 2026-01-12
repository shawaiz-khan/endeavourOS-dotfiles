import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:todo_app/app.dart';
import 'package:todo_app/core/services/db/hive/hive_init.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await initHive();
  runApp(ChangeNotifierProvider(create: , child: const MyApp(),));
}
