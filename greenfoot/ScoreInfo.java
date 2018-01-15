import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class ScoreInfo here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class ScoreInfo extends Actor
{
    /**
     * Act - do whatever the ScoreInfo wants to do. This method is called whenever
     * the 'Act' or 'Run' button gets pressed in the environment.
     */
    
    static boolean gameActive = true;
    
    private String score;
    private int scoreTimer = 0;
    private int playerScore = 0;
    private GreenfootImage scoreText = new GreenfootImage(100, 35);
    
    public ScoreInfo()
    {
        scoreText.setColor(Color.WHITE);
        scoreText.setFont(new Font("Arial", true, false, 15));
        scoreText.drawString("Score: 0", 2, 20);
        setImage(scoreText);
    }
    
    public void act() 
    {
        // Add your action code here.
        ++scoreTimer;
        if(scoreTimer%100 == 0)
        {
            score = "Score: ";
            playerScore+=100;
            score+=playerScore;
            scoreText.clear();
            scoreText.drawString(score, 2, 20);
            setImage(scoreText);
        }
    }        
}
