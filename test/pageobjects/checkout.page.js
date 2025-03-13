import { $ } from '@wdio/globals';

class CheckoutPage {

  async completeCheckout() {
    const checkoutButton = await $(`-ios predicate string: name == "Checkout"`);
    await checkoutButton.waitForExist({ timeout: 5000 });
    await checkoutButton.click();
  }
}

export default new CheckoutPage();
