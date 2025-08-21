import java.util.Scanner;
public class Uppercase{
	public static void main (String[]args){
		Scanner input = new Scanner(System.in);
	
		System.out.print(getUppercase("i am a boy"));


		}


	public static String getUppercase(String words){
			String sum = "";
		for(int letter = 0; letter < words.length();letter++){
			int getUnicode = ((int) words.charAt(letter)) - 32;
			char prinUni = (char) getUnicode;
			sum += prinUni;
			}
	return sum;

		

	}

}