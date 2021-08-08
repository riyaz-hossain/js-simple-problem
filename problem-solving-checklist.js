//1. feet to inch

function feetToInch(feet) {
    let inch = feet / 12;
    return inch;
}

const inch = parseFloat(feetToInch(124).toFixed(3));
console.log('inch :>> ', inch);


//2. centimeter to meter.

function centimeterToMeter(centimeter) {
    let meter = centimeter / 100;
    return meter;
}

const meter = parseFloat(centimeterToMeter(100).toFixed(3));
console.log('meter :>> ', meter);

//3. page requirements 

function pageRequirements(book1, book2, book3) {
    const totalPage = (book1 * 100) + (book2 * 200) + (book3 * 300);
    return totalPage;
}

const numberOfTotalPage = pageRequirements(1, 1, 1);
console.log('numberOfTotalPage :>> ', numberOfTotalPage);

function bestFriend(friend1, friend2, friend3) {
    let longest = '';
    const allFriends = [friend1, friend2, friend3];
    for (let i = 0; i < allFriends.length; i++) {
        const friends = allFriends[i];

        if (friends >longest ) {
            longest = friends;
        }

        console.log('friends :>> ', friends);
    }
    return longest;
}

const largestName = bestFriend('sdf', 'shuvosdfsdf', 'Ismail');

console.log('largest Name :>> ', largestName);