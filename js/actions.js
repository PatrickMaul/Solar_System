function planetsRotation(planets, scene) {
  const earthRotation = 2 * Math.PI * (1 / 60) * (1 / 60); // 1 minute = 1 day

  for (const planetName in planets) {
    if (Object.hasOwnProperty.call(planets, planetName)) {
      const planet = planets[planetName];
      scene.getObjectByName(planetName).rotation.y += earthRotation / planet.rotationInDays;
    }
  }
}

/**
 * Let all planets have an oribt, except the sun
 *
 * Definition:
 *
 * One day at the earth is 1 minute long
 * One year is depending on the days length (1 minute) 365 minutes or ≈6.08 hours long (1m*365t = 365m / 60m = 6.08333333h)
 *
 * @param {array} planets Array of all Planets
 * @param {object} scene The scene object where all planets inside
 * @returns {void} void
 */
function planetsOrbit(planets, scene) {
  const sunRadius = planets.sun.renderRadius;
  const earthYear = (2 * Math.PI * (1 / 60) * (1 / 60)) / 365;

  for (const planetName in planets) {
    if (Object.hasOwnProperty.call(planets, planetName)) {
      const planet = planets[planetName];

      if (planetName === 'sun') continue;

      scene.getObjectByName(planetName).position.x =
        (sunRadius + planet.distanceToSun) * Math.cos(Date.now() * (earthYear / planet.orbitalSpeed));
      scene.getObjectByName(planetName).position.z =
        (sunRadius + planet.distanceToSun) * Math.sin(Date.now() * (earthYear / planet.orbitalSpeed));
    }
  }
}

export { planetsRotation, planetsOrbit };
