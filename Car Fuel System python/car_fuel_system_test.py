import unittest
from car_fuel_system import Car

class TestCar(unittest.TestCase):

    def test_start_car(self):
        car = Car(15)
        car.start()
        self.assertTrue(car.is_running())

    def test_stop_car(self):
        car = Car(15)
        car.start()
        car.stop()
        self.assertFalse(car.is_running())

    def test_refuel(self):
        car = Car(15)
        car.refuel(30)
        self.assertEqual(car.get_fuel_level(), 30)
        car.refuel(25)
        self.assertEqual(car.get_fuel_level(), 50)

    def test_drive_consumes_fuel(self):
        car = Car(15)
        car.refuel(20)
        car.start()
        car.drive(60)  # uses 4L
        self.assertAlmostEqual(car.get_fuel_level(), 16)

    def test_drive_with_low_fuel_throws(self):
        car = Car(15)
        car.refuel(5)
        car.start()
        with self.assertRaises(Exception) as context:
            car.drive(100)
        self.assertEqual(str(context.exception), "Not enough fuel")

    def test_car_status(self):
        car = Car(15)
        car.refuel(10)
        self.assertEqual(car.get_fuel_level(), 10)
        self.assertFalse(car.is_running())
        car.start()
        self.assertTrue(car.is_running())




