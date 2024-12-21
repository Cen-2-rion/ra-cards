export interface CardProps {
  title: string,
  content: string,
  btnText: string,
  children?: React.ReactNode,
}

export interface CardImageProps {
  src?: string,
  alt?: string,
}
