class Validators {
  static String? username(String? value) {
    if (value == null || value.trim().isEmpty) {
      return "Username is required";
    }

    return null;
  }
}
