import java.util.Scanner;
	public class TemperatureCheck{
	public static void main(String [] args)	

	Scanner input = new Scanner(System.in);
	System.out.print("Enter the Temperature in Celsius: ");
	int temp = input.nextLine();
		
	if (temp >= 30){
	System.out.println("Hot!");}
	else if (15 > temp < 30){
	System.out.println("Nice!");}
	else if (temp <= 15)
	{System.out.println("Cold!");}
}
}