#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 20000;
let userId = 5353;

console.log(chalk.red("WELCOME TO ATM MACHINE"));



let atm = await inquirer.prompt([
  {
    name: "q1",
    type: "number",
    message: "Enter Your ID",
  },
]);

if (atm.q1 === userId) {
  console.log("LOG IN!!!! Sucessfull");

}

let operation = await inquirer.prompt([
    {
      name: "q2",
      type: "list",
      message: "Select an a option",
      choices: ["Withdraw", "Check balance", "Fast cash"],
    },
  ]);



  if (operation.q2 === "Withdraw") {
    let operation = await inquirer.prompt([
      {
        name: "q2",
        type: "number",
        message: "Enter your amount?",
      },
    ])


    if (operation.q2 > myBalance) {
      console.log("Insufficent balance");
    } else {
      myBalance -= operation.q2;
      console.log(`"your remaining balance is ${myBalance}"`);
    };
}
  


  
  if (operation.q2 === "Check balance") {
    console.log(`your acount balance is ${myBalance}`)};
  

  
   if (operation.q2 === "Fast cash") {
    let operation = await inquirer.prompt([
      {
        name: "q2",
        type: "list",
        message: "Enter Your amount",
        choices: ["1000", "5000", "10000"],
      },
    ]);

     console.log(".....Thankyou for using fast cash.....")
}   

