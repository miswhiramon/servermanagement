const quiz = [
    {
        question: 'ゲーム市場、最も売れたゲーム機は?',
        answers: [
            'スーパーファミコン',
            'プレーステーション2',
            'ニンテンドースイッチ',
            'ニンテンドーDS'
        ],
        correct:'ニンテンドーDS'
    },{
        question: '',
        answers: [
            '',
            '',
            '',
            ''
        ],
        correct:''
    },{
        question: '',
        answers: [
            '',
            '',
            '',
            ''
        ],
        correct:''
    }
]

const question='ゲーム市場、最も売れたゲーム機は?';
const answers=[
    'スーパーファミコン',
    'プレーステーション2',
    'ニンテンドースイッチ',
    'ニンテンドーDS'
];
const correct='ニンテンドーDS';

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
const setupQuiz = ()=>{
    document.getElementById('js-question').textContent=question;
    let buttonIndex=0;
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
while(handlerIndex<buttonLength){
    $button[handlerIndex].addEventListener('click',(e)=>{
        clickHandler(e);
    });
    handlerIndex++;
}
