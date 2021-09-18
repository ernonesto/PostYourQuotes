import './Form.css';

function Form({onChange,onSubmit, name, error}) {
   
    return (
       
        <div className="Form">

                <h3 className="error">{error?error:null} </h3>

            <form onSubmit={onSubmit}>
                <div className="info">
                   <label> Add your quote:</label>
                    <textarea onChange={onChange} value={name.quote} type="text" name="quote" />
                </div>
                
                <div className="info">
                    <label>Auther:</label>
                    <input onChange={onChange} value={name.auther} type="text" name="auther" />
                </div>
                <div className="info">
                    <label>Publisher by:</label>
                    <input onChange={onChange} value={name.publisher} type="text" name="publisher" />
                </div>
                <button type="submit">Add quotes</button>
                
            </form>

        </div>
    );
}



export default Form;