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
        question: '好きな天気',
        answers: [
            '晴れ',
            '曇り',
            '雨',
            '雪'
        ],
        correct:'晴れ'
    },{
        question: '休日の過ごし方',
        answers: [
            '家でゴロゴロ',
            '外で散歩',
            '買い物',
            '外食'
        ],
        correct:'外食'
    }
]

const quizLength = quiz.length;
let quizIndex=0;


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
    document.getElementById('js-question').textContent=quiz[quizIndex].question;
    let buttonIndex=0;
    while(buttonIndex<buttonLength){
        $button[buttonIndex].textContent=quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e) =>{
    if(quiz[quizIndex].correct===e.target.textContent){
        window.alert('正解!');
    }else{
        window.alert('不正解!');
    }

    quizIndex++;
    if(quizIndex<quizLength){
        setupQuiz();
    }else{
        window.alert('終了！');
    }
}

let handlerIndex=0;
while(handlerIndex<buttonLength){
    $button[handlerIndex].addEventListener('click',(e)=>{
        clickHandler(e);
    });
    handlerIndex++;
}
