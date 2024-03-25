import Card from "./trainerCard"
import superCode from "../data/superCode.json"
const TrainerSection = () => {
    return (
        <section>
            <Card
                name="Marzio"
                age="30"
                img="https://assets-global.website-files.com/62d9141584e7b750edcafa6a/65cf6fb4848b8726e0b6c8bc_Marzio%20Supercode-min%20(1)-p-500.jpg"
            />
            {superCode.map((singleTrainer) =>
                < Card
                    name={singleTrainer.name}
                    age={singleTrainer.age}
                    img={singleTrainer.img}
                />
            )}
        </section>
    )
}

export default TrainerSection