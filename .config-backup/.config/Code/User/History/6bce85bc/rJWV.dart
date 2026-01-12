import 'package:flutter/material.dart';
import 'package:todo_app/app.dart';
import 'package:todo_app/core/services/db/hive/hive_init.dart';
import 'package:todo_app/data/repositories/user_repository.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await initHive();

  final userRepository = UserRepository();

  runApp(
    ChangeNotifierProvider(
      create: (_) => AuthContext(userRepository),
      child: const MyApp(),
    ),
  );
}
