var model = [
    {
        id: 0,
        title: 'Title text 1',
        text: 'Some text 1',
        user: {
            id: 0,
            name: 'user 1',
        },
    },
    {
        id: 1,
        title: 'Title text 2',
        text: 'Some text 2',
        user: {
            id: 1,
            name: 'user 2',
        },
    },
     {
        id: 2,
        title: 'Title text 3',
        text: 'Some text 3',
        user: {
            id: 0,
            name: 'user 1',
        },
    },
    {
        id: 3,
        title: 'Title text 4',
        text: 'Some text 4',
        user: {
            id: 2,
            name: 'user 3',
        },
    },
     {
        id: 4,
        title: 'Title text 5',
        text: 'Some text 5',
        user: {
            id: 0,
            name: 'user 1',
        },
    }
]

// Создаём массив с именами пользователей
let user = [];
for (let i=0; i<model.length; i++) {
  user.push(model[i].user.name)
};

//Функция для удаления повторяющихся элементов в массиве пользователей
function unique(arr) {
  let result = [];
  for(let str of arr) {
    if(!result.includes(str)) {
      result.push(str);
    }
  }
  return result
}

let uniqueUser = unique(user)

//Создание массивов для информации о пользователях
let newInfoUser1 = [];
let newInfoUser2 = [];
let newInfoUser3 = [];

// Группируем информацию,которая относится к конкретному пользователю
  for (let i=0; i<model.length; i++) {
    if (model[i].user.name == 'user 1') {
        newInfoUser1.push(model[i])
      }
    else if (model[i].user.name == 'user 2') {
        newInfoUser2.push(model[i])
      }
    else if (model[i].user.name == 'user 3') {
        newInfoUser3.push(model[i])
      }
      // newArr.set(item,model[i])
    };

//Объединяем всю информацию о пользователях в один массив
let allInfo = []
allInfo.push(newInfoUser1)
allInfo.push(newInfoUser2)
allInfo.push(newInfoUser3)

//Создаём ассоциативный массив для группировки информации
let newArr = new Map();
uniqueUser.forEach(function(item,i,uniqueUser){
  newArr.set(item,allInfo[i]);
});
console.log(newArr)
