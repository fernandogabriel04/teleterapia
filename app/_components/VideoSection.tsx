export default function VideoSection() {
    return (
        <section className="bg-zinc-100 text-zinc-900 pt-56 px-24 gap-4 flex flex-col items-center">
            <div className="flex justify-between gap-16 items-center">
                <h1 className="text-4xl text-end text-nowrap text-secondary-blue">24h por dia<br/>7 dias por semana.<br/><strong>Veja no vídeo<br/> como funciona</strong></h1>
                    <div className="bg-primary-blue min-w-4 h-16 rounded-full"></div>
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
            <iframe
                className="mt-8 w-full aspect-video rounded-3xl"
                src="https://www.youtube.com/embed/qkhbA30Rgrw?si=qCx6iWivsviktSIw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
        </section>
    );
}