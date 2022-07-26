import { HeadCircle } from './HeadCircle';
import { Eyes } from './Eyes';
import { Mouth } from './Mouth';
import { FaceContainer } from './FaceContainer';

export const Face = (props) => {
    return (
        <>
            <FaceContainer
                width={props.width}
                height={props.height}
                centerX={props.centerX}
                centerY={props.centerY}
            >
                <HeadCircle
                    radius={props.centerY - props.strokeWidth / 2}
                    strokeWidth={props.strokeWidth}
                    fill={props.fill}
                    stroke={props.stroke}
                />
                <Eyes
                    eyeOffsetX={props.eyeOffsetX}
                    eyeOffsetY={props.eyeOffsetY}
                    eyeRadius={props.eyeRadius}
                />
                <Mouth mouthRadius={props.mouthRadius} mouthWidth={props.mouthWidth} />
            </FaceContainer>
        </>
    )
};
