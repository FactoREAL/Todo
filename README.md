### Недочеты:
- `reducers/tasks.js` не переписан на TypeScript - не удается задать алиас `IActions` для параметра action в редюсере. 
- кое-где используется тип данных `any` (в основном в параметрах функций) 
- малое покрытие тестами т.к. не хотелось писать однотипные тесты для кучи схожих объектов