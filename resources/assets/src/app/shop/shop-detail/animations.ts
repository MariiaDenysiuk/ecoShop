import {trigger, state, style, transition, animate} from '@angular/animations';

export  const  showStateTrigger = trigger('showStateTrigger', [
    state('*', style({
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    })),
    transition('void =>shown', [
            style({
                right: '-400%',
                backgroundColor: 'rgba(0, 0, 0, 0)'
            }),
            animate('.5s ease-in-out', style({
                right: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.8)'
            }))
    ]),
    transition('shown => void', [
        animate('.5s ease-in-out', style({
            right: '-400%',
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }))
    ])
]);