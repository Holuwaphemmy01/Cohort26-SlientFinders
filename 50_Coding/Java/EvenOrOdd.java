import java.util.Scanner;
public class EvenOrOdd{
	public static void main (String [] args){
	
	Scanner input = new Scanner(System.in);
	System.out.print("Input any Integer: ");
	int number = input.nextLine();
	
	if (number % 2 == 0){System.out.print("Even number");}
	else if (number % 2 != 0){System.out.print("Odd number");}
	else{System.out.print("invalid input, please use integer")}
	
	}
}

