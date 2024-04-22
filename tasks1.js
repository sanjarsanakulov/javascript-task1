// 1
console.log("Task 1");
function threeDigitNumber(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        console.log(0);
    } else {
        let digitNumber = a * 100 + b * 10 + c;
        console.log(digitNumber);
    }
}
threeDigitNumber(5, 7, 3);

// 2
console.log("Task 2")
let num = 5;
switch (num) {
    case 1:
        console.log("Dushanba");
        break;
    case 2:
        console.log("Seshanba");
        break;
    case 3:
        console.log("Chorshanba");
        break;
    case 4:
        console.log("Payshanba");
        break;
    case 5:
        console.log("Juma");
        break;
    case 6:
        console.log("Shanba");
        break;
    case 7:
        console.log("Yakshanba");
        break;
    default:
        console.log("Bu songa to'g'ri keladigan hafta kuni yo'q");
        break;
}

// 3
console.log("Task 3")
let year = 1986;
if (year % 4 === 0) {
    console.log(true);
} else {
    console.log(false);
}

// 4
console.log("Task 4")
function getDigitCount(a) {
    if (a >= 1 && a <= 9) {
        return 1;
    } else if (a >= 10 && a <= 99) {
        return 2;
    } else if (a >= 100 && a <= 999) {
        return 3;
    }
}

console.log(getDigitCount(990))

// 5
console.log("Task 5")
function positive(a, b, c, d) {
    return (a > 0 && b > 0 && c > 0 && d > 0)
}

console.log(positive(3, 5, 74, 35))

// 6
console.log("Task 6")
function sumIndex(a) {
    let sum = 0;
    for (let i = 0; i <= a; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumIndex(5))

// 7
console.log("Task 7")
function isPerfectNumber(a) {
    let sum = 0;
    for (let i = 1; i < a; i++) {
        if (a % i == 0) {
            sum += i;
        }
    }
    return a === sum;
}

console.log(isPerfectNumber(28))

// 8
console.log("Task 8")
function countNumber(n) {
    return n.toString().length
}

console.log(countNumber(8012481));

// 9
console.log("Task 9")
function isPalindromeNumber(n) {
    let str = n.toString();
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) return false;
    }
    return true;
}
console.log(isPalindromeNumber(12321))

// 10
console.log("Task 10")
function sumOfDigits(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}
console.log(sumOfDigits(12345));

// 11
console.log("Task 11")
const array = [2, 4, 6, 8, 10]
const copyArray = [...array]
const revCopyArray = copyArray.reverse()
console.log(revCopyArray)
console.log(array)

// 12
console.log("Task 12")
let n = 4;
const arr = [2, 4, 6, 4, 34, 4, 65, 4, 4, 4, 4, 4, 4, 4]
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
        count += 1;
    }
}
console.log(`Bu massivda ${count} ta ${n} bor.`)

// 13
console.log("Task 13")
function sumPairs(a, arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === a) {
                console.log(arr[i], arr[j])
                return true;
            }
        }
    }
    console.log(a, arr)
    return false;
}
sumPairs(5, [2, 5, 6, 3, 8])

// 14
console.log("Task 14")
let arrSort = [7, 2, 45, 23, 4, 13, 37]
arrSort = arrSort.sort(function (a, b) {
    return a - b
})
console.log(arrSort)

// 15
console.log("Task 15")
function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = -Infinity;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] < largest && secondLargest < arr[i]) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
console.log(findSecondLargest([4, 70, 15, 23, 42]))




