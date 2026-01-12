import 'package:todo_app/hive/todo_box.dart';

class TodoRepository {
  List<String> getTodos() {
    return todoBox.values.toList();
  }

  void addTodo(String title) {}
}
