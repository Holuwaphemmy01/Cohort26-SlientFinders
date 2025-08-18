public class WorldPopulation {
    public static void main(String[] args) {
        double population = 8200000000.0;  
        double growthRate = 0.0088;  
        double startPopulation = population;

        System.out.println(population);

        for (int index = 1; index <= 75; index++) {
            double newPopulation = population * (1 + growthRate);
            double increase = newPopulation - population;

            System.out.println(increase);