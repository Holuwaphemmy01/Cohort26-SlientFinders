import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class CarTest {

    @Test
    public void testStartCar() {
        Car car = new Car(15);
        car.start();
        assertTrue(car.isRunning());
    }
    @Test
    public void testThatCarCanBeRefillIfNotFullYet(){
        Car car = new Car(15);
        car.start();
        car.stop();
        car refuel(30);
        car.refuel(15);
        asserTrue(45, car.getFuelLevel());

    }

    @Test
    public void testStopCar() {
        Car car = new Car(15);
        car.start();
        car.stop();
        assertFalse(car.isRunning());
    }

    @Test
    public void testRefuelAboveMax() {
        Car car = new Car(15);
        car.refuel(30);
        assertEquals(30, car.getFuelLevel());
        car.refuel(25);
        assertEquals(50, car.getFuelLevel());
    }

    @Test
    public void testDriveConsumesFuel() {
        Car car = new Car(15);
        car.refuel(20);
        car.start();
        car.drive(60);
        assertEquals(16, car.getFuelLevel(), 0.01);
    }

    @Test
    public void testDriveThrowsWhenFuelLow() {
        Car car = new Car(15);
        car.refuel(5);
        car.start();
        Exception exception = assertThrows(IllegalStateException.class, () -> {
            car.drive(100);
        });
        assertEquals("Not enough fuel", exception.getMessage());
    }

    @Test
    public void testCarStatus() {
        Car car = new Car(15);
        car.refuel(10);
        assertEquals(10, car.getFuelLevel());
        assertFalse(car.isRunning());
        car.start();
        assertTrue(car.isRunning());
    }
}
