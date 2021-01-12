const quiz = [
    {
        question: 'クラウドコンピューティングの定義について、空欄を選択</br>\
        ネットワーク、サーバ、ストレージ、アプリケーション、サービスなどの構成可能な\
        [ X ]の共用プール に対して、便利かつオンデマンドにアクセスでき、\
        最小の管理労力またはサービスプロバイダ間の相互動作によって\
        迅速に提供され利用できるという、モデルのひとつである。',
        answers: [
            'サーバリソース',
            '物理マシンリソース',
            'コンピューティングリソース',
            '仮想マシンリソース'
        ],
        correct:'コンピューティングリソース'
    },{
        question: 'クラウドコンピューティングの定義について、空欄を選択</br>\
        ネットワーク、サーバ、ストレージ、アプリケーション、サービスなどの構成可能な\
        コンピューティングリソースの共用プール に対して、便利かつオンデマンドにアクセスでき、\
        最小の管理労力またはサービスプロバイダ間の相互動作によって\
        [ X ]に提供され利用できるという、モデルのひとつである。',
        answers: [
            '安定的',
            '広範囲',
            '効率的',
            '迅速'
        ],
        correct:'迅速'
    },{
        question: 'コンピューティングリソースとはなにか？',
        answers: [
            '通信なども含む計算資源',
            'コンピュータの性能',
            '使えるコンピュータの台数',
            'HDDの記憶容量'
        ],
        correct:'通信なども含む計算資源'
    },{
        question: 'クラウドでは一人のユーザに対して一つの物理マシンが\
        </br>割り当てられているわけではない。これを表す言葉は？',
        answers: [
            'On demand self service',
            'Broad network access',
            'Resource pooling',
            'Rapid elasticity'
        ],
        correct:'Resource pooling'
    },{
        question: '複数のストレージを1つに見せるRAIDは[ X ]と高速化が目的である。',
        answers: [
            '効率化',
            '仮想化',
            '安定化',
            '冗長化'
        ],
        correct:'冗長化'
    },{
        question: '会社にデータセンタを用意することを何というか。',
        answers: [
            'ホスティング',
            'オンプレミス型',
            'IaaS',
            'クラウド型'
        ],
        correct:'オンプレミス型'
    },{
        question: '社内ではなく事業者が用意したサーバ環境を使うことを',
        answers: [
            'ホスティング',
            'オンプレミス型',
            'IaaS',
            'クラウド型'
        ],
        correct:'クラウド型'
    },{
        question: 'サーバを物理的構成と切り離した状態で構築することを何というか。',
        answers: [
            '効率化',
            '仮想化',
            '安定化',
            '冗長化'
        ],
        correct:'仮想化'
    },{
        question: 'クラウドコンピューティングは[ X ]がサーバの存在を意識していないことを利用したサービスである。',
        answers: [
            '会社',
            'クラウド事業者',
            'プロバイダー',
            'ユーザ'
        ],
        correct:'ユーザ'
    },{
        question: 'サーバの性能不足や構築技術不足で普及しなかったSaaSの前身は？',
        answers: [
            'UPS',
            'VPS',
            'ASP',
            'TSS'
        ],
        correct:'ASP'
    },{
        question: 'SaaSを利用したときに企業側が行うことは？',
        answers: [
            'インフラストラクチャー構築',
            'アプリケーション開発',
            'ビジネスプロセス',
            'サーバ施設構築'
        ],
        correct:'ビジネスプロセス'
    },{
        question: 'SaaS利用時は機密情報管理や障害対応でのトラブルを避けるため\
        [ X ]を締結・見直しすることが大切である。',
        answers: [
            'TSS',
            'SLA',
            'VPS',
            'UPS'
        ],
        correct:'SLA'
    },{
        question: 'IaaSにおいてクラウド事業者が提供する部分',
        answers: [
            'アプリケーション',
            'サーバ施設とハードウェア環境',
            '土台となるソフトウェア環境',
            'ビジネスプロセス'
        ],
        correct:'サーバ施設とハードウェア環境'
    },{
        question: 'IaaSとホスティングの違いとして不適切なもの',
        answers: [
            '拡張性',
            'Measured service',
            'On-demand self-service',
            'ハードウェア環境を貸している'
        ],
        correct:'ハードウェア環境を貸している'
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

const quizLength = quiz.length;
let quizIndex=0;
let score=0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
const setupQuiz = ()=>{
    document.getElementById('js-question').innerHTML=quiz[quizIndex].question;
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
        score++;
    }else{
        window.alert('不正解!答えは\n'+quiz[quizIndex].correct);
    }

    quizIndex++;
    if(quizIndex<quizLength){
        setupQuiz();
    }else{
        window.alert('終了！あなたの正解数は'+score+'/'+quizLength+'です!');
    }
}

let handlerIndex=0;
while(handlerIndex<buttonLength){
    $button[handlerIndex].addEventListener('click',(e)=>{
        clickHandler(e);
    });
    handlerIndex++;
}
