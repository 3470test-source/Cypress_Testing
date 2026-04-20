
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
      cy.wait(1000)
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

   it("To test Forms filed",()=>{
     cy.contains('Forms').click()

     //practice form
     cy.get('a[href="/automation-practice-form"]').click()

     //Student Registration Form
     cy.get('[placeholder="First Name"]').type('Vignesh')
     cy.get('[placeholder="Last Name"]').type('balaji')
     cy.get('[placeholder="name@example.com"]').type('vigneshbalaji2643@gmail.com')
     
     //Gender
     cy.get('[value="Male"]').click()
     cy.get('[value="Female"]').click()
     cy.get('[value="Other"]').click()

     cy.get('[placeholder="Mobile Number"]').type('6379103189')

     //Date picker
     cy.get('#dateOfBirthInput').click()
     //Month
     cy.get('[class="react-datepicker__month-select"]').select('November')
     //Year
     cy.get('[class="react-datepicker__year-select"]').select('2026')
     //Day
     cy.get('[role="gridcell"]').contains('20').click()
     //cy.contains('[role="gridcell"]', '18').click()

     //cy.get('#subjectsInput').type('Computer')
     //cy.contains('Computer Science').click()
     //cy.get('#subjectsInput').type('ch')
     //cy.contains('Chemistry').click()

   const subjects = ['Computer Science', 'Chemistry','Accounting']

     subjects.forEach((subject) => {
      cy.get('#subjectsInput').type(subject.substring(0, 2))
      cy.contains(subject).click()
   })

     //Hobbies Check box
     cy.wait(1000)
     cy.get('#hobbies-checkbox-1').check()
     cy.get('#hobbies-checkbox-2').check()
     cy.get('#hobbies-checkbox-3').check()

     //Uncheck box
     cy.wait(1000)
     cy.get('#hobbies-checkbox-1').uncheck()
     cy.get('#hobbies-checkbox-2').uncheck()
     cy.get('#hobbies-checkbox-3').uncheck()

     cy.wait(1000)
     cy.get('#hobbies-checkbox-1').check()

     //upload the picture
     cy.get('#uploadPicture').selectFile('cypress/fixtures/100 percentage score.jpeg')

     //Address
     cy.get('[placeholder="Current Address"]').type('No: 2/191 NKS Nagar, {enter}Anna Street Karapakkam (OMR), {enter}Chennai-600097.')

     //State and City
     cy.contains('Select State').click({force:true})
     cy.contains('NCR').click()

     cy.get('#city').click()
     cy.contains('Delhi').click()

     //submit button
     cy.get('#submit').click()

     cy.get('#example-modal-sizes-title-lg').should('be.visible').and('contain','Thanks for submitting the form')

     cy.wait(1000)
     cy.get('body').type('{esc}')
   })

   it("To test alerts , Frame & Windows",()=>{
      cy.contains('Alerts, Frame & Windows').click()

      //browser windows
      cy.get('[href="/browser-windows"]').click()
 
      //Alerts
      cy.get('[href="/alerts"]').click()

      //On button click, prompt box will appear
      cy.window().then((win) => {
       cy.stub(win, 'prompt').returns('Vignesh')
      })

      cy.get('#promtButton').click()
   })










})






