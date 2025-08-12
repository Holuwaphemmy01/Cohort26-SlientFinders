import java.util.Scaner;
	public class FavouriteNumber{
	public static void main(String [] args)	

	int favourite = 7;
	Scanner input = new Scanner(System.in);
	System.out.print("Guess the favourite number, between 0 to 9: ");
	int guess = input.nextLine();
		
	if (guess == favourite){
	System.out.println("Thats, my favourite number");}
	else {System.out.println("Wrong, Try again");}
}
}
