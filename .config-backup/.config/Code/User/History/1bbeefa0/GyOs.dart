import 'package:hive/hive.dart';

part 'user_model.g.dart';

@HiveType(typeId: 0)
class UserModel {
  final String username;
  final String password;

  UserModel({required this.username, required this.password});
}
