import { arc } from 'd3';


export const Mouth = (props) => {
    const mouthArc = arc()
        .innerRadius(props.mouthRadius)
        .outerRadius(props.mouthRadius + props.mouthWidth)
        .startAngle(Math.PI / 2)
        .endAngle(Math.PI * 3 / 2);

    return (
        <path d={mouthArc()} />
    )
};