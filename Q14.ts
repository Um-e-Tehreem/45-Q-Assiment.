//Question14:
// Guest list:if you could invite anyone ,living or deceased,to dinner,who would you invite?
// Make a list thats includes at least three people you,d like to invite to dinner.
// Then use your list to print a message to each person,inviting them to dinner.

let Guests:string[]=["Saima","Mehwish","Shazia", "Shaista"];

Guests.forEach(guest => {
    console.log(`Dear ${guest} khala, would you like to join me for dinner?`)
});
