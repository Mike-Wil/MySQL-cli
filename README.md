# MySQL-cli
A node-based 'online store' interacting with a seeded sql database of products.

# Description: 
This allows you to interact with a database using mysql. As the customer you can choose an item and how many you would like to buy.

# Author:
Michael Wilson - https://github.com/Mike-Wil

# Dependencies:
inquirer, mysql

## Work Flow
1. Run `node bamazonCustomer.js`

2. Enter the ID of the item you wish to purchase:

![enter-id](/screenshots/initialState.PNG?raw=true "Choose Item.")

3. Enter the quantity you desire:

![enter-quantity](/screenshots/quantityPrompt.PNG?raw=true "Choose Quantity.")

4. If there is sufficient remaining stock, the transaction will process and total price will return:

![success](/screenshots/successState.PNG?raw=true "Stock updated and cart cost displayed.")

If there is insufficient remaining stock, the transaction will not process and you will be alerted:

![fail](/screenshots/failState.PNG?raw=true "No change in table and remaining stock displayed.")