import React from 'react';
import English from '../languages/English';
import English1k from '../languages/English1k';
import English5k from '../languages/English5k';

const RenderTextbox = ({ language, value }) => {

    const renderSelectedComponent = () => {

        switch (language) {
            case 'english':
                return <English value={value} />
            case 'english1k':
                return <English1k value={value} />
            case 'english5k':
                return <English5k value={value} />
            default:
                return <English value={value} />
        }
    }

    return (
        <div className='border-2 rounded-lg p-4 border-slate-800 drop-shadow-lg' id='renderLanguage'>
            { renderSelectedComponent() }
        </div>
    );
};

export default RenderTextbox;
