import java.util.Scanner;
	public class FriendlyRobot{
	public static void main (String [] args){
	
	Scanner input = new Scanner(System.in);
	System.out.println("Enter your name: ");
	String name = input.nextLine();
		
	if (name.equals("Alex")){
	System.out.println("Hello, friend");}
	else {System.out.print("Hello, stranger");}
	
	
	}	
}