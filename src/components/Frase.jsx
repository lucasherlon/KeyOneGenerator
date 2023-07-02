function Frase({index}) {
    const frases = [
        'Vai te fuder!',
        'Ah te a merda!',
        'Tomá no cu, caralho!',
        'Pooorra!',
        'Mermão mas tu é burro',
        'Porra, carai!',
        'Calma, Tô cagando',
        'Tô cansado, bó pra casa',
        'Não sei...',
        'Tu não serve pra nada',
        'Vou só copiar do chatGPT, foda-se',
        'Puta que pariuu!',
        'Safado...',
        'Vai tomar no cu',
        'Quero que se Foda',
        'Professor Arrombado',
        'To com preguiça...',
        'Vagabundo, Safado',
        'ChatGPT vagabundo',
        'Pois tu se fudeu',
        'Pode passar Douglas',
        'Triste...',
        'O Lucas é que decide',
        'Bora Karalho',
        'Porra Douglas!',
        'Bó jogar sinuca',
        'Calma aí Krl',
        'Oh muié do Rabão'
    ]

    return (
         <p className="frase--p">{index == 100? 'De nada, caralho!' : frases[index]}</p>
    )
}

export default Frase
