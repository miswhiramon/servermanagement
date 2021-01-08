const question='ゲーム市場、最も売れたゲーム機は?';
const answers=[
    'スーパーファミコン',
    'プレーステーション2',
    'ニンテンドースイッチ',
    'ニンテンドーDS'
];
const correct='ニンテンドーDS';

console.log(document.getElementById('js-question').textContent);
document.getElementById('js-question').textContent=question;

const $button = document.getElementsByTagName('button');
$button[0].textContent=answers[0];
$button[1].textContent=answers[1];
$button[2].textContent=answers[2];
$button[3].textContent=answers[3];

//クリックしたら正誤判定
$button[0].addEventListener('click',()=>{
    if(correct===document.getElementsByTagName('button')[0].textContent){
        window.alert('正解!');
    }else{
        window.alert('不正解!');
    }
})

$button[1].addEventListener('click',()=>{
    if(correct===document.getElementsByTagName('button')[1].textContent){
        window.alert('正解!');
    }else{
        window.alert('不正解!');
    }
})

$button[2].addEventListener('click',()=>{
    if(correct===document.getElementsByTagName('button')[2].textContent){
        window.alert('正解!');
    }else{
        window.alert('不正解!');
    }
})

$button[3].addEventListener('click',()=>{
    if(correct===document.getElementsByTagName('button')[3].textContent){
        window.alert('正解!');
    }else{
        window.alert('不正解!');
    }
})