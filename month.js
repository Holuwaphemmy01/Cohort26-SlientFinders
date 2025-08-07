function getQuarter(month) {
    if (!Number.isInteger(month) || month < 1 || month > 12) {
        throw new Error("Month must be an integer between 1 and 12");
    }
    return Math.ceil(month / 3);
}