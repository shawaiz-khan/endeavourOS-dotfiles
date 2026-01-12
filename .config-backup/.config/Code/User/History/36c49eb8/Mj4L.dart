class AuthHandlerModel {
  String username;
  String password;
  String? confirmPassword;

  AuthHandlerModel({
    this.username = "",
    this.password = "",
    this.confirmPassword = "",
  });
}
