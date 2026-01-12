import 'package:hive/hive.dart';
import 'package:todo_app/core/services/db/hive/todo_box.dart';
import 'package:todo_app/data/models/todo_model.dart';

class TodoRepository {
  final Box<TodoModel> _todoBox = todoBox;

  // Get todos
  List<TodoModel> getTodos() => _todoBox.values.toList();

  // 
}
