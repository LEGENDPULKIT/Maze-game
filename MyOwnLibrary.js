function bounceOff(object1,object2)
{
    //bounce off the object when it is touch through x-axis
  if(object1.x-object2.x<object1.width/2+object2.width/2
    && object2.x-object1.x<object1.width/2+object2.width/2)
    {
      object1.velocityX=object1.velocityX*(-1);
      object2.velocityX=object2.velocityX*(-1);
    }

    //bounce off the object when it is touch through y-axis
    if(object1.y-object2.y<object1.height/2+object2.height/2
    && object2.y-object1.y<object1.height/2+object2.height/2 )
  {
    object1.velocityY=object1.velocityY*(-1);
    object2.velocityY=object2.velocityY*(-1);
  }
}

//create isTouching function
function isTouching(object1,object2)
{
    //make the function true when it is touching the object
  if(object1.x-object2.x<object1.width/2+object2.width/2
    && object2.x-object1.x<object1.width/2+object2.width/2
    &&object1.y-object2.y<object1.height/2+object2.height/2
    && object2.y-object1.y<object1.height/2+object2.height/2 )
  {
    return true;
  }
  else
  {
    return false;
  }
}