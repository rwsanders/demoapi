# Demo API
**Challenge Description** 
*You will receive a string as input, potentially a mixture of upper and lower case, numbers, special 
characters etc. The task is to determine if the string contains at least one of each letter of the alphabet. Return true if all are 
found and false if not. Write it as a RESTful web service (no authentication necessary) in any language/framework you choose and 
document the service. Please bring your laptop on the day of your interview to present your information.*
## Approach
The challenge is to design and develop a RESTful web service that performs a safe and idempotent test against a supplied sting of 
text.  Therefore an HTTP **GET** request is chosen to be the ideal method of transacting the the parameter to the service.  
**Node.js** is chosen as the language due to the ease and applicability as a solution to the challenge and **Express** will be an 
ideal web application framework due to it's simple, lightweight, and reliable architecture.
## Running the software
The software can be run simply by cloning the repository then running the following console or shell commands from the application 
root directory:

    npm install
 This may require root permissions so try executing with `sudo` if an error occurs.
 
    npm start
  
## API Documentation
Technical API documentation can be found through a web browser after running the application by pointing to:

    http://<HOSTIPADDRESS:PORT>/api/help
> For example: http://192.168.1.101:8080/api/help
Default port is `8080`. This can be explicitly set in the `config.js` file or by adding an environment variable `PORT`.

## Online Demo
An online demo is hosted using Microsoft Azure:  https://rws-demo-api.azurewebsites.net/api/help/
A JsFiddle is available at https://jsfiddle.net/r4ng9dhL/
