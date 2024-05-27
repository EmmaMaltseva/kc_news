import React, {CSSProperties} from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import '../../../styles/App.css'

interface LoaderProps {
    loading: boolean;
    message?: string;
    size: number;
}

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const Loader: React.FC<LoaderProps> = ({ loading, message, size }) => {
    if (size === undefined) {
        size = 40;
    }

    return loading ? (
        <div className='overlay-content loader'>
            <div className='wrapper'>
                <ClipLoader
                    cssOverride={override}
                    size={size}
                    color={'#123abc'}
                    loading={loading}
                />
                <span className='message'>
                    {message}
                </span>
            </div>
        </div>
    ) : null;
};

export default Loader;