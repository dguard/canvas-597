// import Keyboard from './KeyboardState.js';

function setupKeyboard(/*mario*/character) {
    const input = new KeyboardState();

    input.addMapping('KeyW', keyState => {
        if (keyState) {
            character.moveBottom()
            // mario.jump.start();
        } else {
            // mario.jump.cancel();
        }
    });
    input.addMapping('KeyS', keyState => {
        if (keyState) {
            // mario.jump.start();
            character.moveUp()
        } else {
            // mario.jump.cancel();
        }
    });
    input.addMapping('KeyA', keyState => {
        if (keyState) {
            character.moveRight()
        } else {
            // mario.jump.cancel();
        }
    });
    input.addMapping('KeyD', keyState => {
        if (keyState) {
            character.moveLeft()
        } else {
            // mario.jump.cancel();
        }
    });

    input.addMapping('KeyO', keyState => {
        // mario.turbo(keyState);
        
    });

    return input;
}
