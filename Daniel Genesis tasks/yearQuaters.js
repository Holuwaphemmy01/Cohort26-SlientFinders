const month_in_year = {"jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"};
let count = 0;
let month = 3;
for (count = 0; count <= month_in_year.length; count++){
if (month <= 4 && count == (month - 1)) {
console.log("month " + month + " " + month_in_year[count] + " is part of the first quater");
}
if (month <= 8 && month > 4  && count == (month - 1)) {
console.log("month " + month + " " + month_in_year[count] + " is part of the second quater");
}
if (month <= 12 && month > 8  && count == (month - 1)) {
console.log
("month " + month + " " + month_in_year[count] + " is part of the third quater");
}
}
}

}
