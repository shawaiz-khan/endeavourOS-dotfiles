import 'package:todo_app/core/services/db/hive/todo_box.dart';
import 'package:todo_app/data/models/todo_model.dart';

class TodoRepository {
  List<TodoModel> getTodos() => todoBox.values.toList();

  void addTodo(String title) => todoBox.add(title);

  void deleteTodo(int index) => todoBox.deleteAt(index);
}
