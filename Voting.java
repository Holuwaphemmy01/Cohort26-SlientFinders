import java.util.ArrayList;
import java.util.Scanner;
  public class Voting {
  public static ArrayList<String> candidateNames = new ArrayList<String>();
    public static  void main(String[] args){

         menu(); 	 
}
 public static void menu(){

Scanner input = new Scanner(System.in);

boolean menu1 = true;
while(menu1){
System.out.println("""
	VOTING MENU

1. Candidate registration
2. Voting  registration
3. Voting counting
4. Election results
0. exit
""");
System.out.println("Pick Option");
int option = input.nextInt();

switch(option){
case 1:
	candidateRegistration();
	break;
case 2:
	votingRegistration();
	break;

case 3:
	votingProcess();
	votingProcess1();
	
case 0: menu1 = false;

	}

}
}
	
public static void candidateRegistration(){ 
	
	System.out.println("Registration(3 candidates allowed)");

	for(int count=1; count < 4; count++){

	Scanner input = new Scanner(System.in);


	System.out.println("Candidate " +count+ ": Enter full name: ");
	String name = input.nextLine();
	candidateNames.add(name);
	

	System.out.println("Enter Political Party:");
	String party = input.nextLine();
	candidateNames.add(party);

	System.out.println("Position: ");
	String position = input.nextLine();
	candidateNames.add(position);
	
	
	System.out.println(candidateNames);
	

	  }


	}
	

   public static void votingRegistration(){

	Scanner input = new Scanner(System.in);

	
	System.out.println("Enter full name: ");
	String name = input.nextLine();


	System.out.println("Enter Voting ID: ");
	int votingId = input.nextInt();

	}

    public static void votingProcess(){
	
	int count = 0;
	for(int index = 0; index < candidateNames.size(); index += 3){
		System.out.println((count + 1) + candidateNames.get(index));
		count++;


	}

    }

    public static void votingProcess1(){

	Scanner input = new Scanner(System.in);

	 String votecount = "continue";
	 int keepvoting = 0;

 while(!votecount.equalsIgnoreCase("stop")){

	System.out.println("who are you voting for");
	String candidateChoice = input.nextLine();
	

	if( == candidateChoice){
	}else{
		System.out.println("Keep voting");
		String winner = input.nextLine();
		votecount++;
		keepvoting++;

	  }

	}
		System.out.println("The total vote is:" + " " + votecount);

     }











}