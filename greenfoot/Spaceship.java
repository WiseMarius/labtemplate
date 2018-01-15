import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Spaceship here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Spaceship extends Actor
{
    /**
     * Act - do whatever the Spaceship wants to do. This method is called whenever
     * the 'Act' or 'Run' button gets pressed in the environment.
     */
    
    static int movingSpeed;
    private int laserTimer;
    private int spawnTimer;
    private boolean canShoot;
    private boolean canSpawn;
    private GreenfootSound laserSFX = new GreenfootSound("LaserGun.wav");
    private GreenfootSound losingSFX = new GreenfootSound("LosingSound.mp3");
    
    public Spaceship()
    {
        laserTimer = 0;
        spawnTimer = 0;
        movingSpeed = 2;
        canShoot = true;
        canSpawn = true;
        laserSFX.setVolume(75);
        losingSFX.setVolume(50);
    }

    public void act() 
    {
        // Add your action code here.
        if(this != null)
        {
            createNewEnemy();
            checkLaserBeam();
            resetShipPosition();
            checkEnemyCollision();
            checkSpaceshipDirection();
        }
    }
    
    private void checkEnemyCollision()
    {
       if(isTouching(Asteroid.class))
        {
            World spaceWorld = getWorld();
            GameOverScreen gameOver = new GameOverScreen();
            spaceWorld.addObject(gameOver, spaceWorld.getWidth() / 2, spaceWorld.getHeight() / 2);
            Background.mainSong.stop();
            losingSFX.play();
            String playerInput = Greenfoot.ask("GAME OVER. Would you like to restart the game? (YES/NO)");
            if(playerInput.equals("YES"))
            {
               Greenfoot.setWorld(new Background());
            }
            if(playerInput.equals("NO"))
            {
                System.exit(0);
            }
        }
    }
    
    private void createNewEnemy()
    {
        if(canSpawn == false)
        {
             ++spawnTimer;
            if(spawnTimer%25 == 0)
            {
                canSpawn = true;
                spawnTimer = 0;
            }
        }
        else
        {
            World spaceWorld = getWorld();
            Asteroid asteroid = new Asteroid();
            int randomY = Greenfoot.getRandomNumber(spaceWorld.getHeight() - 15);
            spaceWorld.addObject(asteroid, spaceWorld.getWidth() +15, randomY);
            canSpawn = false;
        }
    }
    
    private void checkLaserBeam()
    {
        if(canShoot == false)
        {
            ++laserTimer;
            if(laserTimer%50 == 0)
            {
                canShoot = true;
                laserTimer = 0;
                LaserInfo.laserText.clear();
                LaserInfo.laserText.drawString("Laser: ON", 2, 20);
            }
        }
        else
        {
            if(Greenfoot.isKeyDown("space"))
            {
                World spaceWorld = getWorld();
                Laserbeam beam = new Laserbeam();
                spaceWorld.addObject(beam, getX() + 25, getY());
                LaserInfo.laserText.clear();
                LaserInfo.laserText.drawString("Laser: OFF", 2, 20);
                laserSFX.play();
                canShoot = false;
            }
        }
    }
    
    private void checkSpaceshipDirection()
    {
        if(Greenfoot.isKeyDown("left"))
        {
           move(-movingSpeed);
        }
        if(Greenfoot.isKeyDown("right"))
        {
            move(movingSpeed);
        }
        if(Greenfoot.isKeyDown("up"))
        {
            setLocation(getX(), getY() - movingSpeed);
        }
        if(Greenfoot.isKeyDown("down"))
        {
            setLocation(getX(), getY() + movingSpeed);
        }
    }
    
    private void resetShipPosition()
    {
        World spaceWorld = getWorld();
        if(getX() <= 0)
        {
            setLocation(1, getY());
        }
        if(getX() >= spaceWorld.getWidth())
        {
            setLocation(spaceWorld.getWidth() - 1, getY());
        }
        if(getY() <= 0)
        {
            setLocation(getX(), 1);
        }
        if(getY() >= spaceWorld.getHeight())
        {
            setLocation(getX(), spaceWorld.getHeight() - 1);
        }
    }
}
