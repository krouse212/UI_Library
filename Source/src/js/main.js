import './lib/lib';
import $ from './lib/lib';

$('.btn').eq(0).on('click', () => {
    $('.w-500').eq(0).fadeToggle(800);
});

$('.btn').eq(1).on('click', () => {
    $('.w-500').eq(1).fadeToggle(800);
});

$('.btn').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});

$('.wrap').html(
    `
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">dropdown button</button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
            <a href="" class="dropdown-item">Action</a>
            <a href="" class="dropdown-item">Action #2</a>
            <a href="" class="dropdown-item">Action #3</a>
        </div>
    </div>`
);


$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, at. Sapiente '
    },
    btns: {
        count: 2,
        settings: [
                [
                    'Close',
                    ['btn-danger', 'mr-10'],
                    true
                ],
                [
                    'Save changes',
                    ['btn-success'],
                    false,
                    () => {
                        alert('Its saved');
                    }
                ]
        ]
    }   
}));



$('.dropdown-toggle').dropdown();   