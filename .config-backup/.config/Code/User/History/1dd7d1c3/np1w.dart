import 'package:flutter/material.dart';
import 'package:todo_app/data/models/user_model.dart';

class AuthProvider extends ChangeNotifier {
  UserModel? _user;

  // get the user tha't loggedin
  UserModel? get user => _user;

  // return true or false based on user's existance
  bool get isLoggedIn => _user != null;

  // Login the user
  void login(UserModel user) {
    _user = user;
    notifyListeners();
  }

  // Logout the user
  void logout() {
    _user = null;
    notifyListeners();
  }
}
