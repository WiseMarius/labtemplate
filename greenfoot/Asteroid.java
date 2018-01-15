import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Enemy here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Asteroid extends Actor
{
    /**
     * Act - do whatever the Enemy wants to do. This method is called whenever
     * the 'Act' or 'Run' button gets pressed in the environment.
     */
    static int movingSpeed;
    
    public Asteroid()
    {
        movingSpeed = -2;
    }

    public void act() 
    {
        // Add your action code here.
        if(this != null)
        {
            move(movingSpeed);
            if(getX() == -15)
            {
                World spaceWorld = getWorld();
                spaceWorld.removeObject(this);
            }
        }
    }    
}
