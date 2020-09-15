import React from 'react';
import Fornavn from './Fornavn';
import Etternavn from './Etternavn';

export default class Navn extends React.Component {
    render() {
        return (
            <div>
                <Fornavn></Fornavn>
                <Etternavn></Etternavn>
            </div>
            );
    }
}