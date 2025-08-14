public class Day10 {

public static int [] largestAndSecondLargest(int [] numbers) {
	int largest = numbers[0];
	int smallest = numbers[1];
	int secondLargest = 0;
for (int count = 0; count < numbers.length; count++) {
	int newArray = numbers[count];
	if (newArray > largest) {
		secondLargest = largest;
		largest = newArray;
		} else if (newArray > secondLargest && newArray < largest) secondLargest = newArray; 
	}
return new int [] {largest, secondLargest};
}


public static void main(String... makaveli) {
int [] number = {3,4,5,2,3,7,8,9,56,6};

System.out.println( largestAndSecondLargest(number));


}
}