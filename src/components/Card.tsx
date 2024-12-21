import { CardProps } from './interfaces.ts';

const Card = ({ title, content, btnText, children }: CardProps) => {
  return (
    <div className='card'>
      {children}
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{content}</p>
        <a href='#' className='card-button'>{btnText}</a>
      </div>
    </div>
  );
}

export default Card;
