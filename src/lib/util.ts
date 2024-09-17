export const getFormattedDate = (date: string): string => {
    const newDate = new Date(date);

    return newDate.toLocaleString();
};

