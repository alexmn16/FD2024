class LoadingSpinner extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});

        this.spinnerSize = this.getAttribute('size') || '50px';
        this.spinnerColor = this.getAttribute('color') || '#007BFF';
        this.spinnerSpeed = this.getAttribute('speed') || '1s';

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                }
                .spinner {
                    width: var(--spinner-size, 50px);
                    height: var(--spinner-size, 50px);
                    border: 4px solid rgba(0, 0, 0, 0.1);
                    border-top: 4px solid var(--spinner-color, #007BFF);
                    border-radius: 50%;
                    animation: spin var(--spinner-speed, 1s) linear infinite;
                }
                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            </style>
            <div class="spinner" style="width: ${this.spinnerSize}; height: ${this.spinnerSize}; border-top-color: ${this.spinnerColor}; animation-duration: ${this.spinnerSpeed};"></div>
        `;
    }

    static get observedAttributes() {
        return ['size', 'color', 'speed'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            const spinner = this.shadowRoot.querySelector('.spinner');
            if (name === 'size') {
                spinner.style.width = newValue;
                spinner.style.height = newValue;
            } else if (name === 'color') {
                spinner.style.borderTopColor = newValue;
            } else if (name === 'speed') {
                spinner.style.animationDuration = newValue;
            }
        }
    }
}

customElements.define('loading-spinner', LoadingSpinner);