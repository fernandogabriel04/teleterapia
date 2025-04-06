import { IoStar } from "react-icons/io5";

export interface PropsCardTestimonial {
    key?: number;
    comment: string;
    author: string;
    stars: number;
}

const CardTestimonial = ({comment, author, stars}: PropsCardTestimonial) => {
    return ( 
        <div className="flex flex-col items-center md:w-[33%] lg:w-[29%] max-w-[420px] md:-ml-3 w-[70%] h-96 mt-10 bg-white rounded-[22%] filter drop-shadow-[0px_47px_45px_rgba(0,0,0,0.31)]">
            <div className="flex flex-col items-center w-[80%] h-full font-sans text-center text-xl md:text-lg lg:text-xl my-12">
                <div className="flex flex-row w-full justify-center">
                    {
                        ([...Array(stars)].map((_, index) => (
                          <IoStar
                            key={index}
                            size={16}
                            className="text-yellow-400"
                          />  
                        )))
                    }
                </div>
                <p className="mt-4 text-[#2d195f] font-medium">{comment}</p>
                <p className="mt-auto text-[#0053a5] underline font-bold">{author}</p>
            </div>
            
        </div>
     );
}

export default CardTestimonial