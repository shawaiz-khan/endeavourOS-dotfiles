import 'package:hive/hive.dart';
import 'package:todo_app/core/services/db/hive/user_box.dart';
import 'package:todo_app/data/models/user_model.dart';

class UserRepository {
  final Box<UserModel> _userBox = userBox;

  // Get users
  List<UserModel> getUsers() => _userBox.values.toList();

  // Get user by username
  UserModel? getUser(String username) => _userBox.get(username);

  // Add a new user
  
}
