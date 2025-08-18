import java.util.Scanner;
public class Difference1{
	public static void main(String[] args){
	Scanner input = new Scanner(System.in);

	System.out.print("Enter a  4-digit number: ");
	int number = input.nextInt();

	if(number < 1000 || number > 9999) {
		System.out.println("Invalid input. Please enter a 4-gigit number");}
	
	int digit1 = number / 1000;
	int digit2 = (number / 100) % 10;
	int digit3 = (number / 10) % 10;
	int digit4 = number % 10;
	
	digit1 = digit1 + 7;
	digit2 = digit2 + 7;
	digit3 = digit3 + 7;
	digit4 = digit14 + 7;

	System.out.println("The encrypted number is: ");
	System.out.println("First 1: " + digit1);
	System.out.println("Second 2: " + digit2);
	System.out.println("Third 3: " + digit3);
	System.out.println("First 5: " + digit4);

	}

}