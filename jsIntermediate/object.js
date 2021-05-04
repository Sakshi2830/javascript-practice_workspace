var iphone12 = {
    screen: "6.1-inch",
    camera: "12MP Ultra Wide camera",
    chip: "A14 Bionic chip",
    Water_resistant: "Rated IP68",
    Charging: "Compatible with MagSafe",
    Front_Camera: "12MP TrueDepth camera"
}

console.log(iphone12.Water_resistant);
console.log(iphone12); //o/p =>

// {
//     chip: 'A14 Bionic chip',
//     Water_resistant: 'Rated IP68',
//     Charging: 'Compatible with MagSafe',
//     Front_Camera: '12MP TrueDepth camera'
//   }

console.table(iphone12);
/* o/p =>
    ┌─────────────────┬───────────────────────────┐
    │     (index)     │          Values           │
    ├─────────────────┼───────────────────────────┤
    │     screen      │        '6.1-inch'         │
    │     camera      │ '12MP Ultra Wide camera'  │
    │      chip       │     'A14 Bionic chip'     │
    │ Water_resistant │       'Rated IP68'        │
    │    Charging     │ 'Compatible with MagSafe' │
    │  Front_Camera   │  '12MP TrueDepth camera'  │
    └─────────────────┴───────────────────────────┘*/