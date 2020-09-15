import React from 'react';

export default class BilForm extends React.Component {
    constructor() {
        super();
        this.state = {
            bilreg: null,
            bonus: null,
            fnummer: null,
            fornavn: null,
            etternavn: null,
            epost: null
        };
    }

    handleSubmit(event) {
        console.log(this.state);
    }

    render() {
        return (
            <form>
                <div>
                    <label>
                        Bilens registreringsnummer
                        <input required type="text" value={this.state.bilreg}></input>
                    </label>
                </div>
                <div>
                    <label>
                        Din bonus
                        <select required value={this.state.bonus}>
                            <option value="VDB">Velg din bonus</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Fødselsnummer
                        <input required type="date" value={this.state.fnummer}></input>
                    </label>
                </div>
                <div>
                    <label>
                        Fornavn
                        <input required type="text" value={this.state.fornavn}></input>
                    </label>
                </div>
                <div>
                    <label>
                        Etternavn
                        <input required type="text" value={this.state.etternavn}></input>
                    </label>
                </div>
                <div>
                    <label>
                        Epost
                        <input required type="email" value={this.state.epost}></input>
                    </label>
                </div>
                <div>
                    <button type="button" onClick={this.handleSubmit}>Beregn pris</button>
                    <button type="button">Avbryt</button>
                </div>
            </form>
        );
    }
}