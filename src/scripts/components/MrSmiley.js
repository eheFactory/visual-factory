import { Face } from './Face';

export const MrSmiley = (props) => {
    window.setTimeout(() => {
        window.location.reload();
    }, 500);

    return (
        props.array.map(() => (
            <Face
                width={props.width}
                height={props.height}
                fill={props.colors[Math.floor(Math.random()*props.colors.length)]}
                stroke={props.colors[Math.floor(Math.random()*props.colors.length)]}
                centerX={props.width / 2}
                centerY={props.height / 2}
                strokeWidth={6 + Math.random() * 3}
                eyeOffsetX={20 + Math.random() * 9}
                eyeOffsetY={20 + Math.random() * 15}
                eyeRadius={5 + Math.random() * 10}
                mouthWidth={7 + Math.random() * 9}
                mouthRadius={30 + Math.random() * 10}
            />
        ))
    );
}