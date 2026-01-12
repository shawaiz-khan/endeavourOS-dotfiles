import 'package:hive_flutter/hive_flutter.dart';

Box<String> get userBox => Hive.box("auth");
