import styles from './Food.module.css'

function highlightText(text: string, searchQuery: string) {
    const [start, end] = [text.toLowerCase().indexOf(searchQuery.toLowerCase()), text.toLowerCase().indexOf(searchQuery.toLowerCase()) + searchQuery.length]
    return (
        <p>{text.substring(0, start)}
            <mark className={styles.highlightText}>{text.substring(start, end)}</mark>
            {text.substring(end, text.length)}
        </p>
    );
}

export function Food(food: Food, searchQuery: string) {
    return (<div className={styles.food}>
        <div className={styles.title}>
            <p>{highlightText(food.name, searchQuery)}</p>
        </div>
        <div className={styles.description}>
            <p>{highlightText(food.description, searchQuery)}</p>
        </div>
    </div>);
}
export type Food = {
    id: number;
    name: string;
    description: string;
};
