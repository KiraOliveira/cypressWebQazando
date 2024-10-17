/// <reference types="Cypress" />

import loginElements from '../elements/loginElements'
import login from '../../fixtures/login.json'
const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }
    // Clica no botão que acessa a página de login do site
    clicarBotaoPaginaLogin() {
        cy.get(loginElements.botaoAcessarLogin()).click()
    }
    // Tela de Login
    telaLogin() {
        cy.get(loginElements.modalLogin()).should('exist').and('be.visible')
        cy.get(loginElements.labelLogin()).should('exist').and('be.visible').and('have.text', 'Login')
    }
    // Realizando Login com Sucesso
    realizacaoLoginSucesso() {
        // Email
        cy.get(loginElements.blocoEmail()).should('exist').and('be.visible')
        cy.get(loginElements.labelEmail()).should('exist').and('be.visible').and('contain.text', 'E-mail')
        cy.get(loginElements.campoEmail()).should('exist').and('be.visible').type(login.email.emailSucess)

        // Senha
        cy.get(loginElements.blocoSenha()).should('exist').and('be.visible')
        cy.get(loginElements.labelSenha()).should('exist').and('be.visible').and('contain.text', 'Senha')
        cy.get(loginElements.campoSenha()).should('exist').and('be.visible').type(login.senha.senhaSucess)

        // Marcar a opção de "Lembrar de mim"
        cy.get(loginElements.remember()).should('exist').and('be.visible')
        cy.get(loginElements.checkRemember()).should('exist').and('be.visible').check()
        cy.get(loginElements.remember()).should('exist').and('be.visible').and('contain.text', 'Lembrar de mim')

        // Botão de Login
        cy.get(loginElements.botaoLogin()).should('exist').and('be.visible').and('contain.text', 'login').click()

        // Validando Mensagem de Sucesso
        cy.get(loginElements.boxSucess()).should('exist').and('be.visible')
        cy.get(loginElements.msgSuces()).should('exist').and('be.visible').and('have.text', 'Login realizado')
        cy.screenshot('loginComSucess')
        cy.get(loginElements.botaoConfirmSucess()).should('exist').and('be.visible').and('contain.text', 'OK').click()
    }
    // Realizando Login com Email Inválido
    realizacaoLoginEmailInvalido() {
        // Email
        cy.get(loginElements.blocoEmail()).should('exist').and('be.visible')
        cy.get(loginElements.labelEmail()).should('exist').and('be.visible').and('contain.text', 'E-mail')
        cy.get(loginElements.campoEmail()).should('exist').and('be.visible').type(login.email.emailError)
        
        // Senha
        cy.get(loginElements.blocoSenha()).should('exist').and('be.visible')
        cy.get(loginElements.labelSenha()).should('exist').and('be.visible').and('contain.text', 'Senha')
        cy.get(loginElements.campoSenha()).should('exist').and('be.visible').type(login.senha.senhaSucess)

        // Botão de Login
        cy.get(loginElements.botaoLogin()).should('exist').and('be.visible').and('contain.text', 'login').click()

        // Mensagem Email Inválido
        cy.get(loginElements.emailInvalido()).should('exist').and('be.visible').and('contain.text', login.mensagens.emailInvalidoVazio)

        cy.screenshot('loginComEmailInválido')
    }
    // Realizando Login com Senha Inválida
    realizacaoLoginSenhaInvalida() {
        // Email
        cy.get(loginElements.blocoEmail()).should('exist').and('be.visible')
        cy.get(loginElements.labelEmail()).should('exist').and('be.visible').and('contain.text', 'E-mail')
        cy.get(loginElements.campoEmail()).should('exist').and('be.visible').type(login.email.emailSucess)
        
        // Senha
        cy.get(loginElements.blocoSenha()).should('exist').and('be.visible')
        cy.get(loginElements.labelSenha()).should('exist').and('be.visible').and('contain.text', 'Senha')
        cy.get(loginElements.campoSenha()).should('exist').and('be.visible').type(login.senha.senhaError)

        // Botão de Login
        cy.get(loginElements.botaoLogin()).should('exist').and('be.visible').and('contain.text', 'login').click()

        // Mensagem Senha Inválida
        cy.get(loginElements.senhaInvalida()).should('exist').and('be.visible').and('contain.text', login.mensagens.senhaInvalidaVazia)

        cy.screenshot('loginComSenhaInválida')
    }
    // Realizando Login com Email Vazio
    realizacaoLoginEmailVazio() {
        // Email
        cy.get(loginElements.blocoEmail()).should('exist').and('be.visible')
        cy.get(loginElements.labelEmail()).should('exist').and('be.visible').and('contain.text', 'E-mail')
                
        // Senha
        cy.get(loginElements.blocoSenha()).should('exist').and('be.visible')
        cy.get(loginElements.labelSenha()).should('exist').and('be.visible').and('contain.text', 'Senha')

        // Botão de Login
        cy.get(loginElements.botaoLogin()).should('exist').and('be.visible').and('contain.text', 'login').click()

        // Mensagem Email Vazio
        cy.get(loginElements.emailInvalido()).should('exist').and('be.visible').and('contain.text', login.mensagens.emailInvalidoVazio)

        cy.screenshot('loginComEmailVazio')
    }
    // Realizando Login com Senha Vazia
    realizacaoLoginSenhaVazia() {
        // Email
        cy.get(loginElements.blocoEmail()).should('exist').and('be.visible')
        cy.get(loginElements.labelEmail()).should('exist').and('be.visible').and('contain.text', 'E-mail')
        cy.get(loginElements.campoEmail()).should('exist').and('be.visible').type(login.email.emailSucess)
        
        // Senha
        cy.get(loginElements.blocoSenha()).should('exist').and('be.visible')
        cy.get(loginElements.labelSenha()).should('exist').and('be.visible').and('contain.text', 'Senha')

        // Botão de Login
        cy.get(loginElements.botaoLogin()).should('exist').and('be.visible').and('contain.text', 'login').click()

        // Mensagem Senha Inválida
        cy.get(loginElements.senhaInvalida()).should('exist').and('be.visible').and('contain.text', login.mensagens.senhaInvalidaVazia)

        cy.screenshot('loginComSenhaVaz')
    }
}

export default new LoginPage();
