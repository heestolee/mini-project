
let com = Math.ceil(Math.random() * 3);

    switch (com) {
        case 1:
            com = "가위" ;
            break;
        case 2:
            com = "바위" ;
            break;
        case 3:
            com = "보" ;
            break;
    }


    console.log(com);

function run(user) {
    switch (user) {
        case 'scissors' : {
            if ( com === '가위') {
                document.write("컴퓨터 : 가위, 사용자와 비겼습니다.")
            } else if ( com === '바위') {
                document.write("컴퓨터 : 바위, 사용자가 졌습니다.")
            } else if ( com === '보') {
                document.write("컴퓨터 : 보, 사용자가 이겼습니다.")
            }
        break;
        }
    
        case 'rock' : {
            if ( com == '가위') {
                document.write("컴퓨터 : 가위, 사용자가 이겼습니다.")
            } else if ( com == '바위') {
                document.write("컴퓨터 : 바위, 사용자와 비겼습니다.")
            } else if ( com == '보') {
                document.write("컴퓨터 : 보, 사용자가 졌습니다.")
            }
        break;
        }
    
        case 'paper' : {
            if ( com == '가위') {
                document.write("컴퓨터 : 가위, 사용자가 졌습니다.")
            } else if ( com == '바위') {
                document.write("컴퓨터 : 바위, 사용자가 이겼습니다.")
            } else if ( com == '보') {
                document.write("컴퓨터 : 보, 사용자와 비겼습니다.")
            }
        break;
        }
    }
}
    // git push test 중 1
    // git push test 중 2
    // git push test 중 3
        