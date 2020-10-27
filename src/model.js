import {
    TitleBlock,
    ImageBlock,
    TextBlock,
    ColumnsBlock
} from './classes/blocks';

export const model = [
    new TitleBlock('Конструктор сайтов на чистом Javascript', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            'text-align': 'center',
            padding: '10px'
        }
    }),
    new TextBlock('some text'),
    new ColumnsBlock([
        '111',
        '111',
        '111',
        '111',
        '111'
    ]),
    new ImageBlock('https://html5css.ru/css/img_lights.jpg', {
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: "img"
    })
];