MultiPly(7, 8);
function MultiPly(a, b) {
  console.log(a * b);
}

CheckAge(31);

function CheckAge(age) {
  if (age >= 18) {
    console.log("შენ ხარ სრულწლოვანი");
  } else {
    console.log("შენ არ ხარ სრულწლოვანი");
  }
}

IsEvenOrOdd(6);

function IsEvenOrOdd(num) {
  if (num % 2 === 0) {
    console.log("რიცხვი ლუწია");
  } else {
    console.log("რიცხვი კენტია");
  }
}

GetDayName(1);
function GetDayName(dayNumber) {
  switch (true) {
    case dayNumber === 1:
      console.log("ორშაბათი");
      break;
    case dayNumber === 2:
      console.log("სამშაბათი");
      break;
    case dayNumber === 3:
      console.log("ოთხშაბათი");
      break;
    case dayNumber === 4:
      console.log("ხუთშაბათი");
      break;
    case dayNumber === 5:
      console.log("პარასკევი");
      break;
    case dayNumber === 6:
      console.log("შაბათი");
      break;
    case dayNumber === 7:
      console.log("კვირა");
      break;

    default:
      console.log("არასწორი რიცხვი");
      break;
  }
}

CompareNumbers(9, 5);

function CompareNumbers(a, b) {
  switch (true) {
    case a > b:
      console.log("პირველი რიცხვი უფრო დიდია");
      break;
    case a < b:
      console.log("მეორე რიცხვი უფრო დიდია");
      break;
    default:
      console.log("ორივე რიცხვი ტოლია");
      break;
  }
}

Calculator(5, 7, "/");

function Calculator(a, b, op) {
  switch (true) {
    case op === "+":
      console.log(a + b);
      break;
    case op === "-":
      console.log(a - b);
      break;
    case op === "*":
      console.log(a * b);
      break;
    case op === "/":
      console.log(a / b);
      break;
    default:
      break;
  }
}

celsiusToFahrenheit(5);

function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  console.log(fahrenheit);
}

FindMax(3, 8, 12);

function FindMax(a, b, c) {
  console.log(Math.max(a, b, c));
}

checkSign(-6);

function checkSign(num) {
  switch (true) {
    case num > 0:
      console.log("რიცხვი დადებითია");
      break;
    case num < 0:
      console.log("რიცხვი უარყოფითია");
      break;
    default:
      console.log("რიცხვი = 0");
      break;
  }
}

getMonthName(11);

function getMonthName(monthNumber) {
  switch (true) {
    case monthNumber === 1:
      console.log("იანვარი");
      break;
    case monthNumber === 2:
      console.log("თებერვალი");
      break;
    case monthNumber === 3:
      console.log("მარტი");
      break;
    case monthNumber === 4:
      console.log("აპრილი");
      break;
    case monthNumber === 5:
      console.log("მაისი");
      break;
    case monthNumber === 6:
      console.log("ივნისი");
      break;
    case monthNumber === 7:
      console.log("ივლისი");
      break;
    case monthNumber === 8:
      console.log("აგვისტო");
      break;
    case monthNumber === 9:
      console.log("სექტემბერი");
      break;
    case monthNumber === 10:
      console.log("ოქტომბერი");
      break;
    case monthNumber === 11:
      console.log("ნოეემბერი");
      break;
    case monthNumber === 12:
      console.log("დეკემბერი");
      break;
    default:
      console.log("არასწორი რიცხვი");
      break;
  }
}

multiplyIfGreaterThanFive(9);

function multiplyIfGreaterThanFive(num) {
  if (num >= 0) {
    console.log(num * 10);
  } else {
    console.log("რიცხვი მცირეა");
  }
}

getSeason(3);

function getSeason(seasonNumber) {
  switch (true) {
    case seasonNumber === 1:
      console.log("გაზაფხული");
      break;
    case seasonNumber === 2:
      console.log("ზაფხული");
      break;
    case seasonNumber === 3:
      console.log("შემოდგომა");
      break;
    case seasonNumber === 4:
      console.log("ზამთარი");
      break;
    default:
      console.log("არასწორი რიცხვი");
      break;
  }
}
checkPrice(120);
function checkPrice(price) {
  if (price >= 100) {
    console.log("ფასი მაღალია ");
  } else {
    console.log("ფასი ნორმალურია");
  }
}
positiveSum(6, 7);
function positiveSum(a, b) {
  if (a > 0 && b > 0) {
    console.log(a + b);
  } else {
    console.log("მინიმუმ ერთი რიცხვი უარყოფითია");
  }
}
