import 'package:hive_flutter/hive_flutter.dart';
import 'package:todo_app/data/models/user_model.dart';
import 'user_box.dart';

Future<void> initHive() async {
  await Hive.initFlutter();

  if (!Hive.isAdapterRegistered(0)) {
    Hive.registerAdapter(UserModel());
  }

  // Open the box and assign it to the late variable
  userBox = await Hive.openBox<UserModel>("users");
}
