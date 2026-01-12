import 'package:todo_app/data/models/user_model.dart';

class AuthFormData extends UserModel {
  final String? confirmPassword;

  AuthFormData({
    required String username,
    required String password,
    this.confirmPassword,
  });
}
