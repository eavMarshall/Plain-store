
export const getCallerFilePath = (myName) => {
    const stack = new Error().stack.split('\n');
    const myIndexInStack = stack?.map((v, i) => v?.includes(myName))?.indexOf(true);
    const callerName = stack[myIndexInStack + 1]
        ?.split(' ')
        ?.filter(item => item.includes('.js'))[0];

    if (!callerName) {
        throw new Error('Could not find caller name');
    }

    return callerName;
};