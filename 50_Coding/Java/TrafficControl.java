import java.util.Scanner;
	public class TrafficControl{
	public static void main (String [] args){
	
	Scanner input = new Scanner(System.in);
	System.out.println("Enter your password: ");
	String trafficLight = input.nextLine();
		
	if (trafficLight.equals("Red")){
	System.out.println("STOP");}
	if (trafficLight.equals("Yellow")){
	System.out.println("Wait");}
	if (trafficLight.equals("Green")){
	System.out.println("Go");}
	else {System.out.print("Invalid Input");}
	
	
	}	
}

