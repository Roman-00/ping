import React from 'react';

export const Home = () => {

    const [value, setValue] = React.useState('');

    const [start, setStart] = React.useState();
    const [end, setEnd] = React.useState();
    const [difference, setDifference] = React.useState();

    console.log('start', start);
    console.log('end', end);
    console.log('difference', difference);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const getOptions = () => {

        setStart(new Date());

        fetch(`${value}`)
            .then(() => {
                setEnd(new Date());
                setDifference(end - start);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return <>
        <input 
            type="text" 
            className="home__input"
            onChange={handleChange}
        />
        <button onClick={() => getOptions()}>Запросить</button>
        <div>
            <span>Время отклика от сервера: {difference ? difference : 0}</span><br />
        </div>
    </>

};