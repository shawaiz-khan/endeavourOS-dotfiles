import 'package:todo_app/core/services/db/hive/user_box.dart';
import 'package:todo_app/data/models/user_model.dart';

class UserRepository {
  final Box<UserModel> _userBox = userBox;
}
