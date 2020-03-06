function initialize() {
    //initDCU(); 

    ball_count = getElement('ball_count');
    hopper_indicator = getElement('hopper_indicator');


    ErrorCatcherCAN = 'true';
    ErrorCatcherCAN = getElement('ErrorValueCAN');

    ErrorCatcherBridge = 'true';
    ErrorCatcherBridge = getElement('ErrorValueBridge');

    ErrorCatcherLimelight = 'true';
    ErrorCatcherLimelight = getElement('ErrorValueLimelight');

    ErrorCatcherMovement = 'true';
    ErrorCatcherMovement = getElement('ErrorValueMovement');

}

function refresh(json) {
    temp_string = "Ball Count: ";
    ball_count.innerHTML = temp_string.concat(String(json['ball_count']));

    if(json['ball_count'] == 0) {
        hopper_indicator.src = "/cheems/assets/0_ball.png";
    } else if(json['ball_count'] == 1) {
        hopper_indicator.src = "/cheems/assets/1_ball.png";
    } else if(json['ball_count'] == 2) {
        hopper_indicator.src = "/cheems/assets/2_ball.png";
    } else if(json['ball_count'] == 3) {
        hopper_indicator.src = "/cheems/assets/3_ball.png";
    } else {
        hopper_indicator.src = "/cheems/assets/error_ball.png";
    }

    if (json['ErrorCatcherCAN'] != ErrorCatcherCAN.innerHTML) {
        
        ErrorCatcherCAN.innerHTML = json['ErrorCatcherCAN'];

    }
    if(ErrorCatcherCAN.innerHTML == "undefined"){
        ErrorCatcherCAN.innerHTML = 'ErrorCatcher has not been run yet'
    }

    if (json['ErrorCatcherBridge'] != ErrorCatcherBridge.innerHTML) {
        
        ErrorCatcherBridge.innerHTML = json['ErrorCatcherBridge'];

    }
    if(ErrorCatcherBridge.innerHTML == "undefined"){
        ErrorCatcherBridge.innerHTML = 'Bridge is not connected or ErrorCatcher has not been run'
    }

    if (json['ErrorCatcherLimelight'] != ErrorCatcherLimelight.innerHTML) {
        
        ErrorCatcherLimelight.innerHTML = json['ErrorCatcherLimelight'];

    }
    if(ErrorCatcherLimelight.innerHTML == "undefined"){
        ErrorCatcherLimelight.innerHTML = 'Limelight not found'
    }

    if (json['ErrorCatcherMovement'] != ErrorCatcherMovement.innerHTML) {
        
        ErrorCatcherMovement.innerHTML = json['ErrorCatcherMovement'];

    }
    if(ErrorCatcherMovement.innerHTML == "undefined"){
        ErrorCatcherMovement.innerHTML = 'Movement has not been run yet'
    }
    
}
