public class Car {
    private double fuelLevel = 0;
    private final double maxFuel = 50;
    private final double fuelEfficiency; // km per liter
    private boolean running = false;

    public Car(double fuelEfficiency) {
        this.fuelEfficiency = fuelEfficiency;
    }

    public void start() {
        running = true;
    }

    public void stop() {
        running = false;
    }

    public void refuel(double liters) {
        fuelLevel = Math.min(fuelLevel + liters, maxFuel);
    }

    public void drive(double distance) {
        if (!running) {
            throw new IllegalStateException("Car must be started");
        }
        double fuelNeeded = distance / fuelEfficiency;
        if (fuelNeeded > fuelLevel) {
            throw new IllegalStateException("Not enough fuel");
        }
        fuelLevel -= fuelNeeded;
    }

    public double getFuelLevel() {
        return fuelLevel;
    }

    public boolean isRunning() {
        return running;
    }
}
