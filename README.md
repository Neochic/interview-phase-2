# User Generator

## Interview

This Interview Challenge consists of 3 parts. First 2 part will take 45 minutes each, then one final evaluation part,
which should be around 15 minutes. During the first part, we expect you to implement the required features alone.
In the second part, we are going to implement an extension feature via
[Pair-Programming](https://en.wikipedia.org/wiki/Pair_programming#:~:text=Pair%20programming%20is%20a%20software,two%20programmers%20switch%20roles%20frequently.)
technique. In the final part we can asses the overall implementation together and give each other feedback.

## Setup
As part of this challenge you are given a working [Angular](https://github.com/angular) Project which includes
a sample Page, a sample Component and sample tests which are written via
[Playwright](https://github.com/microsoft/playwright).

To be able to set up the Application locally,
you need to have [Node](https://github.com/nodejs/node) and [NPM](https://github.com/npm).

To start the application you should install necessary dependencies first:

```
npm install
```

NPM would create a `node_modules` directory which should be containing installed dependencies. Finally you can start
the application by running:

```
npm start
```

Then you can access the sample page by opening a browser via following URL;

http://localhost:4200/ (Note that, if the project is open in Gitpod, the URL might differ).

You can run playwright tests with the following command:

```
npm run test
```

## Challenge

#### First Part
During the first part, following requirements need to be implemented. You have 45 minutes.
(Note that, requirements are written in an Agile User Story fashion).

```
Story: 

As an end user of User Generator application;

I want to be able to enter a number up to 10 to an input field,

So that, a user table is being displayed that contains same number of users as I entered to the input field.


Acceptance Criteria:

1. I can only enter numbers up to 10 to the input field.
2. After entering the number, table is only being displayed (or refreshed) if I click to the `Generate` button.
3. Table should contain columns as `First Name` and `Age`.
4. Every time I click to the `Generate` button, I expect to see new names and ages.
```

#### Second Part
During this part, you need to implement an extension feature. But we will join you while programming and pair together.
Extension feature is described below:

```
Story: 

As an end user of User Generator application;

I want to be able to enter a number up to 200 to an input field,

So that a user table is being displayed that contains same number of users as I entered to the input field and
users are displayed in Paginated fashion.


Acceptance Criteria:

1. I can only enter numbers up to 200 to the input field.
2. After entering the number, table is only being displayed (or refreshed) if I click to the `Generate` button.
3. Table should contain columns as `First Name` and `Age`.
4. Every time I click to the `Generate` button, I expect to see new names and ages.
5. Table should contain multiple pages and it should not display all users in single page.
6. I should be able to navigate to different pages via buttons that displayed below the table.
7. If I click to the `Generate` button after displaying a different page, it should start from the first page for new
generated users.
```
