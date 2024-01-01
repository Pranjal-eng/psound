import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - P-Sound`;
        } else {
            document.title = 'P-Sound | The Perfect Audio Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
