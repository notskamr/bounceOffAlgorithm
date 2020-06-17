function isTouching(arg1, arg2) {


    if(arg1.x - arg2.x < arg1.width/2 + arg2.width/2 &&
      arg2.x - arg1.x < arg2.width/2 + arg1.width/2 &&
      arg1.y - arg2.y < arg1.height/2 + arg2.height/2 &&
      arg2.y - arg1.y < arg2.height/2 + arg1.height/2) {
    return true;
    }
    
    else {
    
    return false;
    }}
  
    function bounceOff(arg3, arg4) {
      if (arg3.x - arg4.x < arg4.width/2 + arg3.width/2
        && arg4.x - arg3.x < arg4.width/2 + arg3.width/2) {
      arg3.velocityX = arg3.velocityX * (-1);
      arg4.velocityX = arg4.velocityX * (-1);
    }
    if (arg3.y - arg4.y < arg4.height/2 + arg3.height/2
      && arg4.y - arg3.y < arg4.height/2 + arg3.height/2){
      arg3.velocityY = arg3.velocityY * (-1);
      arg4.velocityY = arg4.velocityY * (-1);
    }
}