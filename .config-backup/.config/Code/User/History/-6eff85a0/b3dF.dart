import 'package:todo_app/data/models/user_model.dart';

class AuthFormData extends UserModel {
  final String? confirmPassword;

  AuthFormData({
    // this.username = "",
    // this.password = "",
    this.confirmPassword = "",
  });
}
