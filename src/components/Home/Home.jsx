import NavBar from '../NavBar/NavBar';
import { useState } from 'react';



const Home = () => {
    
    const getBase64 = file => {
        return new Promise(resolve => {
            let fileInfo;
            let baseURL = "";
            // Make new FileReader
            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {
                // Make a fileInfo Object
                console.log("Called", reader);
                baseURL = reader.result;
                console.log(baseURL);
                resolve(baseURL);
            };
            console.log(fileInfo);
        });
    };

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        let svgFile = e.target.files[0]
        console.log(getBase64(svgFile))
    }
    return (
        <>
            <NavBar />
            <input type="file" onChange={handleChange} />
            <h1>HomePage</h1>
            <img src={file} />

        </>
    )
};

export default Home;