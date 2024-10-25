import classes from "./AvailableMeals.module.css";
import Meallitem from "./Meallitem/Meallitem";
import Card from "../UI/Card";
const DUMMAY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvailableMeals = () => {
    const MealList = DUMMAY_MEALS.map((item) => <Meallitem key={item.id} name ={item.name} description={item.description} price={item.price}/>)
    return (
        <section className={classes.meals}>
            <Card>
                <ul>{MealList}</ul>
            </Card>
        </section>
    );
}

export default AvailableMeals;