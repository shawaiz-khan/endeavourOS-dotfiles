import 'package:flutter/material.dart';
import 'package:todo_app/data/models/user_model.dart';

class AuthProvider extends ChangeNotifier {
  UserModel? _user;

  UserModel? get user => _user;
}
