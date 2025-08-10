import java.util.Arrays;
public class BubbleSort{
public static void main(String[] args){
int [] score = {40,35,49,57,61,44};
int [] result = sortBubble(score);
System.out.println(Arrays.toString(result));
}


public static int[] sortBubble(int bubble[]){
int empty = 0;
for(int i = 0; i < bubble.length-1; i++){
	for(int j = 0; j < bubble.length - i - 1; j++){
	int highest = bubble.length;
	if(bubble[j] < bubble[j+1]){
		empty = bubble[j];
		bubble[j] = bubble[j+1];
		bubble[j+1] = empty;
		} 	
	}
 	}

return bubble;
}

}