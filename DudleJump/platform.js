class Module {
  int x, y;
  // Contructor
  Module(int xTemp, int yTemp ) {
    x = xTemp;
    y = yTemp;
 x =int(random(300));
 y= int(random(400));
      }
 // Custom method for drawing the object
  void display() {
    fill(255);
    image(platform,x,y);
       }
}
