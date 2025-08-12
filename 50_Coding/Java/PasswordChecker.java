import java.util.Scanner;
	public class PasswordChecker{
	public static void main (String [] args){
	
	Scanner input = new Scanner(System.in);
	System.out.println("Enter your password: ");
	String password = input.nextLine();
		
	if (password.equals("secret123")){
	System.out.println("Access granted! Welcome!");}
	else {System.out.print("Access denied!");}
	
	
	}	
}
