export default function VideoSection() {
    return (
        <section id="how-it-works" className="bg-zinc-100 text-zinc-900 pt-60 flex flex-col items-center gap-8 px-12 lg:px-24">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-15">
                <h1 className="text-end text-nowrap text-secondary-blue text-3xl md:text-4xl">24h por dia<br />7 dias por semana.<br /><strong>Veja no vídeo<br /> como funciona</strong></h1>
                <div className="bg-primary-blue min-w-16 h-3 md:min-w-4 md:h-16 rounded-full"></div>
                <p className="text-xl">Se você precisa de apoio emocional, o <strong>
                    Teleterapia Maceió está
                    aqui para ajudar. Atendimento psicológico gratuito, sigiloso e
                    acessível para toda a população
                </strong>. É um serviço inovador da Secretaria
                    Municipal de Saúde que oferece atendimento psicológico gratuito para
                    todos que precisam de suporte emocional.
                </p>
            </div>
            <a href="#" className="text-primary-blue underline"><strong>Saiba mais +</strong></a>
            <div className="w-full h-full aspect-video ">
                <iframe width="560" height="560" src="https://www.youtube-nocookie.com/embed/q5uVi-O3m0k?si=IK8__EPTphDgM5cY&controls=1&rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full rounded-3xl" loading="lazy" ></iframe>
            </div>
        </section>
    );
}