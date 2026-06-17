import { expect, test } from '../base';
import { parkingScenarios } from '../utils/parking-test-data';

for ( const scenario of parkingScenarios ) {
  test(scenario.name, async ({ 
    parkingPage 
  }) => {
    await parkingPage.goto();
    await parkingPage.enterParkingDetails(
      scenario.parkingLot,
      scenario.entryDate,
      scenario.exitDate,
      scenario.entryTime,
      scenario.exitTime,
    );
    await parkingPage.calculate();
    await expect(parkingPage.resultValue).toContainText(scenario.expectedCost)
    await expect(parkingPage.resultMessage).toContainText(scenario.expectedDuration);
  });
}
