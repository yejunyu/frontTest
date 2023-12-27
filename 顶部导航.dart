import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: DefaultTabController(
        length: choices.length,
        child: Scaffold(
          appBar: AppBar(
            title: Text('appbar title'),
            bottom: TabBar(
              isScrollable: true,
              tabs: choices
                  .map((e) => Tab(
                        text: e.title,
                        icon: Icon(e.icon),
                      ))
                  .toList(),
            ),
          ),
          body: TabBarView(
            children: choices.map((Choice choice) {
              return Padding(
                  padding: const EdgeInsets.all(16), child: CardChoice(choice));
            }).toList(),
          ),
        ),
      ),
    );
  }
}

class Choice {
  String title;
  IconData icon;

  Choice(this.title, this.icon);
}

List<Choice> choices = <Choice>[
  Choice('car', Icons.directions_car),
  Choice('bike', Icons.directions_bike),
  Choice('boat', Icons.directions_boat),
  Choice('bus', Icons.directions_bus),
  Choice('train', Icons.directions_train),
  Choice('walk', Icons.directions_walk),
];

class CardChoice extends StatelessWidget {
  final Choice choice;

  CardChoice(this.choice);

  @override
  Widget build(BuildContext context) {
    final TextStyle? textStyle = Theme.of(context).textTheme.displayLarge;
    return Card(
      color: Colors.white,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          Icon(
            choice.icon,
            size: 128,
            color: textStyle?.color,
          ),
          Text(
            choice.title,
            style: textStyle,
          )
        ],
      ),
    );
  }
}
