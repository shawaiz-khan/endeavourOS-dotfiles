import 'package:hive_flutter/hive_flutter.dart';
import 'package:todo_app/data/models/todo_model.dart';
import 'package:todo_app/data/models/user_model.dart';

Future<void> initHive() async {
  await Hive.initFlutter();
  await Hive.openBox<TodoModel>('todos');
  await Hive.openBox<UserModel>('user');
}
