import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:todo_app/app.dart';
import 'package:todo_app/core/services/db/hive/hive_init.dart';
import 'package:todo_app/data/repositories/user_repository.dart';
import 'package:todo_app/features/auth/domain/auth_provider.dart';

void main() async {
  final userRepository = UserRepository();

  WidgetsFlutterBinding.ensureInitialized();

  await initHive();

  runApp(
    ChangeNotifierProvider(
      create: (_) => AuthProvider(userRepository),
      child: MyApp(),
    ),
  );
}
