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