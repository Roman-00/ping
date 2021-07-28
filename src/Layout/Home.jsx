import React from 'react';

export const Home = () => {

    const [value, setValue] = React.useState('');
    const [difference, setDifference] = React.useState();

    console.log('value', value);
    console.log('difference', difference);

    const handleChange = (e) => {

        setValue(e.target.value);

    };

    const getOptions = () => {

        const start = Date.now();

        fetch(`${value}`, { mode: 'no-cors'})
            .then(() => {
                setDifference(Date.now() - start);
            })
            .catch((error) => {
                console.log('error', error);
            });

    };

    return <div class="container">

        <div class="home__input--block">
            <input type="text" placeholder="Введите url сервера" class="home__input" onChange={handleChange} />
            <button type="submit" class="home__button--server" onClick={() => getOptions()}>Отправить запрос</button>
        </div>

        <div class="home__result">
            Время ответа от сервера составляет: {difference ? difference : 0} ms
        </div>


    </div>;

};