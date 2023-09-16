<!-- Add at least 3 Project features -->

• User can select any course of their choice.

• The same course cannot be selected more than once, if anyone tries to select it more than once, it will be alerted.

• Any course can be selected up to a maximum of 20 credit hours, if anyone tries to select more than that, it will be alerted.

• A list of course names, total course credits and total price will be displayed for the selected courses.

<!-- Discuss how you managed the state in your assignment project. -->

A total of 5 states are used in the entire project. Out of them 4 are used in App.jsx and remaining 1 is used in Cards.jsx. How these are managed is briefly discussed-

The 4 states used in App.jsx are-

• selectedCourse: This state is used to keep track of the courses that the user has selected for registration. It is an array that holds objects representing selected courses. It is used to display the selected courses in the shopping cart and check if a course has already been selected to prevent duplicates.

• totalCredit: This state keeps track of the total credit hours of the selected courses. It is updated when a course is selected or deselected, and it helps ensure that the user does not exceed a maximum credit limit.

• remaining: This state represents the remaining available credit hours that a user can select. It is initially set to 20 and is decremented as courses are selected. If it reaches 0, a warning message is displayed.

• totalPrice: This state is used to keep track of the total price of the selected courses. It is updated whenever a course is selected or deselected and is displayed in the shopping cart.

Remaining 1 states used in App.jsx are-

• card: When the component is initially rendered, the card state is set to an empty array []. Inside the useEffect hook, I fetch data from "data.json" and update the card state using setCard(data). This triggers a re-render of the component. The UI is rendered based on the updated card state, and the Card components are generated based on the data retrieved from "data.json".
