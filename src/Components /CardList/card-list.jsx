import React from 'react';
import './card-list.css';
import { Card } from '../Card/card-component';

export const CardList = props => (
    <div className='card-list'>
        {props.monsters.map(mon => (
            <Card key={mon.id} monster={mon} />)
            )
        }
     </div>
)