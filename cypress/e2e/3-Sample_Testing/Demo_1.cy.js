
describe("Demo testing",()=>{
    it("To launch the url",()=>{
       cy.visit('https://demoqa.com/')
    })

    it("To check the forms",()=>{
       cy.wait(1000)
       cy.contains('Forms').click() 
       cy.contains('Elements').click()
       cy.get('[href="/text-box"]').click()
    })

    it("To test text box",()=>{
       cy.wait(1000)
       cy.get('#userName').type('Vignesh G')
       cy.get('#userEmail').type('vigneshbalaji2643@gmail.com')
       cy.get('[placeholder="Current Address"]').type('No: 2/191, NKS Nagar,\nKarapakkam (omr),\nChennai-97')
       cy.get('#permanentAddress').type('No: 2/191, NKS Nagar,{enter}Karapakkam (omr),{enter}Chennai-97')
       cy.get('#submit').click()
    })

    it("To test check box",()=>{
       cy.wait(1000)
       cy.get('a[href="/checkbox"]').click()
       cy.get('.rc-tree-switcher').click()
       cy.get('.rc-tree-switcher').eq(1).click()
       cy.get('[role="checkbox"][aria-label="Select Home"]').check()
    })

})






