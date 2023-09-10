# Setup Node
Download Node.js and install it
Configure the NODE_HOME in the environment variables as below:
   • In the windows search bar, type and open ‘Edit system environment variables’
   • In the System Properties dialog box, click on Environment variables
   • In the System Variables, make sure to add the nodejs path (NODE_HOME = C:\Program Files\nodejs)

# Fork this repo
git clone https://github.com/

# Setup Visual Studio Code
Download and install Visual Studio Code
In Visual Studio Code > select File > Open Folder > select the downloaded folder from github
Open the terminal in Visual Studio Code and type 'npm install cypress' to install cypress
Next, type ‘npx cypress open’ to open the test runner
Cypress dialog box with ‘E2E Testing’ and ‘Component Testing’ options should be displayed
Click on ‘E2E Testing’ option > select the browser and click on ‘Start E2E testing’
Select the .feature spec in the Test runner to execute the Cypress test

![image](https://github.com/karthick2637/karthick-test-exercise/assets/84224463/c687db74-7ac1-410e-a1b2-0ee54ba24e86)
