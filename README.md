<img src="https://img.shields.io/badge/Salesforce-00A1DF"> <img src="https://img.shields.io/badge/LWC-00A1DF"> <img src="https://img.shields.io/badge/Javascript-EFD81D"> <img src="https://img.shields.io/badge/HTML5-E44D26">

<img src="https://login.salesforce.com/img/logo190.png" align="right" width="300">

# Salesforce Quiz - LWC
##### This is a Salesforce Lightning Web Component (LWC) project that implements a simple quiz application. The ultimate goal of the application is to allow users to answer multiple-choice questions and display their results.

### Features
The Quiz application has the following functionalities:

- Display a list of multiple-choice questions.

- Users can select an answer option for each question.

- The "Submit" button is disabled until all questions are answered.

- When the user clicks "Submit," the application checks the selected answers and displays the total number of correct responses.

- The result is displayed in a dynamic style, with green text color if all answers are correct and red if there are incorrect answers.

- Users can reset the answers and start the quiz again by clicking the "Reset" button.

## Components and Application Structure
The application consists of a component called "QuizApp," which includes an HTML structure in the format of a Lightning card. Inside this card, there is a form that displays the questions and answer options.

## Javascript <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/JavaScript.svg" width="17">

### Properties:

-- selected: An object that stores the answers selected by the user.

-- correctAnswer: The number of correct answers.

-- isSubmitted: An indicator of whether the quiz has been submitted.

-- myQuestions: An array of objects representing the questions and answer options.


### Methods:

-- getAllNotSelected(): Returns a boolean value indicating whether all questions have been answered.

-- getIsScore(): Returns a CSS class to style the result based on the number of correct answers.

-- changeHandler(event): Event handler called when an answer option is selected.

-- submitHandler(event): Event handler called when the form is submitted. It checks the selected answers and displays the result.

-- resetHandler(): Resets the quiz by clearing the selected answers and the result.


## Contributing
 1. #### Fork it


2. Create your feature branch 


```
git checkout -b my-new-feature
```

3. Commit your changes
```
git commit -am 'Added some feature'
```

4. Push to the branch
```
git push origin my-new-feature
```


5. Create new Pull Request
