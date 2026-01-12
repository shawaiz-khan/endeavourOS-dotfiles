import 'package:todo_app/data/models/user_model.dart';

class AuthFormHandler {
  final String? confirmPassword;

  AuthFormData({super.username, super.password, this.confirmPassword = ""});
}
