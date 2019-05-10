describe('My First Test', function() {
  context('Querying', function() {
    beforeEach(function() {
      // Open Amazon.com
      cy.visit('https://www.amazon.com')
      cy.log('I run before every test in every spec file!!!!!!')
    })

    it('Search Samsung product in amazon.com', function() {
      // Open Amazon.com
      // Search for a product in amazon
      cy.get('#twotabsearchtextbox').click()
      cy.get('#twotabsearchtextbox').type('samsung')
      cy.get('.nav-search-submit > .nav-input').click()
      cy.wait(1000)

      // Assert the displayed result contains the search
      cy.contains('TracFone Samsung Galaxy J7 Crown 4G LTE Prepaid Smartphone')

      // Assertion using absolute path location
      cy.get('[data-asin="B07GC5QKVQ"] > :nth-child(1) > [data-component-type="s-impression-logger"] > div.rush-component > .s-include-content-margin > .a-spacing-medium > :nth-child(2) > .sg-col-16-of-24 > :nth-child(1) > :nth-child(1) > .sg-col-4-of-12 > .sg-col-inner > :nth-child(1) > .a-size-mini > .a-link-normal > .a-size-medium').should('have.text', 'TracFone Samsung Galaxy J7 Crown 4G LTE Prepaid Smartphone')

      // Assertion to verify the return value length greater than condition
      cy.get('span.a-size-medium.a-color-base.a-text-normal:nth-child(1)').its('length').should('be.gt', 2)

      // Assertion to verify the return value length eauals condition
      //cy.get('span.a-size-medium.a-color-base.a-text-normal:nth-child(1)').should('have.length', 20)

      //get element and assign to a variable using first
      var getResults = cy.get('span[class="a-size-medium a-color-base a-text-normal"]')
      if (getResults.first().should('contain', 'Samsung')) {
        cy.log('Search Result Page loaded successfully.!')
      }

      // get element text by index and print it
      cy.get('a[class="a-link-normal a-text-normal"]').children().eq(1).should('have.text', "TracFone Samsung Galaxy J7 Crown 4G LTE Prepaid Smartphone")
      cy.screenshot()
    })

    // Test Two
    it('Search Bose product in amazon.com', function() {
      // Search for a product in amazon
      cy.get('#twotabsearchtextbox').click()
      cy.get('#twotabsearchtextbox').type('Bose')
      cy.get('.nav-search-submit > .nav-input').click()
      cy.wait(1000)
      cy.screenshot()
      // var itemLength = document.querySelectorAll("span.a-size-medium.a-color-base.a-text-normal:nth-child(1)").getAttribute('textContent')
      // cy.log(itemLength.length)
      // console.write(itemLength)
      // Assert the displayed result contains the search
      cy.contains("Bose QuietComfort 2 ear cushion kit");
      cy.get('a[class="a-link-normal a-text-normal"]').children().eq(0).should('have.text', "Bose QuietComfort 2 ear cushion kit")
    })

  })
})
