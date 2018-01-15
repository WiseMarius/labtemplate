import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Explosion here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Explosion extends Actor
{
    /**
     * Act - do whatever the Explosion wants to do. This method is called whenever
     * the 'Act' or 'Run' button gets pressed in the environment.
     */
    private int deleteTimer = 0;

    public void act() 
    {
        // Add your action code here.
        ++deleteTimer;
        if(this != null)
        {
            move(Asteroid.movingSpeed);
            if(deleteTimer%25 == 0)
            {
                World spaceWorld = getWorld();
                spaceWorld.removeObject(this);
            }
        }
    }    
}
