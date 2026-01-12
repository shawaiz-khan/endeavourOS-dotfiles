class Validators {
  // Username Validation
  static String? username(String? value) {
    if (value == null || value.trim().isEmpty) {
      return "Username is required";
    }

    return null;
  }

  // Password Validation
  static String? password(String? value) {
    if (value == null || value.trim().isEmpty) {
      return "Password is required";
    }

    return null;
  }

  // Confirm Password Validation
  static String? confirmPassword(String? value) {}
}
