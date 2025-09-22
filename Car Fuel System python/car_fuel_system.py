class Car:
    def __init__(self, fuel_efficiency=15):
        self.fuel_efficiency = fuel_efficiency
        self.fuel_level = 0
        self.max_fuel = 50
        self.running = False

    def start(self):
        self.running = True

    def stop(self):
        self.running = False

    def refuel(self, liters):
        self.fuel_level = min(self.fuel_level + liters, self.max_fuel)

    def drive(self, distance):
        if not self.running:
            raise Exception("Car must be started")
        fuel_needed = distance / self.fuel_efficiency
        if fuel_needed > self.fuel_level:
            raise Exception("Not enough fuel")
        self.fuel_level -= fuel_needed

    def get_fuel_level(self):
        return self.fuel_level

    def is_running(self):
        return self.running
