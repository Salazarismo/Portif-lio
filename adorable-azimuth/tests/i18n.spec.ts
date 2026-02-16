import { expect, test } from "@playwright/test";

test("PT home renders PT hero text", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#hero-title")).toContainText("ENGENHEIRO DE SOFTWARE");
});

test("EN home renders EN hero text", async ({ page }) => {
  await page.goto("/en/");
  await expect(page.locator("#hero-title")).toContainText("SOFTWARE ENGINEER");
});

test("Locale toggle keeps equivalent path", async ({ page }) => {
  await page.goto("/projects/p5");
  await page.locator("#site-header").getByRole("link", { name: "EN", exact: true }).click();
  await expect(page).toHaveURL(/\/en\/projects\/p5\/?$/);

  await page.locator("#site-header").getByRole("link", { name: "PT", exact: true }).click();
  await expect(page).toHaveURL(/\/projects\/p5\/?$/);
});

test("Header does not overlap project hero", async ({ page }) => {
  await page.goto("/projects/p7/");
  await expect(page.locator("#site-header")).toBeVisible();
  const headerBox = await page.locator("#site-header").boundingBox();
  const h1Box = await page.locator("h1").first().boundingBox();

  expect(headerBox).not.toBeNull();
  expect(h1Box).not.toBeNull();
  expect(h1Box!.y).toBeGreaterThanOrEqual(headerBox!.y + headerBox!.height);
});
