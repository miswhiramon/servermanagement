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

const clickHandler = (e) =>{
    if(correct===e.target.textContent){
        window.alert('正解!');
    }else{
        window.alert('不正解!');
    }
}

let handlerIndex=0;
const buttonLength = $button.length;
while(handlerIndex<buttonLength){
    $button[handlerIndex].addEventListener('click',(e)=>{
        clickHandler(e);
    });
    handlerIndex++;
}

//クリックしたら正誤判定
$button[0].addEventListener('click',(e)=>{
    clickHandler(e);
});

$button[1].addEventListener('click',(e)=>{
    clickHandler(e);
});

$button[2].addEventListener('click',(e)=>{
    clickHandler(e);
});

$button[3].addEventListener('click',(e)=>{
    clickHandler(e);
});