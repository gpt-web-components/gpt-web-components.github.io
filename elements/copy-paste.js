customElements.define("copy-paste", class extends HTMLElement {
    connectedCallback() {
        this.onclick = (evt) => this.copyToClipboard();
    }

    copyToClipboard() {
        navigator.clipboard.writeText(this.innerText).then(() => {
            console.log('Text copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }
});