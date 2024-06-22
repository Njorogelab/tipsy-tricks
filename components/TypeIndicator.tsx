import {FC} from 'react'

interface TypeIndicatorProps{
 type: string
}

const TypeIndicator: FC<TypeIndicatorProps> = ({type}) => {
    let color = '';
    switch (type) {
      case 'Alcoholic':
        color = 'green';
        break;
      case 'Non alcoholic':
        color = 'red';
        break;
      case 'Optional alcohol':
        color = 'orange';
        break;
      default:
        color = 'gray'; // default color if type is not recognized
    }

    const style = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: color,
        display: 'inline-block',
        marginRight: '5px'
      };

   return <span style={style}></span>
}

export default TypeIndicator