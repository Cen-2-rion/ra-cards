import { CardImageProps } from './interfaces.ts';

const CardImage = ({ src, alt }: CardImageProps) => {
  return src ? (
    <img className='card-image' src={src} alt={alt} />
    ) : (
    <div className='card-image'>Image cap</div>
  );
}
  
export default CardImage;
