### Citrus Application

**https://citrus-app.vercel.app/** - Live Demo

# Задание:

- Создать поле 6x4 (WxH) из 24х квадратов используя PixiJS (https://www.pixijs.com/)
- Написать алгоритм который будет рисовать на этом поле (!) ломанные линии (!) через центры квадратов
- На вход можно подать как одну линию так и набор, все должны быть отрисованы разными цветами
- Вся сцена должна быть адаптивной и должна реагировать на resize окна
- Линии должны задаваться одномерным массивом вида [0,1,2,..,W], где
  индекс значения массива говорит о колонке на поле,
  а значение говорит о строке

const **lines** = [  
[0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2], [3, 3, 3, 3, 3, 3],  
[1, 2, 1, 2, 1, 2], [0, 1, 0, 1, 0, 1], [2, 3, 2, 3, 2, 3], [2, 1, 2, 1, 2, 1],  
[1, 0, 1, 0, 1, 0], [3, 2, 3, 2, 3, 2], [0, 1, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1],  
[2, 3, 3, 3, 3, 2], [3, 2, 2, 2, 2, 3], [3, 3, 0, 0, 3, 3], [0, 0, 1, 1, 0, 0],  
[0, 0, 3, 3, 0, 0], [3, 3, 2, 2, 3, 3], [1, 2, 3, 3, 2, 1], [2, 1, 0, 0, 1, 2]  
]
