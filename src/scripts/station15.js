const { bimap } = require("fp-ts/lib/pipeable");

async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
  ];
  const result = await test(userList)
  return await result
}

function test(userList) {
  return new Promise(b => {
    setTimeout(() => {
      let aa = document.getElementById(`result`);
      for (let b of userList) {
        let aaa = document.createElement(`li`);
        // console.log(`「${b.family_name} + ' ' + ${b.first_name}」`);
        //「」いらんやん...
        aaa.innerText = `${b.family_name} ${b.first_name}`;
        aa.appendChild(aaa);
      }
      b();
    }, 3000);
  });
}

getData();
