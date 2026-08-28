import { expect, test } from "@playwright/test";

test.describe("Apps dashboard", () => {
  test("unauthenticated user is redirected away from the apps dashboard", async ({ page }) => {
    await page.goto("/dashboard");
    await expect(page).toHaveURL(/sign-in/);
  });
});
