import { expect, test } from '../../fixtures/base-page';
import { INVALID_LOGIN_SCENARIOS, VALID_LOGIN_SCENARIOS } from '../../test-data/login-data';

test.describe('@regression Login Tests', () => {
  test.describe.configure({ mode: 'parallel' });

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  for (const { scenario, credentials } of VALID_LOGIN_SCENARIOS) {
    test(`Valid Login: ${scenario}`, async ({ page, loginPage }) => {
      await loginPage.login(credentials.username, credentials.password);
      await expect(page).toHaveURL('/inventory.html');
    });
  }

  for (const { scenario, expectedError, credentials } of INVALID_LOGIN_SCENARIOS) {
    test(`Invalid Login: ${scenario}`, async ({ loginPage }) => {
      await loginPage.login(credentials.username, credentials.password);
      await expect(loginPage.errorMessageContainer).toContainText(expectedError);
    });
  }
});