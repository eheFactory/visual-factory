
const Eyes = (props) => {
    return (
        <>
            <circle
                cx={-props.eyeOffsetX}
                cy={-props.eyeOffsetY}
                r={props.eyeRadius}
            />
            <circle
                cx={props.eyeOffsetX}
                cy={-props.eyeOffsetY}
                r={props.eyeRadius}
            />
        </>
    )
};

export default Eyes;