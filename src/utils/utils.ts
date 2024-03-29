export const getNums = (str: string) => {
    let newStr: string = '';

    for (const strItem of str) {
        if (!isNaN(Number(strItem))) {
            newStr += Number(strItem);
        }
    }

    return Number(newStr);
}