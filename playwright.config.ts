import { defineConfig } from "@playwright/test"

export default defineConfig({
  use: {
    // Base URL to use in actions like `await page.goto('/')`
    baseURL: "http://localhost:3000",
  },
  // Run your local dev server before starting the tests
  // https://playwright.dev/docs/test-webserver/
  // Remember that for this to work, the build must have been done before
  // You can do the build by running `nr build`
  webServer: {
    command: "nr start",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    stdout: "ignore",
    stderr: "pipe",
  },
})
