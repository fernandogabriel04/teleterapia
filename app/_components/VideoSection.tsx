export default function VideoSection() {
    return (
        <section className="bg-zinc-100 text-zinc-900 pt-56 px-24 gap-4 flex flex-col items-center">
            <div className="flex flex-col md:flex-row justify-between gap-16 items-center">
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
            <video
                className="mt-8 w-full aspect-video rounded-3xl"
                src="/video/teleterapia.mp4"
                title="Vídeo institucional sobre o Teleterapia Maceió"
                controls
                poster="/logo-v2.png"
            >
                <source src="/video-teleterapia.webm" type="video/webm" />
                Seu navegador não suporta a tag de vídeo.
            </video>
        </section>
    );
}