# Как запустить
1. Вводим в терминал vs code команды:

   Первую команду вводим только при первм запуске, чтобы подключить все связи.
   Вторую команду вводим каждый раз когда открываем проект, чтобы запустить сборщик.
```
npm i
```
```
npm run dev
```
2. Открываем ссылочку из терминала
# Компоненты
![Иллюстрация компонент](https://i.ibb.co/pypF9TX/components.jpg)
Разработанные компоненты находятся в папочке ```src/components```
1. **Slider**
   
   Компонента представляет собой тело самого слайдере и в нем содержится вторая компонента **SliderBody**.
   
   компонента принимает два пропса:
   1. ```data``` - массив с url кртинок
   2. ```amout``` - кол-во картинок выводимых на одном слайде
  
   В компоненте создается состояние(хук) для текущей первой картинки - ```сurrent```.
   И функция для изменения его состояния ```setCurent()```.
      
3. **SliderBody**
   
   Комонента генерирует картинки по входному массиву, и делает их видимыми/невидиыми, взависимости от текущего индекса первой картинки.
   компонента принимает два пропса:
   1. ```data``` - массив с url картинок
   2. ```current``` - индекс текущей первой картинки
   3. ```amout``` - кол-во картинок выводимых на одном слайде
  
# Что она может попросить
   1. Поменять количество отображаемых слайдов.
  
      Это делается в файлике ```src/App.jsx```, это главная компонента всей программы и в ней просто возвращается наш слайдер. Чтобы изменить кол-во отображаемых слайдов, нужно поменять параметр ```amount``` при вызове ```Slider```.
   2. Показать компоненты, их пропсы и состояния.
# Ps
   Все css стили разместил в index.css.
