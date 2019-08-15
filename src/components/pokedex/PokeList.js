import Component from '../Component.js';
import PokeItem from '../pokedex/PokeItems.js';

class PokeList extends Component {
        
    onRender(dom) {
        const poke = this.props.poke;

        poke.forEach(onePoke => {
            const props = { onePoke: onePoke };
            const pokeItem = new PokeItem(props);
            const pokeItemDOM = pokeItem.renderDOM();
            dom.appendChild(pokeItemDOM);
        });
    }

    renderHTML() {
        return /*html*/`
            <ul class="pokemon-list-section"></ul>        
        `;
    }
}

export default PokeList;