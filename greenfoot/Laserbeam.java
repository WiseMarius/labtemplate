import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Laserbeam here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Laserbeam extends Actor
{
    /**
     * Act - do whatever the Laserbeam wants to do. This method is called whenever
     * the 'Act' or 'Run' button gets pressed in the environment.
     */
    private int movingSpeed;
    private GreenfootSound explosionSFX = new GreenfootSound("ExplosionEffect.wav");
    
    public Laserbeam()
    {
        movingSpeed = 5;
        explosionSFX.setVolume(85);
    }
    
    public void act() 
    {
        // Add your action code here.
        if(this != null)
        {
            move(movingSpeed);
            World spaceWorld = getWorld();
            if(getX() >= spaceWorld.getWidth() || isTouching(Asteroid.class))
            {
                if(isTouching(Asteroid.class))
                {
                    removeTouching(Asteroid.class);
                    Explosion explosion = new Explosion();
                    explosionSFX.play();
                    spaceWorld.addObject(explosion, getX(), getY());
                }
                spaceWorld.removeObject(this);
            }
        }
    } 
}
