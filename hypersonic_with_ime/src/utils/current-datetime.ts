// 現在の日時を取得
var currentDate = new Date();

// 年、月、日、時、分、秒を取得
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1; // 0から始まるため、1を加える必要がある
var day = currentDate.getDate();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();

// 表示用のフォーマットを作成
const formattedDate = year + '/' + month + '/' + day + ' ' + hours + ':' + minutes;

export default formattedDate