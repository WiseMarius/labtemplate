import greenfoot.*;
 
public class Background extends World
{
    private static double scrollingSpeed;
    private static final String bgImageName = "SpaceWorld.png";
    private static final int picWidth = (new GreenfootImage(bgImageName)).getWidth();
    static GreenfootSound mainSong = new GreenfootSound("ArcadeAhri.mp3");

    private int speedTimer;
    private int scrollPosition;
    private GreenfootImage bgImage, bgBase;

    public Background()
    {    
        super(800, 400, 1, false);
        speedTimer = 0;
        scrollPosition = 0;
        scrollingSpeed = 6;
        mainSong.setVolume(50);
        setBackground(bgImageName);
        Spaceship spaceship = new Spaceship();
        LaserInfo laserInfo = new LaserInfo();
        ScoreInfo scoreInfo = new ScoreInfo();
        addObject(spaceship, 50, getHeight() / 2);
        addObject(scoreInfo, getWidth() - 50, 15);
        addObject(laserInfo, getWidth() - 50, 35);
        bgImage = new GreenfootImage(getBackground());
        bgBase = new GreenfootImage(picWidth, getHeight());
        bgBase.drawImage(bgImage, 0, 0);
        setPaintOrder(LaserInfo.class, ScoreInfo.class, GameOverScreen.class, Spaceship.class, Asteroid.class, Explosion.class);
        prepare();
    }

    public void act()
    {
        ++speedTimer;
        if(!mainSong.isPlaying())
        {
            mainSong.play();
        }

        if(speedTimer%1000==0)
        {
            if(scrollingSpeed!=20)
            {
                scrollingSpeed+=2;
                Asteroid.movingSpeed-=2;
                Spaceship.movingSpeed+=1;
            }
        }
        scrollPosition -= scrollingSpeed;
        while(scrollingSpeed > 0 && scrollPosition < -picWidth) scrollPosition += picWidth;
        while(scrollingSpeed < 0 && scrollPosition > 0) scrollPosition -= picWidth;
        paint(scrollPosition);
    }

    private void paint(int position)
    {
        GreenfootImage bg = getBackground();
        bg.drawImage(bgBase, position, 0);
        bg.drawImage(bgImage, position + picWidth, 0);
    }

    /**
     * Prepare the world for the start of the program.
     * That is: create the initial objects and add them to the world.
     */
    private void prepare()
    {
    }
}