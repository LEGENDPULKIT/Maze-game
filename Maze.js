function preload()
{
    bg=loadImage("sprites/bgg.jpg")
    //wa=loadImage("sprite/wall(1).png")
    tar=loadImage("sprites/house.jpg");
    m=loadImage("sprites/wall (2).png");
}

function setup()
{
    canvas = createCanvas(displayWidth - 20, displayHeight);
   w1=createSprite(displayWidth/2,0,displayWidth,20);
  // w2=createSprite(displayWidth/2,4200,displayWidth,20);
   w3=createSprite(0,displayHeight/2,20,displayHeight);
   w4=createSprite(displayWidth-20,displayHeight,20,displayHeight);

   
   o1=createSprite(200,0,20,400);
    o1.shapeColor="black"
   o2=createSprite(200,200,200,20);
   o2.shapeColor="black"
   o3=createSprite(100,160,20,100);
   o3.shapeColor="black"
   o4=createSprite(10,300,500,20);
   o4.shapeColor="black"
   o5=createSprite(100,350,20,100);
   o5.shapeColor="black"
   o6=createSprite(0,500,400,20);
   o6.shapeColor="black"
   o7=createSprite(200,500,20,250);
   o7.shapeColor="black"
   o8=createSprite(275,380,170,20);
   o8.shapeColor="black"
   o9=createSprite(350,330,20,100);
  o9.shapeColor="black"
   o10=createSprite(270,615,150,20);
   o10.shapeColor="black"
   o11=createSprite(0,850,200,20);
   o11.shapeColor="black"
   o12=createSprite(100,690,20,150);
   o12.shapeColor="black"
   o13=createSprite(350,755,500,20);
   o13.shapeColor="black"
   o14=createSprite(600,645,20,240);
   o14.shapeColor="black"
   o15=createSprite(500,535,200,20);
   o15.shapeColor="black"
   o16=createSprite(650,650,120,20);
  o16.shapeColor="black"
   o17=createSprite(700,750,20,200);
   o17.shapeColor="black"
   o18=createSprite(700,850,200,20);
   o18.shapeColor="black"
   o19=createSprite(600,880,20,100);
   o19.shapeColor="black"
   o20=createSprite(800,880,20,100);
   o20.shapeColor="black"
   o21=createSprite(800,750,180,20);
   o21.shapeColor="black"
   o22=createSprite(900,displayHeight-100,20,800);
   o22.shapeColor="black"
   o23=createSprite(980,590,150,20);
   o23.shapeColor="black"
   o24=createSprite(1040,510,20,180);
   o24.shapeColor="black"
   o25=createSprite(770,410,560,20);
   o25.shapeColor="black"
   o26=createSprite(500,340,20,120);
   o26.shapeColor="black"
   o27=createSprite(1100,850,250,20);
   o27.shapeColor="black"
   o27.velocityX=-4;
   o28=createSprite(1500,500,300,20);
   o28.shapeColor="black"
   o28.velocityX=5;
   o29=createSprite(displayWidth/2+60,3500,350,20);
   o29.shapeColor="black"
   o30=createSprite(displayWidth/2+60,2000,350,20);
   o30.shapeColor="black"
   o31=createSprite(displayWidth/2+60,1500,350,20);
   o31.shapeColor="black"

   man=createSprite(displayWidth/2+80,4000,50,50);

   //man.velocityX=1
    man.velocityY=-10;
    man.addImage("ma",m);

    target=createSprite(650,700,40,40);
    target.addImage("house",tar);
    target.scale=0.1;
}


function draw()
{
    background(bg);

    bounceOff(o22,o27);
    bounceOff(o27,w4);

    bounceOff(o28,w4);
    bounceOff(o28,o24);

    if(isTouching(man,o2)||isTouching(man,o3)||isTouching(man,o4)||isTouching(man,o5)||isTouching(man,o6)||isTouching(man,o7)||isTouching(man,o8)||isTouching(man,o9)||isTouching(man,o10)||isTouching(man,o11)||isTouching(man,o12)||isTouching(man,o13)||isTouching(man,o14)||isTouching(man,o15)||isTouching(man,o16)||isTouching(man,o17)||isTouching(man,o18)||isTouching(man,o19)||isTouching(man,o20)||isTouching(man,o21)||isTouching(man,o22)||isTouching(man,o23)||isTouching(man,o24)||isTouching(man,o25)||isTouching(man,o26)||isTouching(man,o27)||isTouching(man,o28)||isTouching(man,o29)||isTouching(man,o30)||isTouching(man,o31))
    {
        man.velocityX=0;
        man.velocity=0;
    }


    camera.position.x = man.position.x;
    camera.position.y = man.position.y;


    if(isTouching(man,target))
    {
       
        o1.destroy();
        o2.destroy();
        o3.destroy();
        o4.destroy();
        o5.destroy();
        o6.destroy();
        o7.destroy();
        o8.destroy();
        o9.destroy();
        o10.destroy();
        o11.destroy();
        o12.destroy();
        o13.destroy();
        o14.destroy();
        o15.destroy();
        o16.destroy();
        o17.destroy();
        o18.destroy();
        o19.destroy();
        o20.destroy();
        o21.destroy();
        o22.destroy();
        o23.destroy();
        o24.destroy();
        o25.destroy();
        o26.destroy();
        o27.destroy();
        o28.destroy();
        o29.destroy();
        o30.destroy();
        o31.destroy();
        

    }

    drawSprites();
}

function keyPressed()
{
    if(keyCode===UP_ARROW)
    {
       man.velocityY=-5;
       man.velocityX=0;
    }else if(keyCode===DOWN_ARROW)
    {
        man.velocityY=3;
        man.velocityX=0;
    }

    else if(keyCode===LEFT_ARROW)
    {
        man.velocityY=0;
       man.velocityX=-5;
    }
    else if(keyCode===RIGHT_ARROW)
    {
        man.velocityY=0;
       man.velocityX=3;
    }
}

