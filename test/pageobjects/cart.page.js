import { $ } from '@wdio/globals';

class CartPage {

  async continueToPayment() {
    const continueButton = await $(`-ios predicate string: name == "Continue to payment"`);
    await continueButton.waitForExist({ timeout: 5000 });
    await continueButton.click();
  }
}

export default new CartPage();
