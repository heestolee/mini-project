let user = prompt("가위, 바위, 보 중 하나를 선택하세요");
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

    switch (user) {
        case '가위' : {
            if ( com === '가위') {
                document.write("컴퓨터 : 가위, 사용자와 비겼습니다.")
            } else if ( com === '바위') {
                document.write("컴퓨터 : 바위, 사용자가 졌습니다.")
            } else if ( com === '보') {
                document.write("컴퓨터 : 보, 사용자가 이겼습니다.")
            }
        break;
        }
    
        case '바위' : {
            if ( com == '가위') {
                document.write("컴퓨터 : 가위, 사용자가 이겼습니다.")
            } else if ( com == '바위') {
                document.write("컴퓨터 : 바위, 사용자와 비겼습니다.")
            } else if ( com == '보') {
                document.write("컴퓨터 : 보, 사용자가 졌습니다.")
            }
        break;
        }
    
        case '보' : {
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