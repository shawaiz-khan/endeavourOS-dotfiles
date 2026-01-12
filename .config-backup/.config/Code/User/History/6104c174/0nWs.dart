class Validators {
  static String? username(String? value) {
    if (value == null || value.trim().isEmpty) {
      return "Username is required";
    }

    final emailRegex = RegExp(r'^[^@]+@[^@]+\.[^@]+');

    return null;
  }

  // static String? password(String? value) {
  //   if (value == null || value.trim().isEmpty)
  // }
}
