# Password Generator
## Bootcamp: Module 5 Challenge
The project features a user-friendly password generator that enables users to create secure passwords. 

It offers flexibility in determining password length, allowing users to decide how long their password should be. The tool also provides several options for password complexity, including the use of special characters like symbols and punctuation, numeric characters for numerical strength, and a mix of both lowercase and uppercase letters for added security. 

This range of options ensures that the generated passwords not only meet various security requirements but also cater to the specific needs and preferences of users. The tool's intuitive design and customizable features make it an effective solution for anyone looking to strengthen their online security with personalized, robust passwords.

## Table of Contents (Optional)
- [Installation](#installation)
- [Page](#page)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
N/A

## Page
https://adriannaderkacz.github.io/password-generator/

[Add images here]

## Usage
Using this password generator is straightforward. Here's how you can generate a custom password:

1. Initiate the Password Generation: Click the 'Generate Password' button on the website. This button is linked to the writePassword function in the script, which starts the password generation process.

2. Specify Password Length:
- After clicking the button, a prompt will appear asking, "How many characters would you like your password to contain?"
- Enter the desired length for your password. Note that the password must be at least 10 characters and no more than 50 characters long. If your input doesn't meet these criteria, you will receive a corresponding alert.

3. Choose Password Criteria:
- Next, you will be presented with a series of confirmations to include specific character types in your password. These types include:
  - Special Characters (e.g., @, #, $)
  - Numeric Characters (e.g., 1, 2, 3)
  - Lowercase Characters (e.g., a, b, c)
  - Uppercase Characters (e.g., A, B, C)
- For each character type, a popup will ask if you want to include it. Click 'OK' for yes or 'Cancel' for no.

4. Password Generation Logic:
- Based on your choices, the script combines the selected character arrays (special characters, numeric characters, etc.) into a pool of characters to use for the password.
- If no character types are selected, you will receive an alert to choose at least one criteria.

5. Random Selection and Display:
- The script then randomly selects characters from the combined pool until it reaches the specified password length.
- This generated password is displayed in the designated area on the webpage (usually a text field or similar element).

6. Final Output: The final password is now visible on the webpage, ready to be copied and used as needed.

This tool ensures that you can generate a password that is not only secure but also customized to your specific requirements, whether it's for a website, application, or personal use.

## Credits
I utilized the resources from the following websites to successfully complete this challenge:
- https://www.w3schools.com/
- https://javascript.info/

The background gradient was sourced from this website:
- https://webgradients.com/

## License
MIT License

Copyright (c) [2024] [AdriannaDerkacz]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.