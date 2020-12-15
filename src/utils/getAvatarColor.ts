export const getAvatarColor = (letter: string) => {
    // @ts-ignore
    const charCode = letter.charCodeAt();
    if (charCode >= 65 && charCode <= 73) {
        return {
            background: '#F5D6D9',
            color: '#F38181',
        };
    }
    if (charCode >= 74 && charCode <= 80) {
        return {
            background: '#F8ECD5',
            color: '#F1A32F',
        };
    }
    if (charCode >= 81 && charCode <= 90) {
        return {
            background: '#DAD5F8',
            color: '#816CFF',
        };
    }
    return {
        background: '#E9F5FF',
        color: '#2A86FF',
    };
};
