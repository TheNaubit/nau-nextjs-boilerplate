import { expect, test } from "@playwright/test"

test("should navigate to the test page from the home page", async ({
  page,
}) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts, if any)
  await page.goto("/")
  // Find an element with the text 'Go to the test page' and click on it
  await page.click("text=Go to the test page")
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL("/test")
  // The new page should contain an h1 with "About Page"
  await expect(page.locator("h1")).toContainText("Test succeed!")
})
