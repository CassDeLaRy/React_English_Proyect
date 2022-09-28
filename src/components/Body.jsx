import '../assets/style/body.css'
import background from '../assets/img/background.jpg'
import img1 from '../assets/img/fondoCards.jpg'
import Card from './Card'

function Body() {
    const topics = [
        {
            id:1,
            title: "Present Perfect",
            description: "You'll be able to solve sentences in present and past simple.",
            imagen: img1
        },
        {
            id:2,
            title: "Present perfect and past",
            description: "This is the next level of the previous level.",
            imagen: img1
        },
        {
            id:3,
            title: "Future",
            description: "You can make sentences like predictions or events at the future.",
            imagen: img1
        },
        {
            id:4,
            title: "Modals",
            description: "Different ways of saying something with different meanings.",
            imagen: img1
        },
        {
            id:5,
            title: "If and wish",
            description: "How to express any thing you would like to have one day.",
            imagen: img1
        },
        {
            id:6,
            title: "Passive",
            description: "Another way of writing the same thing, but specifying the subject.",
            imagen: img1
        }
    ]

    return (
        <>
        <img id="logoBody" src={background}></img>
        <h1 id="tituloHome">ENGLISH: TOPICS</h1>
        <div className='Box-Drama'>
            {topics.map((topic) => {
                return (
                    <Card
                    id={topic.id}
                    title={topic.title} 
                    description={topic.description}
                    img={topic.imagen}
                    />
                );
            })}
        </div>
        </>
    )
}

export default Body;