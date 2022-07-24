const Text = ({ text, color, fontsize}) => {
    return (
        <span style={{color: color, fontSize: fontsize, margin: '10px'}}>{text}</span>
    )
}

export default Text;