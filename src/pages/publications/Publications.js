import React from 'react';
import { Publication } from '../../components/Publication/Publication';
import mainPhoto from '../../images/mainPhoto (1).jpeg';
import money from '../../images/money (1).jpeg';
import post from '../../images/post.jpeg'

const Publications = () => {
    const data = [
        {
        author: {
            name: "Yulia Yarem",
            photo: { mainPhoto },
            nickname: "@YuYa"
        },
        content: "Does money decide everything? How about humanity?",
        image: { img: money },
        date: "03/08/2023"
        },
        {
        author: {
            name: "Yulia Yarem",
            photo: { mainPhoto },
            nickname: "@YuYa"
        },
        content: "Чи все можна купити за гроші?",
        image: { img: post },
        date: "29/08/2023"
        }
    ]

    return <>
        <div className="App">
            <Publication author={data[0].author}
            content={data[0].content}
            image={data[0].image}
            date={data[0].date}
            />

            <Publication author={data[1].author}
            content={data[1].content}
            image={data[1].image}
            date={data[1].date}
            />
        </div>
    </>
};

export default Publications;
