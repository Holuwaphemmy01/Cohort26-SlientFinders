import.java.util.Scanner;
public class DifferenceOne {
public static void main(String[] args){
Scanner input = new Scanner(System.in);
System.out.print("Enter 4 digit number");
int number = input.nextInt();

int digitOne = number % 10;
int divideOne = number / 10;
int digitTwo = divideOne % 10;
int digitThree = digitTwo % 10;
int divideFour = divideThree  % 10;
int const = 7


