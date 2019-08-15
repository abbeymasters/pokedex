import Component from '../Component.js';

class PokeItem extends Component {
    renderHTML() {
        const poke = this.props.poke;

        return /*html*/`
            <li>
                <h2>${poke.pokemon}</h2>
                <img id="poke-image" src="${poke.url_image}">
                <p>Type: ${poke.type_1}</p>
                <p>Attack: ${poke.attack}</p>
            </li>
        `;
    }
}

export default PokeItem;