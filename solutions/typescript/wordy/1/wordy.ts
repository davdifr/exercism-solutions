export const operations = ['plus', 'minus', 'multiplied by', 'divided by'];
export const whatIs = 'What is';

export const answer = (question: string): number => {
    if (!question.startsWith(whatIs) || !question.endsWith('?')) {
        throw new Error('Unknown operation');
    }

    const questionParts = question.slice(whatIs.length, -1).split(' '); // Remove 'What is ' and '?'
    const normalizedParts = questionParts
        .map((el, i, arr) => {
            if (el === 'multiplied' || el === 'divided') {
                arr.splice(i + 1, 1);
                return (el += ' by');
            } else return el;
        })
        .filter((x) => x); // Clear empty element left from splice

    // Case 'What is 1 plus?' and 'What is 52 cubed?'
    const lastElement = normalizedParts.at(-1);
    if (lastElement && isNaN(Number(lastElement))) {
        if (operations.includes(lastElement)) throw new Error('Syntax error');
        else throw new Error('Unknown operation');
    }

    const numbers: number[] = [];
    const operationsList: string[] = [];

    for (let i = 0; i < normalizedParts.length; i++) {
        if (i % 2 == 0) {
            // Odd elements should be numbers.
            const el = Number(normalizedParts[i]);

            if (!isNaN(el)) {
                numbers.push(el);
            } else {
                throw new Error('Syntax error');
            }
        } else {
            if (operations.includes(normalizedParts[i]))
                operationsList.push(normalizedParts[i]);
            else throw new Error('Syntax error');
        }
    }

    // Case 'What is?'
    if (numbers.length === 0) throw new Error('Syntax error');

    if (operationsList.length === 0) return numbers[0]; // Case 'What is X?'

    let result = 0;

    operationsList.unshift(''); // operators and numbers has the same lenght

    for (let i = 0; i < numbers.length; i++) {
        if (operationsList[i] == '') result = numbers[i];

        switch (operationsList[i]) {
            case operations[0]:
                result += numbers[i];
                break;
            case operations[1]:
                result -= numbers[i];
                break;
            case operations[2]:
                result *= numbers[i];
                break;
            case operations[3]:
                result /= numbers[i];
                break;
        }
    }

    return result;
};
