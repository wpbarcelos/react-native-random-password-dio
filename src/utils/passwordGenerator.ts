
export const passwordGenerator = (len = 10) => {

    const letters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*()_-+';

    let password = '';

    for (let i = 0; i < len; i++) {
        const indexRandom = Math.round(Math.random() * letters.length);
        password += letters.charAt(indexRandom);
    }

    return password;

}