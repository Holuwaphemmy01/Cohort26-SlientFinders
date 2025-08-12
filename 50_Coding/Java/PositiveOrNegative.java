import java.util.Scaner;
	public class PositiveOrNegative{
	public static void main(String [] args)	

	Scanner input = new Scanner(System.in);
	System.out.print("Input an integer, positive or negative: ");
	int number = input.nextLine();
		
	if (number >= 1){
	System.out.println("Positive");}
	else if (number < 1){
	System.out.println("Negative or ZeroInput");}
	else {System.out.println("Invalid Input");}
}
}

