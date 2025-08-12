import java.util.Scanner;
	public class AnimalGuessingGame{
	public static void main (String [] args){
	
	Scanner input = new Scanner(System.in);
	System.out.println("Guess the animal: ");
	String guess = input.nextLine();
		
	if (guess.equals("dog")){
	System.out.println("Correct! It's a dog");}
	else {System.out.print("Nope, It's a dog");}
}
}
