function InputText(props) {
    return (
        <div className="form-control w-full max-w-xs" >
            <label className="label">
                <span className="label-text"></span>
            </label>
            <input type={props.handleType} placeholder={props.handlePlaceholder} style={props.handleStyle} className="input input-bordered " />
        </div>

    )

}

export default InputText