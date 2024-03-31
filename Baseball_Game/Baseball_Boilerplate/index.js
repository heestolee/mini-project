const start = document.getElementById("start") ;
const Answer = StartGame();
const submit = document.getElementById("submit");
let count = 0;

start.addEventListener("click", () => {console.log(Answer);});
start.addEventListener("click", () => { alert("게임 시작!") ; });
start.addEventListener("click", () => {  
  document.getElementById("digit").innerText = "답: " + Answer.length + "자리 숫자" ; 
});
submit.addEventListener("keyup", PressEnter);

  function StartGame () {
    const Num = [];
    for ( let i = 0 ; i < 3 ; i++ ) {
      let RanNum = Math.floor(Math.random() * 10) ;
      Num.push(RanNum);
    }
    return Num;
  }

  function PressEnter () {
    let strike = 0;
    let ball = 0;
    let answer = Answer ;
    let guess = String(submit.value);
    if ( window.event.keyCode == 13 ) {
      if(guess.length != 3) {alert("숫자는 세자리만 입력해주세요!");
       } else {
        if( count<11 ) { 
            for (let x=0 ; x<3 ; x++) {
              for(let y=0; y<3 ; y++) {
                if(guess[x] == answer[y]) {
                  if ( x == y ) {
                    strike++;
                    } else {
                      ball++;
                  }
                } 
              } 
            } 
          count++;
          if (count > 10) {
            ResultLog( "시도 횟수를 초과했습니다. 재시작해주세요." );
          } else if ( strike == 3) {
            ResultLog("홈런!"); 
            submit.disabled = true;
          } else {
            ResultLog( count + "번째 시도 " + submit.value + ", " + strike + "S " + ball + "B 입니다." );
            }
          } 
        } 
      }
    }

  function ResultLog( output ) {
    let div = document.createElement("div");
    div.innerText = output;
    document.getElementById("result").appendChild(div);
  }
// git push 테스트중
