const HeadCircle = (props) => {
    return (
        <circle
            r={props.radius}
            fill={props.fill}
            stroke={props.stroke}
            strokeWidth={props.strokeWidth}
        />
    )
};

export default HeadCircle;