/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const distance = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

const distanceCovered = ((velocity*1000/3600)*time) // convert km/h to m/s
const newDistance = distance + distanceCovered/1000; // convert to km/h                    
const fuelUsed = fuelBurnRate * time;
const remainingFuel = fuel - fuelUsed; //calculates remaining fuel
const newVelocity = calcNewVelocity( velocity, acceleration,time); //calculates new velocity based on acceleration 

// Pick up an error with how the function below is called and make it robust to such errors
function calcNewVelocity(velocity, acceleration, time) {
  const velocityInMS = velocity * (1000 / 3600); ///velocity is converted from km/h to m/s 1000 is how meny meters in a kilometer and 3600 is how meny seconds in an hour.
  const finalVelocityInMS = velocityInMS + (acceleration * time);
  return finalVelocityInMS * 3600 / 1000;
}

console.log(`Corrected New Velocity: ${newVelocity.toFixed(2)} km/h`);
console.log(`Corrected New Distance: ${newDistance.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel.toFixed(2)} kg`);