import ToDoForm from '../components/forms/ToDoForm'
import { SpaceIsland } from '../components/scenes/SpaceIsland'

export default function ProductivityHub() {
    return(
        <section style={{display: "flex", width: "100vw"}}>
            <ToDoForm />
            <SpaceIsland />
        </section>
    )
}