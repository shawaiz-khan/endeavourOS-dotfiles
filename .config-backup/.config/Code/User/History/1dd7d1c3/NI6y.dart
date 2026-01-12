import 'package:flutter/material.dart';
import 'package:todo_app/data/models/user_model.dart';
import 'package:todo_app/data/repositories/user_repository.dart';

class AuthProvider extends ChangeNotifier {
  final UserRepository _userRepository;

  AuthProvider(this._userRepository);

  UserModel? _currentUser;

  // Getter used by the UI
  UserModel? get currentUser => _currentUser;
  bool get isAuthenticated => _currentUser != null;

  // Register User
  Future<void> register(String username, String password) async {
    notifyListeners();

    final user = UserModel(username: username, password: password);
    await _userRepository.addUser(user);

    _currentUser = user;
    notifyListeners();
  }

  // Login User
  Future<void> login(String username, String password) async {
    notifyListeners();

    final user = _userRepository.getUser(username);

    
  }
}
