import CardTestimonial from "./CardTestimonial"
import { PropsCardTestimonial } from "./CardTestimonial"

const cards: Array<PropsCardTestimonial> = [
    {comment: "A experiência foi transformadora. Finalmente encontrei o apoio que precisava para superar meus desafios emocionais.", author: "João Silva", stars: 5},
    {comment: "As sessões de teleterapia me ajudaram a lidar melhor com a ansiedade e a entender melhor minhas emoções. Eu simplesmente adorei.", author: "Maria Oliveira", stars: 5},
    {comment: "Nunca imaginei que a psicoterapia online fosse tão eficaz. Me sinto acolhido e seguro em todas as sessões. Eu mesmo tinha muito medo desse modelo, mas funcionou de verdade.", author: "Carlos Santos", stars: 5}
]

const Testimonials = () => {
    return (
        <section id="feedbacks" className="flex flex-col w-full pt-12  items-center bg-white">
            <div className="items-center w-[80%] md:w-[45%]">
                <p className="text-[#00ff82] font-neulis text-center text-6xl [--stroke-color:#00ff82] [-webkit-text-stroke:2px_var(--stroke-color)]" style={{fontWeight: 1500}}>O que estão falando do nosso programa?</p>
            </div>
            <div className="flex flex-col flex-wrap w-full md:flex-row items-center md:justify-center mt-2"
                style={{background: "linear-gradient(to bottom, white 40%, #00ff82 40%)"}}
            >
                {
                    cards.map((card, index) => (
                        <CardTestimonial
                            key={index}
                            comment={card.comment}
                            author={card.author}
                            stars={card.stars}
                        />
                    ))
                }
            </div>
        </section>
        
    )
}

export default Testimonials