import { expect } from '@wdio/globals';
import homePage from '../pageobjects/home.page.js';
import browsePage from '../pageobjects/browse.page.js';
import productPage from '../pageobjects/product.page.js';
import cartPage from '../pageobjects/cart.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';

describe('Checkout process', () => {
  it('should complete the checkout process', async () => {
    // Acessar a aba de busca e pesquisar produto
    await homePage.search()
    await browsePage.searchProduct('Camiseta EBAC');
    
    // Selecionar o primeiro produto da lista
    await browsePage.selectProduct();
    
    // Verificar se o título do produto está correto
    const productTitle = await productPage.getProductTitle('Camiseta EBAC');
    expect(await productTitle.isDisplayed()).toBeTruthy();
    
    // Adicionar ao carrinho
    await productPage.addToCart();
    
    // Ir para pagamento
    await cartPage.continueToPayment();
    
    // Finalizar checkout
    await checkoutPage.completeCheckout();
  });
});
