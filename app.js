const question='ゲーム市場、最も売れたゲーム機は?';
const answers=[
    'スーパーファミコン',
    'プレーステーション2',
    'ニンテンドースイッチ',
    'ニンテンドーDS'
];
const correct='ニンテンドーDS';

const $button = document.getElementsByTagName('button');
const setupQuiz = ()=>{
    document.getElementById('js-question').textContent=question;
    let buttonIndex=0;
    let buttonLength=$button.length;
    while(buttonIndex<buttonLength){
        $button[buttonIndex].textContent=answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

//クリックしたら正誤判定
$button[0].addEventListener('click',(e)=>{
    console.log(e);
    if(correct===e.target.textContent){
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