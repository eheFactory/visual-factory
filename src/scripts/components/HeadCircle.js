export const HeadCircle = (props) => {
    return (
        <circle
            r={props.radius}
            fill={props.fill}
            stroke={props.stroke}
            stroke-width={props.strokeWidth}
        />
    )
};
