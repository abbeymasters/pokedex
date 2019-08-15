import Component from '../Component.js';

class Button extends Component {
    renderHTML() {
        return /*html*/`
            <section class="button-section">
                <button class="button" id="next-button">next page</button>
            </section>
        `;
    }
}

export default Button;