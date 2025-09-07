function ItemListContainer({ greeting }) {
    const games = [
        {
            title: "Black Myth: Wukong",
            description: "RPG de acción inspirado en Viaje al Oeste con combate estilo Soulslike.",
            image: "https://upload.wikimedia.org/wikipedia/en/7/7b/Black_Myth_Wukong.jpg"
        },
        {
            title: "The Last of Us Parte II Remastered",
            description: "Aventura postapocalíptica con mejoras gráficas y modo roguelike.",
            image: "https://upload.wikimedia.org/wikipedia/en/5/50/The_Last_of_Us_Part_II_cover_art.jpg"
        },
        {
            title: "Marvel's Spider-Man 2",
            description: "Secuela de acción y aventura con Peter Parker y Miles Morales.",
            image: "https://upload.wikimedia.org/wikipedia/en/5/52/Marvel%27s_Spider-Man_2_cover_art.jpg"
        }
    ]
    return (
        <section className="py-5">
            <div className="container text-center">
                <h2 className="mb-4">{greeting}</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">BLACK MYTH: WUKONG</h5>
                                <p className="card-text">Un RPG de acción inspirado en la novela china Viaje al Oeste. Controlás a un guerrero simio con poderes mágicos y un bastón transformable. Destaca por su combate desafiante estilo Soulslike, paisajes mitológicos impresionantes y jefes épicos basados en la mitología china.</p>
                                <a href="#" className="btn btn-primary">Ver más</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">The Last of Us™ Parte II Remastered</h5>
                                <p className="card-text">Versión mejorada del aclamado juego de acción y supervivencia de Naughty Dog. Retoma la historia de Ellie en un mundo postapocalíptico lleno de peligros humanos y criaturas infectadas. Incluye mejoras gráficas, nuevo modo roguelike (No Return) y extras como comentarios de desarrolladores.</p>
                                <a href="#" className="btn btn-primary">Ver más</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Marvel's Spider-Man 2</h5>
                                <p className="card-text">Secuela del exitoso juego de Insomniac. Podés alternar entre Peter Parker y Miles Morales, cada uno con habilidades únicas. Ofrece una Nueva York más grande y detallada, combates ágiles, historia cinematográfica y villanos icónicos como Venom y Kraven.</p>
                                <a href="#" className="btn btn-primary">Ver más</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ItemListContainer


