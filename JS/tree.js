void setup()
{

     size(800,700);

 }

int levelsMin = 2;
    int levelsMax = 7;
    float initialLength = 100;

    float angleMin = PI/17;
    float angleMax = PI/10;

    int pointColor = color(27, 25, 9);



    void tree (int levels, float length, float angle){
      
  //length*=.75;//length of branch deacreases each iteration
      
      if (levels>0){  //check if there are any levels left to render
            //destra

       
            pushMatrix();           //save current transformation matrix
            stroke(0);
            rotate (angle/2.5);         //rotate new matrix to make it point to the right
            line (0,0,0,-length);   //draw line "upwards"
            pushMatrix();           //save current (e.g. new) matrix
            translate(0,-length);   //move the origin to the branch end
            scale (0.95);          //scale down. fun fact - it scales down also the stroke weight!
            strokeWeight(levels);
           tree (levels-1, length, angle);  //call the recursive function again
            popMatrix();            //return to the matrix of the current line
            popMatrix();            //return to the original matrix
            //second branch - the same story
            pushMatrix();
            stroke(0);
            rotate (-angle/2.5);
            line (0,0,0,-length);
            pushMatrix();
            translate(0,-length);
            scale (0.95);
            strokeWeight(levels);
            tree (levels-1, length, angle);
            popMatrix();
            popMatrix();

}
   if (levels<2){
        drawFlowers();  
       }
        }
        
 
  void drawFlowers() { // draws flowers on branches

    //  println("flowers");
      noStroke();
      fill(#db4cb3);
      //strokeWeight(0.4);
     ellipse(0, 0, 20, 20);
      // draw 5 petals rotating after each one
      for (int i = 0; i < 5; i++) {
        fill(#FFB6C1);
    ellipse(0, -15, 20, 20);
        rotate(radians(72));
      }
    }

     void draw() {


        background(color(255,255,255,0.2));
        stroke(0,0, 0);
        strokeWeight(10);

        float currentAngle = map (mouseX*10, 0, width, angleMin, angleMax); //mouse control of the branch angle
        int currentLevels = (int)map (mouseY, height,0, levelsMin, levelsMax); //mouse control of the generations count

        pushMatrix(); //save the world transformation matrix
        translate (width/2, height); //move the origin to the middle / bottom
       tree (currentLevels, initialLength, currentAngle); //draw first two branches - stems
        popMatrix(); //return to the world coordinate system
    
     }