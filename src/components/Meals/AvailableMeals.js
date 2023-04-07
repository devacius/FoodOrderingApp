import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Chole Bhature',
    description: 'The king in the North',
    price: 229,
  },
  {
    id: 'm2',
    name: 'Pav Bhaji',
    description: 'A north Indian speciality!',
    price: 165,
  },
  {
    id: 'm3',
    name: 'Chole kulche',
    description: 'If you dont like it rought take it soft',
    price: 129.9,
  },
  {
    id: 'm4',
    name: 'Palakh Paneer',
    description: 'Healthy...and green...',
    price: 189.9,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
