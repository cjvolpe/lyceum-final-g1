import {Flashcard,Process,Task} from "../../frontend/src/lib/types.js"

export class Database {
    private flashcards: Flashcard[] = [];

    async getNextCard(current: number):Promise<Process<Task>> {
        if(current+1< this.flashcards.length){
            const nextCard = this.flashcards[current+1];
            return {success: true, data: nextCard};
        }
        return {success:false, error:  code: 500};

    }

    async addFlashcard(card: Flashcard):Promise<Task>{
        // OPTIONAL ERROR CHECK HERE
        // if(!card) {
        //     return {success: false, error: 400}
        // }
        this.flashcards.push(card);
        return {success: true};
    }

    async flipFlashcard(card: Flashcard): String {
        // OPTIONAL ERROR CHECK HERE
        // if(!card) {
        //     return {success: false, error: 400}
        // }
        if(card.definitionRevealed) {
            card.definitionRevealed = false;
            return card.term;
        }
        card.definitionRevealed = true;
        return card.definition;
    }
}