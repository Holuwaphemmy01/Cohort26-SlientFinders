import java.util.Scanner;

public class StarName {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Please enter your name: ");
        String name = scanner.nextLine();
        
        for (int freq = 0; freq < 3; freq++) {
            System.out.println(name + "!");
            System.out.println(name + "!");
            System.out.println(name + "!");
         		}
        
         }
}