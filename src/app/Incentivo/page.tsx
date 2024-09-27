import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <>
            <div className='w-full h-[437px] '>
                <h1>Marketing de Incentivo</h1>
                <span className='text-white border 2px bg-[rgb(0,130,181)]'>Venda mais inverstindo do jeito certo!</span>
                <p>Com o Marketing de Incentivo em sua empresa você tem acesso a um conjunto de estratégias e ações implementadas no ambiente corporativo com o objetivo de motivar e engajar os colaboradores a alcançarem metas com recompensas pré-estabelecidas</p>
            </div>
            <section>
                <div>
                    <Image src="/images/incentivo.png" alt="Incentivo" width={500} height={500} />
                    <h2>Como funciona?</h2>
                    <h1>Diagnóstico Grátis!</h1>
                    <p>Nós fazemos a avaliação 360° de seus negócios,
                        desempenho e mercado para indicar a melhor solução para seu crescimento com nossas
                        ferramentas de forma 100% grátis!</p>
                    <button>Quero vender mais!</button>
                </div>
            </section>

            <section>
                <div>
                    <h2>Como funciona as</h2>
                    <h1>Campanhas de Incentivo?</h1>
                    <p>As Campanhas de Incentivo são um conjunto de ações planejadas com período de tempo determinado e resultados mensuráveis, utilizando de nossas ferramentas para aplicar soluções plausíveis com sua equipe de vendas a fim de aprimorar seu desempenho e conquistar objetivos</p>
                    
                </div>
                <div>
                    <Image src="/images/incentivo.png" alt="Incentivo" width={500} height={500} />
                    <div>
                        <div>
                            <Image src="/images/incentivo.png" alt="Incentivo" width={500} height={500} />
                        </div>
                        <div>
                            <Image src="/images/incentivo.png" alt="Incentivo" width={500} height={500} />
                        </div>
                        <div>
                            <Image src="/images/incentivo.png" alt="Incentivo" width={500} height={500} />
                        </div>
                        <div>
                            <Image src="/images/incentivo.png" alt="Incentivo" width={500} height={500} />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h1>Trimô</h1>
                </div>
            </section>
        </>
    )
}

export default page
