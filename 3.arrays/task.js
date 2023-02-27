function compareArrays(arr1, arr2) {
    const isEqual = arr1.length === arr2.length && arr1.every((number, index) => number === arr2[index]);
    return isEqual;
}

function getUsersNamesInAgeRange(users, gender) {
    if(users.some(user => user.gender === gender)){
    const filterUsers = users.filter(user => user.gender === gender);
    const getAges = filterUsers.map(user => user.age);
    const allAges = getAges.reduce((acc, item) => acc + item, 0);
    const averageAge = allAges / getAges.length
    return averageAge;
}else{
    return 0;
}
}