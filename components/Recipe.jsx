import Markdown from "react-markdown"

export default function Recipe(props){
    return(
        <section className="recipecontainer" aria-live="polite">
            <Markdown>
                {props.isRecipeShown}
            </Markdown>
        </section>
    )
}