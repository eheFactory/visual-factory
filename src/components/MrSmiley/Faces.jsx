import { useEffect } from 'react';
import HeadCircle from './HeadCircle';
import Eyes from './Eyes';
import Mouth from './Mouth';
import FaceContainer from './FaceContainer';

const Face = (props) => {

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

const Faces = ({array,width,height, colors}) => {

    const faces = array.map(()=>{
        return(
            <Face
            key={Math.random()}
            width={width}
            height={height}
            fill={colors[Math.floor(Math.random()*colors.length)]}
            stroke={colors[Math.floor(Math.random()*colors.length)]}
            centerX={width / 2}
            centerY={height / 2}
            strokeWidth={6 + Math.random() * 3}
            eyeOffsetX={20 + Math.random() * 9}
            eyeOffsetY={20 + Math.random() * 15}
            eyeRadius={5 + Math.random() * 10}
            mouthWidth={7 + Math.random() * 9}
            mouthRadius={30 + Math.random() * 10}
        />
        )
    })
    
    return <>{faces}</>
}

export default Faces;