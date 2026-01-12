import 'package:hive/hive.dart';

part 'user_model.g.dart'; // Hive will generate this adapter file

@HiveType(typeId: 0) // typeId must be unique in your app
class UserModel extends HiveObject {
  @HiveField(0)
  final String username;

  @HiveField(1)
  final String password;

  UserModel({required this.username, required this.password});
}
