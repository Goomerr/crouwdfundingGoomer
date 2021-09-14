import React from 'react';

const Inicio = ({ bookmark, setBoomark, verGracias, total, backers, marcarBamboo, marcarBlack }) => {

    return (
        < >
            <div className="container">
                <div className="cabecera">
                    <div className="logo text-center">
                        <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fillRule="evenodd"><circle fill="#000" cx="28" cy="28" r="28" />
                                <g fillRule="nonzero">
                                    <path fill="#444" />
                                    <path d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z"
                                        fill="#FFF" />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <h2 className="text-center negro">Mastercraft Bamboo Monitor Riser</h2>
                    <p className="text-center">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                    <div className="botones">
                        <div className="izq">
                            <button className="btn  btn-p" onClick={() => verGracias()}>Back this project</button>
                        </div>

                        {bookmark ? (
                            <div className="der">
                                <p>
                                    <svg className="marca" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="#fff" fillRule="evenodd">
                                            <circle fill="hsl(176, 72%, 28%)" cx="28" cy="28" r="28" />
                                            <path fill="#fff" d="M23 19v18l5-5.058L33 37V19z" />
                                        </g>
                                    </svg></p>
                                <span>
                                    <button
                                        className="verde btn"
                                        type="button"
                                        onClick={() => setBoomark(false)}
                                    >Bookmarked</button>
                                </span>
                            </div>

                        ) : (
                            <div className="der">
                                <p>
                                    <svg className="marca" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="#fff" fillRule="evenodd">
                                            <circle fill=" hsl(0, 0%, 48%)" cx="28" cy="28" r="28" />
                                            <path fill="#fff" d="M23 19v18l5-5.058L33 37V19z" />
                                        </g>
                                    </svg>
                                </p>
                                <span>
                                    <button
                                        className="btn gris"
                                        type="button"

                                    >Bookmark</button>
                                </span>
                            </div>
                        )}

                    </div>
                    {/* <!--botones--> */}
                </div>
                {/* <!--cabecera--> */}
                <div className="datos" id="contenedor_numeros">
                    <div className="numeros">
                        <div className="contenido-numeros der">
                            <h2 className="negro" id="dinero_aportado">${total} </h2>
                            <p>of $100,000 backed</p>
                            <p className="borde"></p>
                        </div>
                        <div className="contenido-numeros centro">
                            <h2 className="negro" id="patro">{backers} </h2>
                            <p>total backers</p>
                            <p className="borde"></p>
                        </div>
                        <div className="contenido-numeros izq">
                            <h2 className="negro" id="dias_restantes">56</h2>
                            <p>days left</p>
                        </div>
                    </div>
                    <div className="center">
                        <div>
                            <progress  className="progress" id="barra" max="100" value="0"></progress>
                            <span></span>
                        </div>
                    </div>
                </div>


                {/* <!--numeros--> */}

                <div className="principal">
                    <div className="about">
                        <h4 className="negro bold t-g"> About this project</h4>
                        <p> The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
                            to a more comfortable viewing height.Placing your monitor at eye level has the potential to improve
                            your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
                        <p> Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
                            to allow notepads, pens, and USB sticks to be stored under the stand.</p>
                    </div>

                    <div className="contenedor rewards" id="rewards">
                        <div className="contenido-reward">
                            <div className="titulo">
                                <h4 className="negro bold t-g">Bamboo Stand</h4>
                                <p className="m-cyan bold"> Pledge $25 or more</p>
                            </div>
                            <p>You get an ergonomic stand made of natural bamboo.You've helped us launch our promotional campaign, and
                                you’ll be added to a special Backer member list.</p>
                            <div className="botones btn-r">
                                <div className="precio">
                                    <p className="negro n-g bold">101</p>
                                    <p>left</p>
                                </div>
                                <button className="btn  btn-p" value="bamboo" onClick={() => marcarBamboo()}>Select Reward</button>
                            </div>
                        </div>
                        <div className="contenido-reward">
                            <div className="titulo">
                                <h4 className="negro bold t-g bold">Black Edition Stand </h4>
                                <p className="m-cyan bold">Pledge $75 or more</p>
                            </div>
                            <p>You get a Black Special Edition computer stand and a personal thank you.You’ll be added to our Backer
                                member list.Shipping is included.</p>
                            <div className="botones btn-r">
                                <div className="precio">
                                    <p className="negro n-g bold"> 64</p>
                                    <p>left</p>
                                </div>
                                <button className="btn  btn-p" value="black" onClick={() => marcarBlack()}>Select Reward</button>
                            </div>
                        </div>
                        <div className="contenido-reward oculto" id="oculto">
                            <div className="titulo">
                                <h4 className="negro bold t-g bold"> Mahogany Special Edition </h4>
                                <p className="m-cyan bold"> Pledge $200 or more</p>
                            </div>
                            <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you.You’ll be added
                                to our Backer member list.Shipping is included.</p>
                            <div className="botones btn-r">
                                <div className="precio">
                                    <p className="negro n-g bold">0</p>
                                    <p>left</p>
                                </div>
                                <button className="btn btn-gris btn-p" value="mahogany">Out of Stock</button>
                            </div>
                        </div>
                    </div>
                    {/* <!--contenedor rewards--> */}
                </div>
                {/* <!--principal--> */}
            </div>
        </ >
    )
}

export default Inicio
