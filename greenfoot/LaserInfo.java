import greenfoot.*; // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class LaserInfo here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class LaserInfo extends Actor
{
    /**
     * Act - do whatever the LaserInfo wants to do. This method is called whenever
     * the 'Act' or 'Run' button gets pressed in the environment.
     */
    
    static GreenfootImage laserText = new GreenfootImage(100, 30);
    
    public LaserInfo()
    {
        laserText.setColor(Color.WHITE);
        laserText.setFont(new Font("Arial", true, false, 15));
        laserText.drawString("Laser: ON", 2, 20);
    }
    
    public void act() 
    {
        // Add your action code here.
        setImage(laserText);
    }    
}
