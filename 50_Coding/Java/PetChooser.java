import java.util.Scanner;
	public class PetChooser{
	public static void main (String [] args){
	
	Scanner input = new Scanner(System.in);
	System.out.println("Enter your pet, cats or dogs: ");
	String pet = input.nextLine();
		
	if (pet.equals("dogs")){
	System.out.println("Woof, I love dogs");}
	else if (pet.equals("cats")){
	System.out.print("Thats nice, but i like cats more");}
	else {System.out.print("invalid input, you have two choices in question");}
}
}