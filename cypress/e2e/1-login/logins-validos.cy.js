/// <reference types="cypress" />

context('Testes de logins válidos', () => {
    
    //Pré-requisito
    // O que ou onde e eu devo ter/estar para iniciar os testes.

    beforeEach(() => {
        cy.visit('/')
    });

    it('Logar como um Treinador Qualquer', () => {
        cy.get('[data-cy="input-username"]').type('Angelo');
        cy.get('[data-cy="input-password"]').type('123456');
        cy.get('[data-cy="input-pokeinit"]').type('Pikachu');
        cy.get('[data-cy="botao-login"]').click();
        // cy.get('#mensagem-feedback').should('have.text','Login de Ash TREINADOR QUALQUER efetuado com sucesso!')
        cy.get('#mensagem-feedback').should('contain','QUALQUER')
    });


    //Tenho que usar um Treinador da lista e fora dela
    it('Logar como um Treinador Clássico', () => {
        cy.get('#list-users')
        .find('li')
        .first()
        .invoke('text')
        .then((text) => text.trim())
        .as('treinador');

       cy.get('@treinador').then((treinador) => {
        cy.get('[data-cy="input-username"]').type(treinador);
        cy.log(`O Treinador coletado foi: ${treinador}`);
       });

    });

        //Tenho que usar um Treinador da lista e fora dela
    it('Logar como um Treinador Clássico co JS', () => {
        let treinador;

        cy.get('#list-users')
        .find('li')
        .first()
        .invoke('text')
        .then((text) => {
            treinador = text.trim();
            cy.log(`Variável treinador: ${treinador}`);
        });

    });

});