import java.util.Arrays;
public class Day10 {

public static int [] largestAndSecondLargest(int [] array ){

int largest = 0;
int secondLargest = 0;

for(int count = 1; count <= 5; count++){
if(array[count] > largest){
secondLargest = largest; 
largest = array[count] ;
} else if (array[count] > secondLargest && largest != array[count]){
secondLargest = array[count]; 
}
}
return new int [] {largest,secondLargest};
}


public static void main (String[] args){
int [] arrayList = {1, 5, 87, 45, 8, 8};
int [] twoLargestNumber = Day10.largestAndSecondLargest(arrayList);
System.out.print(Arrays.toString(twoLargestNumber));



}
}