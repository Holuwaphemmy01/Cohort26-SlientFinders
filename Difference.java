public class Diff1 {

	public static void main(String...args) {
	Scanner input = new Scanner(System.in);

	System.out.print("Input your password:  ");
	int thePassword = input.nextInt();

	int number1 = (password / 1000) % 10;
	int number2 = (password / 100) % 10;
	int number3 = (password / 10) % 10;
	int number4 = password % 10;

	number1 = (number1 + 7) % 10;
	number2 = (number2 + 7) % 10;
	number3 = (number3 + 7) % 10;
	number4 = (number4 + 7) % 10;

	int temp1 = number1;
	number1 = number3;
	number3 = temp1;

	int temp2 = number2;
	number2 = number4;
	number4 = temp2;
	System.out.println(number1,number2,number3,number4);
}


}