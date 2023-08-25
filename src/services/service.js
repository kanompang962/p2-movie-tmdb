// เก็บข้อมูลลง session storage
export const setStorage = (data) => {
    if (window !== undefined) {
        localStorage.setItem('cart', JSON.stringify(data));
    }
}

// ดึงข้อมูล tokens
export const getStorage = () => {
    if (window !== undefined) {
        if (localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem('cart'));
        } else {
            return null;
        }
    }
}

// ลบข้อมูล
export const removeStorage = () => {
    if (window !== undefined) {
        if (localStorage.getItem('cart')) {
            localStorage.removeItem('cart');
        }
    }
}