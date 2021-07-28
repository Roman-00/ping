import React from 'react';

export const Home = () => {

    const [value, setValue] = React.useState('');
    const [difference, setDifference] = React.useState();

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

    return <div className="container">

        <div className="home__input--block">
            <input type="text" placeholder="Введите url сервера" className="home__input" onChange={handleChange} />
            <button type="submit" className="home__button--server" onClick={() => getOptions()}>Отправить запрос</button>
        </div>

        <div className="home__result">
            Время ответа от сервера составляет: {difference ? difference : 0} ms
        </div>


    </div>;

};