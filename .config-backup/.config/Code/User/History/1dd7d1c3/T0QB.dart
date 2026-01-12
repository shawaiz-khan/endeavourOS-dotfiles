import 'package:flutter/material.dart';
import 'package:todo_app/data/models/user_model.dart';
import 'package:todo_app/data/repositories/user_repository.dart';

class AuthProvider extends ChangeNotifier {
  final UserRepository _userRepository;

  AuthProvider(this._userRepository);

  UserModel? _currentUser;

  
}
