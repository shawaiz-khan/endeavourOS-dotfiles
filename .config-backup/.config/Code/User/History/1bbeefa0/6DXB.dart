class UserModel {
  final String username;
  final String password;
  String? confirmPassword;
  final bool isLoggedIn;

  UserModel({this.username = "", this.password = "", this.isLoggedIn = false});
}
