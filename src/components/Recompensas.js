import React from 'react';

const Recompensas = ({ closeModal, modalIsOpen, guardarValorBlack,
    guardarValorBamboo, aporte_black, aporte_bamboo,
    marcarBamboo, marcarBlack, marcarNoReward, pledgeNoReward, pledgeBamboo, pledgeBlack }) => {

    return (
        <>
            <form className={`${modalIsOpen} contenedor modal-start`} id="form" name="aportes" >
                <div className="titulo">
                    <h4 className="negro bold t-g">Back this project</h4>
                    <p className="cierre gris t-g bold" onClick={() => closeModal()}>X</p>
                </div>
                <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                <div className="contenido-modal-start">

                    <div className="input-radio borde-gris">
                        <div className="input">
                            <input type="radio" id="no_reward" name="pledge_radio" value="no_reward"
                                checked={pledgeNoReward}
                                onChange={() => marcarNoReward()} />
                            <label className="m-cyan bold" htmlFor="no_reward">Pledge with no reward</label>
                        </div>
                        <p>Choose to support us without a reward if you simply believe in our project. As a backer,
                            you will be signed up to receive product updates via email.</p>
                        <div className="invisible pledge p-no_reward">
                            <p>Enter tour pledge</p>
                            <div className="botones-r">
                                <p><button type="button"
                                    className="btn  btn-p"
                                    onClick={() => closeModal()}
                                >Continue</button></p>
                            </div>
                        </div>
                        {/* <!--pledge--> */}
                    </div>
                    {/* <!--input-radio--> */}

                    <div className="input-radio borde-gris">
                        <div className="input">
                            <p>
                                <input type="radio" id="bamboo" name="pledge_radio" value="bamboo"
                                    checked={pledgeBamboo}
                                    onChange={() => marcarBamboo()} />
                                <label className="negro bold" htmlFor="bamboo"> Bamboo Stand</label>
                            </p>
                            <p className="m-cyan bold">Pledge $25 or more</p>
                            <p className="arriba"><span className="negro bold t-g">101</span> left</p>
                        </div>
                        {/* <!--input--> */}
                        <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                            you’ll be added to a special Backer member list.</p>
                        <p className="abajo"><span className="negro bold t-g">101</span> left</p>
                        <div className="invisible pledge p-bamboo">
                            <label htmlFor="aporte_bamboo">Enter tour pledge</label>
                            <div className="botones-r">
                                <p><input
                                    type="number"
                                    className="btn-r-p negro"
                                    id="aporte_bamboo"
                                    name="aporte_bamboo"
                                    placeholder="$25"
                                    value={aporte_bamboo}
                                    min="25"
                                    onChange={(e) => guardarValorBamboo(e)}
                                /></p>
                                <p><button
                                    type="button"
                                    onClick={() => closeModal()}
                                    className="btn  btn-p"
                                >Continue</button></p>
                            </div>
                        </div>
                        {/* <!--pledge--> */}
                    </div>
                    {/* <!--input-radio--> */}
                    <div className="input-radio borde-gris">
                        <div className="input">
                            <p>
                                <input type="radio" id="black" name="pledge_radio" value="black"
                                    checked={pledgeBlack}
                                    onChange={() => marcarBlack()} />
                                <label className="negro bold" htmlFor="black"> Black Edition Stand</label>
                            </p>
                            <p className="m-cyan bold">Pledge $75 or more</p>
                            <p className="arriba"><span className="negro bold t-g ">64</span> left</p>
                        </div>
                        {/* <!--input--> */}
                        <p> You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                            member list. Shipping is included.
                            64 left</p>
                        <p className="abajo"><span className="negro bold t-g">64</span> left</p>
                        <div className="invisible pledge p-black">
                            <label htmlFor="aporte_black">Enter tour pledge</label>
                            <div className="botones-r">
                                <p><input
                                    type="number"
                                    className="btn-r-p"
                                    id="aporte_black"
                                    name="aporte_black"
                                    placeholder="$75"
                                    value={aporte_black}
                                    min="75"
                                    onChange={(e) => guardarValorBlack(e)}
                                /></p>
                                <p><button
                                    type="button"
                                    onClick={() => closeModal()}
                                    className="btn  btn-p">Continue</button></p>
                            </div>
                        </div>
                        {/* <!--pledge--> */}
                    </div>
                    {/* <!--input-radio--> */}

                    <div className="input-radio oculto borde-gris">
                        <input type="radio" id="mahogany" name="pledge_radio" value="mahogany" disabled />
                        <label className="negro bold" htmlFor="mahogany">Mahogany Special Edition </label>
                        <p>Choose to support us without a reward if you simply believe in our project.As a backer,
                            you will be signed up to receive product updates via email.</p>
                        <p className="abajo"><span className="negro bold t-g">0</span> left</p>

                        <div className="invisible pledge p-mahogany">
                            <p>Enter tour pledge</p>
                            <div className="botones-r">
                                <p><button type="button" className="btn  btn-p">Continue</button></p>
                            </div>
                        </div>
                        {/* <!--pledge--> */}
                    </div>

                </div>
            </form>
            {/* <!-- Selection modal start --> */}
        </>
    )
}

export default Recompensas
