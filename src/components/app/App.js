import Component from '../Component.js';
import Header from '../app/Header.js';
// import Button from '../app/Button.js';
// import Input from '../options/Input.js';
// import Select from '../options/Select.js';
import PokeList from '../pokedex/PokeList.js';
import poke from '../../../data.js';

class App extends Component {
    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const pokeList = new PokeList({ poke: [] });
        console.log(pokeList);
        const pokeListDOM = pokeList.renderDOM();
        const contentSection = dom.querySelector('.pokemon-list-section');
        contentSection.appendChild(pokeListDOM);

    }

    renderHTML() {
        return /*html*/`
            <div id="root">
                <main class="wrapper">
                    <header class="header"></header>

                    <section class="sidebar">
                        <div id="input-section"></div>
                        <div id="select-section"></div>
                    </section>
                    
                    <section class="content"></section>
                    
                    <section class="button-section"></section>
                </main>
                <footer>
                    <p>made by abbey</p>
                </footer>
            </div>
        `;
    }
}

export default App;