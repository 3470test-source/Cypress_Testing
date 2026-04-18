
describe("Demo testing",()=>{

   beforeEach(() => {
     Cypress.on('uncaught:exception', (err) => {
      return false
     })
   })

   it("To launch the url",()=>{
      cy.visit('https://demoqa.com/',{failOnStatusCode: false})
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
      cy.get('[role="checkbox"][aria-label="Select Home"]').click()
      cy.wait(1000)
      cy.get('.rc-tree-switcher').eq(1).click()
      cy.get('.rc-tree-checkbox-checked').eq(0).click()
      cy.get('.rc-tree-switcher').eq(0).click()
   })

   it("To test radio button",()=>{
      cy.get('a[href="/radio-button"]').click()
      cy.get('#yesRadio').click()
      cy.wait(1000)
      cy.get('#impressiveRadio').click()
   })

   it("To test web tables",()=>{
      cy.get('a[href="/webtables"]').click()
      cy.get('#addNewRecordButton').click()
      cy.wait(1000)
      cy.get('.btn-close').click()

      //Registration Form
      cy.get('#addNewRecordButton').click()

      //First Name
      cy.get('[placeholder="First Name"]').type('Vignesh')

      //Last Name 
      cy.get('[placeholder="Last Name"]').type('Ganesan')

      //Email
      cy.get('#userEmail').type('vigneshbalaji7158@gmail.com')

      //Age
      cy.get('[placeholder="Age"]').type('25')

      //salary
      cy.get('[placeholder="Salary"]').type('18000')

      //Department
      cy.get('[placeholder="Department"]').type('IT')

      //Submit
      cy.get('#submit').click()

      //search bar
      cy.get('#searchBox').type('vign').wait(1000).clear()

      //show btn 
      cy.get('.col-auto .form-control').select('20')

      //Edit btn
      cy.wait(1000)  
      cy.get('.action-buttons [title="Edit"]').eq(3).click()

      cy.wait(1000)
      cy.get('.btn-close').click()

      //delete
      cy.get('.action-buttons [title="Delete"]').eq(3).click()
   })

   it("To test buttons",()=>{
      cy.get('[href="/buttons"]').click()

      //double click 
      cy.get('#doubleClickBtn').dblclick()

      //Right clik
      cy.get('#rightClickBtn').rightclick()

      //click
      cy.get('.btn-primary').eq(2).click()
   })

   it("To test link",()=>{
      cy.get('[href="/links"]').click()
      cy.wait(1000)

      //Following links will open new tab
      cy.get('#simpleLink')
        .invoke('removeAttr', 'target')
        .click()

      //go to preview page 
      cy.wait(1000)
      cy.go(-1)  

      //other Following links will open new tab
      cy.wait(1000)
      cy.get('#dynamicLink')
        .invoke('removeAttr', 'target')
        .click()

      //go to preview page 
      cy.wait(1000)
      cy.go(-1)    

      //Following links will send an api call
      //created
      cy.get('#created').click()
      cy.get('#linkResponse').should('be.visible').and('contain', '201')

      //No content
      cy.get('#no-content').click()
      cy.get('#linkResponse').should('be.visible').and('contain', '204')

      //Moved
      cy.get('#moved').click()
      cy.get('#linkResponse').should('be.visible').and('contain', '301')

      //Bad Request
      cy.get('#bad-request').click()
      cy.get('#linkResponse').should('be.visible').and('contain', '400')

      //Unauthorized
      cy.get('#unauthorized').click()
      cy.get('#linkResponse').should('be.visible').and('contain', '401')

      //Forbidden
      cy.get('#forbidden').click()
      cy.get('#linkResponse').should('be.visible').and('contain', '403')

      //Not Found
      cy.get('#invalid-url').click()
      cy.get('#linkResponse').should('be.visible').and('contain', '404')
   })

   it.skip('To test Broken Links - Images',()=>{
      // cy.get('[href="/broken"]').click()

      //Valid Links
      cy.wait(1000)
      cy.get('a[href="http://demoqa.com"]').click({force:true})
   })

   it("To test upload and download",()=>{
     cy.get('[href="/upload-download"]').click()

     //upload 
     cy.get('#uploadFile').selectFile('cypress/fixtures/CCS_important -2.pdf')

     //download
     cy.get('#downloadButton').click()

     cy.contains('Elements').click()
   })

  







 







})






