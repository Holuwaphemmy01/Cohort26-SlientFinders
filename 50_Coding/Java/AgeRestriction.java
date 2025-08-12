import java.util.Scanner;
	public class AgeRestriction{
	public static void main(String [] args)	

	Scanner input = new Scanner(System.in);
	System.out.print("Enter your Age: ");
	int age = input.nextLine();
		
	if (age >= 10){
	System.out.println("Welcome to the Show");}
	else if (age < 10){
	System.out.println("Sorry, you are too young");}
	else {System.out.println("Invalid Input");}
}
}