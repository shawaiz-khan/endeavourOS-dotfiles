import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:todo_app/app.dart';
import 'package:todo_app/core/services/db/hive/hive_init.dart';
import 'package:todo_app/data/repositories/user_repository.dart';
import 'package:todo_app/features/auth/domain/auth_provider.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();

  // Make sure Hive is initialized and boxes are open
  await initHive();

  // Create repository AFTER Hive is ready
  final userRepository = UserRepository();

  runApp(
    ChangeNotifierProvider<AuthProvider>(
      create: (_) => AuthProvider(userRepository),
      child: const MyApp(),
    ),
  );
}
