import pages from '../../public/data/pages.json'
import { Collapse } from 'antd';

const Asks = ({ index }) => {

    return (
        <div className='asks'>
            <div className="asks-header">
                <h1 className='asks-header-title'>¿Tienes preguntas?</h1>
                <h1 className='asks-header-paragraph'>Estamos aquí para responder y ayudarte en lo que necesites.</h1>
            </div>
            <div className="asks-body gap-1 space-y-1">
                {pages[index]?.asks.map((item, index) => (
                    <div key={`according-${index}`} className='mb-1'>
                        <Collapse
                            items={[
                                {
                                    key: `asks-${index+1}`,
                                    label: item?.title,
                                    children: <h1 className='ask-res p-1 m-1'>{item?.paragraph}</h1>,
                                },
                            ]}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Asks;
