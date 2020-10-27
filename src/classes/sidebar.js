import { block } from '../utils';
import {
    ImageBlock,
    TextBlock,
    TitleBlock
} from './blocks';

export class Sidebar {
    constructor(selector, updateCallback) {
        this.$el = document.querySelector(selector);
        this.update = updateCallback;
        this.init()
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template);
        this.$el.addEventListener('submit', this.add.bind(this));
    }

    get template() {
        return block('text');
    }

    add(e) {
        e.preventDefault();

        const type = e.target.name;
        const value = e.target.value.value;
        const styles = e.target.styles.value;

        let newBlock;

        switch (type) {
            case "text":
                newBlock = new TextBlock(value, { styles });
                break;
            case "title":
                newBlock = new TitleBlock(value, { styles });
                break;
            case "image":
                newBlock = new ImageBlock(value, { styles });
                break;
            case "columns":
                newBlock = new ColumnsBlock(value, { styles });
                break;
            default:
                newBlock = new TextBlock(value, { styles });
                break;
        }

        this.update(newBlock);

        e.target.value.value = '';
        e.target.styles.value = '';
    }
}