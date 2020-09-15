import React from 'react';
import BilRegNummer from './BilRegNummer';
import DinBonus from './DinBonus';
import Fødselsnummer from './Fødselsnummer';
import Navn from './Navn';
import Epost from './Epost';

export default class BilForm extends React.Component {
    render() {
        return (
            <form>
                <BilRegNummer></BilRegNummer>
                <DinBonus></DinBonus>
                <Fødselsnummer></Fødselsnummer>
                <Navn></Navn>
                <Epost></Epost>
                <div>
                    <button type="submit">Beregn pris</button>
                    <button type="button">Avbryt</button>
                </div>
            </form>
            );
    }
}