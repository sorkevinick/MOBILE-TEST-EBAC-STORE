import { expect } from '@wdio/globals'
import homePage from '../pageobjects/home.page'
import registerPage from '../pageobjects/register.page'

describe('My Register application', () => {
    it('should register with valid credentials', async () => {
        await homePage.openMenu('profile')  
        await registerPage.register(
            'Kevin', 
            'Fonseca', 
            '11999999999', 
            'kevinfonseca@ebac.com', 
            'Teste@123', 
            'Teste@123'
        )

        // await homePage.openMenu('profile')  // Acessar perfil após cadastro
        // expect(await profilePage.profileName('Fonseca Kevin')).toBeDisplayed()  // Validar nome do perfil
    })
})
