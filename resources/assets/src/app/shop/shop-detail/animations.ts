import {trigger, state, style, transition, animate} from '@angular/animations';

export  const  showStateTrigger = trigger('showState', [
    state('*', style({
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    })),
    transition('void =>shown', [

            // styles at start of transition
            style({
                // start with the content positioned off the right of the screen,
                // -400% is required instead of -100% because the negative position adds to the width of the element
                right: '-400%',

                // start with background opacity set to 0 (invisible)
                backgroundColor: 'rgba(0, 0, 0, 0)'
            }),

            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                // transition the right position to 0 which slides the content into view
                right: 0,

                // transition the background opacity to 0.8 to fade it in
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