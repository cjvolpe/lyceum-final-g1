import {Flashcard,Process,Task} from "../../frontend/src/lib/types.js"

export class Database {
    private flashcards: Flashcard[] = [];

    async getNextCard(current: number):Promise<Process<Task>> {
        if(current+1< this.flashcards.length){
            const nextCard = this.flashcards[current+1];
            return {success: true, data: nextCard};
        }
        return {success:false, error: , code: 500};

    }

    async addFlashcard(card: Flashcard):Promise<Task>{
        this.flashcards.push(card);
        return {success: true};
    }
}