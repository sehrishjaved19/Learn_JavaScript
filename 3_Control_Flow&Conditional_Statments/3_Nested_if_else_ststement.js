//Nested if else statement
const temperature = 30;
const isRaining = true;
if(temperature > 30)
{
    if(isRaining)
    {
        console.log("It's hot and Raining. Stay inside.");
    }
    else{
        console.log("It's hot, but not raining. Enjoy the sunshine.");
    }
}
else
{
    if(isRaining)
    {
        console.log("It's not so hot, but it's raining. Take an umbrella.");
    }
    else{
        console.log("It's not hot, and it's not raining. Have a nice day!");
    }
}