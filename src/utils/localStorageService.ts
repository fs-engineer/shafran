const localStorageService = {
    set: (key: string, value: any) => {
        try {
            const serializedState = JSON.stringify(value);

            localStorage.setItem(key, serializedState);
        } catch (error: any) {
            console.log(`Set state error: ${error.message as string}`);
        }
    },
    get: (key: string) => {
        try {
            const serializedState = localStorage.getItem(key);

            return serializedState === null
                ? undefined
                : JSON.parse(serializedState);
        } catch (error: any) {
            console.log(`Get state error: ${error.message}`);
        }
    },
    remove: (key: string) => {
        try {
            localStorage.removeItem(key);
        } catch (error: any) {
            console.log(error.message);
        }
    },
};

export default localStorageService;
