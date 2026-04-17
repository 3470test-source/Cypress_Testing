
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

   })

})






