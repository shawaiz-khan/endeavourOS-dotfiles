import 'package:hive/hive.dart';

part 'user_model.g.dart';

class UserModel {
  final String username;
  final String password;

  UserModel({required this.username, required this.password});
}
