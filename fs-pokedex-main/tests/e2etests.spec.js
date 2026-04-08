const { test, describe, expect, beforeEach } = require("@playwright/test");

describe("Pokedex", () => {
  test("front page can be opened", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("ivysaur")).toBeVisible();
    await expect(
      page.getByText(
        "Pokémon and Pokémon character names are trademarks of Nintendo.",
      ),
    ).toBeVisible();
  });

  describe("Navigated to front page", () => {
    beforeEach(async ({ page }) => {
      await page.goto("/");
      await expect(page.getByText("ivysaur")).toBeVisible();
      await expect(
        page.getByText(
          "Pokémon and Pokémon character names are trademarks of Nintendo.",
        ),
      ).toBeVisible();
    });
    test("can open a particular pokemons page", async ({ page }) => {
      const locator = page.getByRole("link", { name: "weedle" });
      await locator.click();
      await expect(page.getByText("run away")).toBeVisible();
    });
  });
});
