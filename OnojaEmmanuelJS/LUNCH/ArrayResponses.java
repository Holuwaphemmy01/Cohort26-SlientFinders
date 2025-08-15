public class StudentPoll {
	public static void main(String[] args) {
 // student response array (more typically, input at runtime)
		int[] responses = {1, 2, 5, 4, 3, 5, 2, 1, 3, 3, 1, 4, 3, 3, 3, 2, 3, 3, 2, 14};
		int[] responseOutCome    = {1,2,3,4,5};
		
		for (int count = 0; count < responses.length; count++){
			for (int index = count; index < responseOutCome.length;  index++){
				
		  ++responseOutCome[responses[count]];
				
				}
				System.out.println(index , responseOutCome[index]);

		}
		
			}
		
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
