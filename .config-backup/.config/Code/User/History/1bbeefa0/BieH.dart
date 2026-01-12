class UserModel {
  String _username = "";
  String _password = "";
  bool _isLoggedIn = false;

  String get username => _username;
  set username(String val) {
    if (_username != "") return;

    _username = val;
  }
}
