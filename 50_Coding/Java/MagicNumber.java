import java.util.Scanner;

public class MagicNumber {
    public static void main(String[] args) {
        final int magicNumber = 42;
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Guess the magic number: ");
        int userGuess = scanner.nextInt();
        
        if (userGuess == magicNumber) {
            System.out.println("You found the magic number!");
        } else {
            System.out.println("Keep looking!");
        }
        
    }
}