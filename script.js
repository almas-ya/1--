var name = prompt("Введите свое имя")
if (isNaN(name)){
    console.log("Ваше имя " + name);
} else if (!isNaN(name)){
    console.log("Ошибка!");
}
var age = prompt("Введите свой возрост")
if (!isNaN(age)){
    console.log("Ваш возраст " + age);
} else if (isNaN(age)){
    console.log("Ошибка!");
}
var example1 = prompt("Решите несколько примеров: 7 + 3 = ?")
if (!isNaN(example1)){
    console.log("7+3=10 " + "Ваш ответ: " + example1);
} else {
    console.log("Ошибка!");
}
var example2 = prompt("Сколько будет 19 - 3 = ?")
if (!isNaN(example2)){
    console.log("19-3=16 " + "Ваш ответ: " + example2);
} else if (isNaN(example2)){
    console.log("Ошибка!");
}
var example3 = prompt("Сколько будет 4 * 4 = ?")
if (!isNaN(example3)){
    console.log("4*4=16 " + "Ваш ответ: " + example3);
} else if (isNaN(example3)){
    console.log("Ошибка!");
}
var example4 = prompt("Сколько будет 12 / 2 = ?")
if (!isNaN(example4)){
    console.log("12/2=6 " + "Ваш ответ: " + example4);
} else if (isNaN(example4)){
    console.log("Ошибка!");
}
var example5 = prompt("Сколько будет 9 % 4 = ?")
if (!isNaN(example5)){
    console.log("9%4=1 " + "Ваш ответ: " + example5);
} else if (isNaN(example5)){
    console.log("Ошибка!");
}

alert("Отлично! Теперь вы можете нажать на клавиатуре 'F12', и потом выйдет 'консоль разработчика и вы можете посмотреть ваши ответы'")