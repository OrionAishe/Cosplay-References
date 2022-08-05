import classes from './Card.module.scss';

function Card({children}) {
  return <div className={classes.card}>
    {children}
  </div>;
}

export default Card;
