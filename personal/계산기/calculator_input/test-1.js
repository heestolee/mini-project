function exceptNum()     {   
    var keyCode = event.keyCode;   
    if(((keyCode<48)||(keyCode>57))&&(keyCode!==8))   
    {    
        alert("숫자만 입력해주세요.")  
        event.returnValue=false;  
    }  
}  

function click_in(OP) {
    const box1 = document.getElementById("box1");
    const box2 = document.getElementById('box2');
    const out1 = document.getElementById('out1');

    const v1= parseFloat(box1.value);
    const v2= parseFloat(box2.value);

    let v3;

    switch (OP) {
        case '+': {
            v3 = v1 + v2;
            break;
        }   

        case '-': {
            v3 = v1 - v2;
            break;
        }

        case '*': {
            v3 = v1 * v2;
            break;
        }

        case '/': {
            if (v2 === 0) {
                v3 = '0으로 나눌 수 없습니다.';
            } else {
                v3 = v1 / v2;
            }
            break;
        }

        case 'C': {
            box1.value = '';
            box2.value = '';
            v3 = '';
        }
    }
    out1.value = v3;
}
